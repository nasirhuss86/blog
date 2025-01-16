import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput, signinInput } from "@nasirhuss86/meddium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

//sign up
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();

  const { success, error } = signupInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Input validation failed", errors: error.errors });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        username: body.username,
        email: body.email,
        password: body.password, 
      },
    });

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(token); 
  } catch (e) {
    console.error(e);
    c.status(400);
    return c.text("Signup failed");
  }
});

//sign in
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();

  const { success, error } = signinInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Input validation failed", errors: error.errors });
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password, 
      },
    });

    if (!user) {
      c.status(401);
      return c.text("Invalid credentials");
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.text(token);
  } catch (e) {
    console.error(e);
    c.status(400);
    return c.text("Signin failed");
  }
});
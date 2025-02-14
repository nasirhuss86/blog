import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput } from "@nasirhuss86/meddium-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

//middleware 
blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  if (!authHeader) {
    c.status(401);
    return c.json({ message: "Missing authorization header" });
  }

  try {
    const user = await verify(authHeader, c.env.JWT_SECRET);
    c.set("userId", user.id as string);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "Unauthorized: Invalid token" });
  }
});

//create blog
blogRouter.post("/", async (c) => {
  const body = await c.req.json();

  const { success, error } = createBlogInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ message: "Validation error", errors: error.errors });
  }

  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });

    return c.json({ id: blog.id });
  } catch (e) {
    console.error(e);
    c.status(500);
    return c.json({ message: "Failed to create blog" });
  }
});



//get all blogs
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  
    const blogs = await prisma.blog.findMany({
      select: {
        content: true,
        title:true,
        id:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });

    return c.json({blogs}); 
  })

//get blog by id
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: id,
      },
    });

    if (!blog) {
      c.status(404);
      return c.json({ message: "Blog not found" });
    }

    return c.json(blog);
  } catch (error) {
    console.error(error);
    c.status(500);
    return c.json({ message: "Failed to fetch blog" });
  }
});
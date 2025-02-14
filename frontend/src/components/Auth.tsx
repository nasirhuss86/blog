import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import { SignupInput } from "@nasirhuss86/meddium-common";
import { BACKEND_URL} from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  async function sendrequest(){
  
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup": "signin"}`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blog");

    }catch(e){
      //alert the user here the request fails
      alert("Error while signing up ")
    }
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="text-3xl font-extrabold">Create an account</div>

          <div className="text-slate-400">
            {type === "signin" ? "Don't have an account?" : "Already have an account?" }
            <Link className="pl-2 underline" to={ type === "signin" ? "/signup" : "/signin" }>
              {type === "signin" ? "Sign up" : "Sign in" }
            </Link>
          </div>

        </div>
        <div className="space-y-4">
          {type === "signup" ? <LabelledInput
            label="Name"
            placeholder="Nasir Hussain..."
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />:null}
         {type === "signup" ? <LabelledInput
            label="email"
            placeholder="nasirhuss86@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />:null}

          <LabelledInput
            label="Username"
            placeholder="nasir@gmail.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                username: e.target.value,
              });
            }}
          />
          <LabelledInput
            label="Password"
            type="password"
            placeholder="1234556"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
          <button
            onClick={sendrequest}
            type="button"
            className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold text-black">{label}</label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
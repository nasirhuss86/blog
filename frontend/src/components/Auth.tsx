import { Link } from "react-router-dom"
export const Auth = ({type} : {type : "signup" | "signin"}) => { 
    return (
        <div className="h-screen items-center flex justify-center flex-col">
            <div className=" ">

              <div className=" flex justify-center text-xl font-extrabold   ">
                Create an account
              </div>

               <div className=" flex text-slate-400  text-base flex ">
                 Already have an account ? 
                 <Link className="pl-2 underline text-gray-500" to={"/signin"}>
                   Login
                 </Link>
                </div>
           </div>              
        </div>

    )
}
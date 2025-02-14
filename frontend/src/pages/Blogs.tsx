import {Appbar} from "../components/Appbar"
import { BlogCard } from "../components/Blogcard"

export const Blogs = () => {
    return(
        <div>
            <Appbar/>
         <div className="flex justify-center ">         
           <div className="max-w-xl ">
           <BlogCard 
           authorName={"Nasir Hussain"}
           title={"The man who changed the world are the ones who believed in themselves"}
           content={"we the people of the world are the ones who can change the world"}
           publishedDate={"2nd feb 2024"}
           />

<BlogCard 
           authorName={"Nasir Hussain"}
           title={"The man who changed the world are the ones who believed in themselves"}
           content={"we the people of the world are the ones who can change the world"}
           publishedDate={"2nd feb 2024"}
           />

<BlogCard 
           authorName={"Nasir Hussain"}
           title={"The man who changed the world are the ones who believed in themselves"}
           content={"we the people of the world are the ones who can change the world"}
           publishedDate={"2nd feb 2024"}
           />


<BlogCard 
           authorName={"Nasir Hussain"}
           title={"The man who changed the world are the ones who believed in themselves"}
           content={"we the people of the world are the ones who can change the world"}
           publishedDate={"2nd feb 2024"}
           />
           </div>
           
       </div>

        </div>
       
        
    )
}
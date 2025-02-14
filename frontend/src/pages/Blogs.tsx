import {Appbar} from "../components/Appbar"
import { BlogCard } from "../components/Blogcard"
import{useBlogs} from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

if (loading) {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-semibold text-gray-600 animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}

    return(
        <div>
            <Appbar/>
         <div className="flex justify-center ">         
           <div className="max-w-xl ">
          {blogs.map( blog=> <BlogCard 
           id={blog.id}
           authorName={blog.author.name || "Anonymous"}
           title={blog.title}
           content={blog.content}
           publishedDate={"2nd feb 2024"}
           />)}

           </div>
           
       </div>

        </div>
       
        
    )
}
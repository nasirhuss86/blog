import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";


export const Blog = () => {
  const { id } = useParams();
  const {loading, blog} = useBlog({
      id: id || ""
  });

  if (loading) {
    return (
      <div>
        <Appbar/>
        <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-4 text-xl font-semibold text-gray-600 animate-pulse">
            Loading...
          </p>
        </div>
      </div>

      </div>
      
    );
  }
  return (
    <div>
      <Appbar />
      {blog ? <FullBlog blog={blog} /> : <div>No blog available</div>}
    </div>
  );
}
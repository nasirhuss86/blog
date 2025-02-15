import { Blog } from "../hooks";
import { Avatar } from "./Blogcard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const handleFollowClick = () => {
        alert("Coming Soon!");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="flex justify-center">
                <div className="grid grid-cols-12 gap-6 px-6 w-full max-w-screen-xl pt-12">
                    <div className="col-span-8 bg-white p-6 rounded-xl shadow-md">
                        <h1 className="text-4xl font-extrabold text-gray-800">
                            {blog.title}
                        </h1>
                        <p className="text-slate-500 pt-2">
                            Posted on 15 February 2025
                        </p>
                        <div className="pt-6 text-lg text-gray-700">
                            {blog.content}
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h2 className="text-slate-600 text-lg">
                                Author
                            </h2>
                            <div className="flex items-center mt-4">
                                <div className="pr-4">
                                    <Avatar size="big" name={blog.author.name || "Anonymous"} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {blog.author.name || "Anonymous"}
                                    </h3>
                                    <p className="text-slate-500 pt-2">
                                        Random catchphrase about the author's ability to grab the user's attention.
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleFollowClick}
                                className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
                            >
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
import { Blog } from "../hooks";
import { Avatar } from "./Blogcard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
    const handleFollowClick = () => {
        alert("Coming Soon!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-6 w-full max-w-screen-xl pt-12">
                    {/* Blog Content */}
                    <div className="col-span-1 md:col-span-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">
                            {blog.title}
                        </h1>
                        <p className="text-gray-500 pt-3 text-sm md:text-base italic">
                            Posted on 15 February 2025
                        </p>
                        <div className="pt-6 md:pt-8 text-lg md:text-xl text-gray-800 leading-relaxed">
                            {blog.content}
                        </div>
                    </div>

                    {/* Author Info */}
                    <div className="col-span-1 md:col-span-4">
                        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                            <h2 className="text-gray-600 text-lg font-semibold tracking-wide">
                                Author
                            </h2>
                            <div className="flex items-center mt-6">
                                <div className="pr-4">
                                    <Avatar
                                        size="big"
                                        name={blog.author.name || "Anonymous"}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
                                        {blog.author.name || "Anonymous"}
                                    </h3>
                                    <p className="text-gray-500 pt-2 text-sm md:text-base italic">
                                        "Random catchphrase that grabs attention."
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={handleFollowClick}
                                className="mt-8 w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 shadow-lg"
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
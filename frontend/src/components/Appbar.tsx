import { Avatar } from "./Blogcard";
import { Link, useLocation } from "react-router-dom";
import { Plus, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Appbar = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/signin";
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6">
                <Link to="/blogs">
                    <div className="text-3xl font-extrabold text-gray-800 hover:text-gray-600 transition-colors cursor-pointer">
                        Bloggy
                    </div>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link to={`/publish`}>
                        <button
                            type="button"
                            className="flex items-center text-white bg-green-600 hover:bg-green-700 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold rounded-full text-sm px-5 py-2 shadow-lg"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            New
                        </button>
                    </Link>
                    <Link to={`/blogs`}>
                        <button
                            type="button"
                            className="text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-gray-300 font-semibold rounded-full text-sm px-5 py-2 shadow-md"
                        >
                            All Blogs
                        </button>
                    </Link>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity focus:outline-none"
                        >
                            <Avatar size="big" name="Nasir Hussain" />
                            <ChevronDown className="w-4 h-4 text-gray-600" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                                <button
                                    onClick={handleLogout}
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};
export const BlogSkeleton = () => {
    return (
      <div className="animate-pulse p-8 border-b border-slate-200 w-screen max-w-screen-md">
        <div className="flex items-center space-x-4 mb-4">
          <div className="rounded-full bg-gray-300 h-6 w-6"></div>
          <div className="h-4 bg-gray-300 rounded w-32"></div>
          <div className="h-4 bg-gray-300 rounded w-12"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
        <div className="h-3 bg-gray-200 rounded w-24 mt-4"></div>
      </div>
    );
  };
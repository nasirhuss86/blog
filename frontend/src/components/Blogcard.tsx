import { Link } from "react-router-dom";

interface BlogcardProps{
    id: string;
    authorName: string;
    title : string;
    content: string;
    publishedDate: string;
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogcardProps) => {
    return (
        <Link to={`/blog/${id}`} >
        <div className="p-8 border-b border-slate-200 w-screen max-w-screen-md cursor-pointer">
            <div className="flex ">
               <Avatar  size ="small" name={authorName} />
                <div className="font-extralight pl-2  flex items-center justify-center"> 
                    {authorName }
                </div>
                <div className="flex items-center pl-2">
                    &#183;
                </div>
                <div className="font-thin pl-2 text-gray-400 flex items-center justify-center">
                    {publishedDate}
                </div>
           </div>
            <div className="text-xl font-semibold pt-2">
                <h1>{title}</h1>
            </div>
            <div className="text-md font-light">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-light pt-2">
               {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
        </Link>
    )
}

export function  Avatar({name ,size = "small"}:{name:string ,size:"small"| "big"}) {
    return (
        <div>

             <div className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === "small" ? "h-6 w-6"  : "h-10 w-10"}`}>
               <span className= {` ${size === "small" ? "text-xs" : "text-xl"} text-xs text-gray-600 dark:text-gray-300`}>{name[0]}</span>
            </div>

        </div>
    )

}


export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500"> </div>
}
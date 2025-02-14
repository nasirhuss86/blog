import { Avatar } from "./Blogcard"

export const Appbar = () => {
    return <div className="border-b-2 border-gray-200 flex justify-between items-center p-4 px-10 py-4">
        <div className=" flex flex-col justify center text-2xl font-bold">
           Bloggy
        </div>
        <div>
            <Avatar size={"big"} name="Nasir Hussain"/>
        </div>

    </div>
}
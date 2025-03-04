import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import Logout from "./Logout";

function Sidebar(){
  return(
    <div className="w-1/4 pr-5 overflow-hidden flex flex-col justify-between" >
      <div className="relative ">
        <div className="absolute flex items-center inset-y-0 left-0 pl-3"><FaSearch className="w-4 h-4 text-gray-500"/></div>
        <input type="search" id="default-search" autoComplete="off" required placeholder="Search..." className="block w-full bg-gray-900 text-gray-400 p-2 pl-10 text-xl rounded-md "/>
      </div>
      <div className="overflow-scroll h-full mb-[1px]">
        <OtherUsers/>
      </div>
      <div>
        <Logout/>
      </div>
    </div>
  )
}

export default Sidebar;


import React from "react";
// import { BellIcon, UserCircleIcon } from '@heroicons/react/outline'; // You need to install @heroicons/react for these icons
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { HiOutlineBell } from "react-icons/hi2";

function Navbar() {
  
  return (
    <div className="fixed top-0 w-full h-12 bg-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-3xl font-bold">RevRoad</div>
        <div className="flex items-center space-x-4">
          {/* <BellIcon className="h-6 w-6 text-gray-600" />
          <UserCircleIcon className="h-6 w-6 text-gray-600" /> */}
          <div className="card flex flex-wrap justify-content-center gap-4">
            <i
              className="p-overlay-badge text-black"
              
            ><HiOutlineBell className="text-2xl"/>
              {/* <Badge value="3" className="bg-green"></Badge> */}
            </i>
            
          </div>
          <div className="flex-auto">
            <Avatar
              className="p-overlay-badge"
              image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg"
              size="xlarge"
              shape="circle"
            ></Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

import React, { FC } from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const Header: FC = () => {
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white
     shadow-md p-5 md:px-8"
    >
      {/* logo */}
      <div
        className="relative flex h-10 items-center cursor-pointer 
          my-auto"
      >
        <Image
          src={"https://links.papareact.com/qd3"}
          fill={true}
          alt="AirbnbLogo"
          className="object-contain object-left"
        />
      </div>

      {/* search */}
      <div
        className="flex items-center border-2 rounded-full py-2 
          px-2 md:shadow-md"
      >
        <input
          type="text"
          placeholder="Search..."
          className="pl-3 bg-transparent outline-none 
            flex flex-grow text-gray-600"
        />
        <MagnifyingGlassCircleIcon
          className="h-8 bg-white
           text-red-400 cursor-pointer hidden md:inline-flex"
        />
      </div>

      {/* login */}
      <div
        className="flex items-center justify-end space-x-4
        text-gray-600"
      >
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div
          className="flex space-x-2 border-2 p-2 
        rounded-full"
        >
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React, { useState } from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  UserCircleIcon,
  Bars3Icon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({ placeholder }: any) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");
  const router = useRouter();

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white
     shadow-md p-5 md:px-8"
    >
      {/* logo */}
      <div
        onClick={() => router.push("/")}
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Search..."}
          className="pl-3 bg-transparent outline-none 
            flex flex-grow text-gray-600"
        />
        <MagnifyingGlassCircleIcon
          className="h-8 bg-white
           text-red-400 cursor-pointer hidden md:inline-flex"
          onClick={search}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD6B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b pb-2 mb-2">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests
            </h2>
            <UsersIcon className="h-6" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              className="w-12 pl-2 text-lg outline-none
              text-red-500"
              min={"1"}
              max={"10"}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button onClick={search} className="flex-grow text-red-400">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;

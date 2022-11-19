import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

interface Stay {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
}

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Stay) {
  return (
    <div
      className="flex py-5 px-2 border-b cursor-pointer hover:opacity-90
        hover:shadow-lg pr-4 transition duration-200 first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          fill={true}
          alt="Image of the room"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex items-center justify-between">
          <p className="text-sm">{location}</p>
          <HeartIcon className="h-6 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>
        <p className="text-sm text-gray-500 flex-grow pt-2">{description}</p>

        <div className="flex justify-between items-end">
          <p className="flex item-center">
            <StarIcon className="h-4 text-red-400 my-auto" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;

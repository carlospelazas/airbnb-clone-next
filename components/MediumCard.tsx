import React from "react";
import Image from "next/image";

interface Post {
  img: string;
  title: string;
}

function MediumCard({ img, title }: Post) {
  return (
    <div
      className="cursor-pointer hover:scale-105 transform transition
        duration-300"
    >
      <div className="relative h-80 w-80">
        <Image
          src={img}
          fill={true}
          alt="Location Image 2"
          className="rounded-xl"
        />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;

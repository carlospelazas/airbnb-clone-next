import React from "react";
import Image from "next/image";

interface LargeCard {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

function LargeCard({ img, title, description, buttonText }: LargeCard) {
  return (
    <section className="relative py-16">
      <div className="relative min-w-[300] h-96">
        <Image
          src={img}
          alt="Large Card image"
          fill={true}
          className="rounded-2xl cursor-pointer"
        />
      </div>
      <div className="absolute top-32 left-14">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p>{description}</p>

        <button
          className="text-sm text-white
            bg-gray-900 px-4 py-2 rounded-lg mt-5
            active:scale-90 transition duration-150"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;

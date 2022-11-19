import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import { stringify } from "querystring";
import { GetServerSideProps } from "next";
import InfoCard from "../components/InfoCard";

function Search({ data }: any) {
  const router = useRouter();
  console.log(data);

  //ES6 destructuring
  const { location, startDate, endDate, noOfGuests }: any = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div
            className="hidden md:inline-flex mb-5 space-x-3
            text-gray-800 whitespace-nowrap"
          >
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {data.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
              }: Stay) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

type Stay = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Search;

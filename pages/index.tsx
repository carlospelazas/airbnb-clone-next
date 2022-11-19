import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

export default function Home({ data1, data2 }: Post) {
  return (
    <div className="">
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2
            className="text-4xl 
          font-semibold pb-5"
          >
            Explore nearby
          </h2>
          {/* Pull data from server endpoint (API) 
          - Server side rendering*/}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
            lg:grid-cols-3 xl:grid-cols-4"
          >
            {data1?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          <div
            className="flex space-x-4 overflow-x-scroll
            p-3 -ml-3"
          >
            {data2?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

type Post = {
  data1: {
    img: string;
    location: string;
    distance: string;
  }[];
  data2: {
    img: string;
    title: string;
  }[];
};

export const getStaticProps: GetStaticProps = async () => {
  const res1 = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const data1 = await res1.json();

  const res2 = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const data2 = await res2.json();

  // pass data to the page via props
  return {
    props: {
      data1,
      data2,
    },
  };
};

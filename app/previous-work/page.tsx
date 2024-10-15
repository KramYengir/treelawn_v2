import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const previousWorkData = [
  {
    title: "Fresh Lawn Installation",
    description:
      "This project required the careful planning and preparation for the laying of fresh lawn in an old garden",
    imageBeforeUrl: "/images/garden-before.jpeg",
    imageBeforeAlt: "small garden without any grass",
    imageAfterUrl: "/images/garden-after.jpeg",
    imageAfterAlt: "small garden with freshly laid lawn",
    caption: "Garden",
  },
  {
    title: "Roadside Tree Care",
    description:
      "The project involved the careful removal of large trees along a busy farm road",
    imageBeforeUrl: "/images/road-before.jpeg",
    imageBeforeAlt: "country road with large trees",
    imageAfterUrl: "/images/road-after.jpeg",
    imageAfterAlt: "country road with large trees cut down",
    caption: "Roadside",
  },
  {
    title: "Land Clearing at Golf Course/Farm",
    description:
      "A huge project, involving the clearing and tidying of a large area of farmland which intersected with a active golf course",
    imageBeforeUrl: "/images/farm-before.jpeg",
    imageBeforeAlt: "row of large pines along a large farm shed",
    imageDuringUrl: "/images/farm-during.jpeg",
    imageDuringAlt:
      "digger in the process of clearing knocked pine trees along large farm shed",
    imageAfterUrl: "/images/farm-after-a.jpeg",
    imageAfterAlt: "land cleared of trees along a large farm shed",
    imageAfterUrlB: "/images/farm-after-b.jpeg",
    imageAfterAltB: "land cleared of trees along a large farm shed",
    caption: "Farm/Golf Course",
  },
];

const PreviousWorkPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="h2 text-mucky-50 pt-32 pb-12 border-b-2 bg-apple-950 border-mucky-950/10 shadow-lg">
        Previous Work
      </h1>
      <p className="text-xl md:text-2xl font-medium text-balance text-center bg-gradient-to-b from-mucky-950/10 to-mucky-950/5 py-12 px-6 shadow-md">
        Below are some examples of recent projects completed by TreeLawn
      </p>

      {/* Wrap the GallerySection components in a <ul> */}
      <ul className="divide-y divide-mucky-950/10 divide">
        {previousWorkData.map((work, index) => (
          <li key={index} className="py-8">
            <GallerySection
              title={work.title}
              description={work.description}
              imageBeforeUrl={work.imageBeforeUrl}
              imageBeforeAlt={work.imageBeforeAlt}
              imageDuringUrl={work.imageDuringUrl}
              imageDuringAlt={work.imageDuringAlt}
              imageAfterUrl={work.imageAfterUrl}
              imageAfterAlt={work.imageAfterAlt}
              imageAfterUrlB={work.imageAfterUrlB}
              imageAfterAltB={work.imageAfterAltB}
              caption={work.caption}
              index={index}
            />
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default PreviousWorkPage;

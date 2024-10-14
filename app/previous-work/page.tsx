import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

const previousWorkData = [
  {
    title: "Fresh Turf Installation",
    description:
      "This project required the careful planning and preparation for the laying of fresh turf in an old garden",
    imageBeforeUrl: "/images/garden-before.jpeg",
    imageBeforeAlt: "small garden without any grass",
    imageAfterUrl: "/images/garden-after.jpeg",
    imageAfterAlt: "small garden with freshly laid lawn",
    caption: "Garden",
  },
  {
    title: "",
    description: "",
    imageBeforeUrl: "",
    imageBeforeAlt: "",
    imageAfterUrl: "",
    imageAfterAlt: "",
    caption: "",
  },
];

const PreviousWorkPage = () => {
  return (
    <div>
      <Navbar />
      <h2 className="h2 text-mucky-50 pt-32 pb-12 border-b-2 bg-apple-950 border-mucky-950/10 shadow-md">
        Previous Work
      </h2>
      <p className="text-lg md:text-xl font-light text-balance text-center py-12 px-6">
        Below are examples of some of the work I have completed for TreeLawn
      </p>

      {previousWorkData.map((work, index) => (
        <GallerySection
          key={index}
          title={work.title}
          description={work.description}
          imageBeforeUrl={work.imageBeforeUrl}
          imageBeforeAlt={work.imageBeforeAlt}
          imageAfterUrl={work.imageAfterUrl}
          imageAfterAlt={work.imageAfterAlt}
          caption={work.caption}
        />
      ))}
      <Footer />
    </div>
  );
};

export default PreviousWorkPage;

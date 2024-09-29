import React from "react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    imgUrl: "/images/chainsaw-zoom.png",
    imgAlt: "simple graphic of a chainsaw",
    title: "Tree Maintenance",
    description:
      "As an experienced arborist, I specialize in tree maintenance and management, including expert tree cutting and clearance services",
  },
  {
    imgUrl: "/images/digger-zoom.png",
    imgAlt: "simple graphic of a digger",
    title: "Area Clearance",
    description:
      "As a skilled landscaper and arborist, I specialize in tree maintenance and management, including expert tree cutting and clearance services",
  },
  {
    imgUrl: "/images/clippers-zoom.png",
    imgAlt: "simple graphic of a clippers",
    title: "Pruning & Trimming",
    description:
      "As a skilled landscaper and arborist, I specialize in tree maintenance and management, including expert tree cutting and clearance services",
  },
  {
    imgUrl: "/images/lawnmower-zoom.png",
    imgAlt: "simple graphic of a lawnmower",
    title: "Garden Maintenance",
    description:
      "As a skilled landscaper and arborist, I specialize in tree maintenance and management, including expert tree cutting and clearance services",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="grid bg-[url('../public/images/garden-after-sm.jpeg')] sm:bg-[url('../public/images/garden-after.jpeg')] bg-cover bg-center py-24"
    >
      <div className="rm-container">
        <h2 className="h2 text-mucky-50">Our Services</h2>
        <div className="flex flex-wrap gap-6 justify-evenly">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              imgUrl={service.imgUrl}
              imgAlt={service.imgAlt}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
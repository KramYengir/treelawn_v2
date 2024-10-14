import React from "react";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    imgUrl: "/images/chainsaw-brown.png",
    imgAlt: "simple graphic of a chainsaw",
    title: "Tree Maintenance",
    description:
      "As an experienced arborist, I provide expert tree cutting, trimming and clearance to keep your property safe and well-maintained",
  },
  {
    imgUrl: "/images/digger-brown.png",
    imgAlt: "simple graphic of a digger",
    title: "Land Clearance",
    description:
      "Clear unwanted vegetation, debris and obstacles from overgrown areas, preparing your land for landscaping, construction, or personal use",
  },
  {
    imgUrl: "/images/clippers-brown.png",
    imgAlt: "simple graphic of a clippers",
    title: "Pruning & Trimming",
    description:
      "Keep your land neat with professional pruning and trimming of overgrown hedges, shrubs and trees for a tidy, polished look",
  },
  {
    imgUrl: "/images/lawnmower-brown.png",
    imgAlt: "simple graphic of a lawnmower",
    title: "Garden Renovations",
    description:
      "Revitalize your garden with custom landscaping, including new lawns, lawn replacement and pathways tailored to your needs",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="grid bg-[url('../public/images/lawn-after-sm.jpeg')] sm:bg-[url('../public/images/lawn-after.jpeg')] bg-cover bg-center py-24"
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

import React from "react";

interface ServiceCardProps {
  imgUrl: string;
  imgAlt: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  imgUrl,
  imgAlt,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <div className="relative grid gap-4 items-start justify-center text-center pb-12 min-w-80 bg-gradient-to-t from-mucky-50 to-mucky-100 rounded-xl">
      <img src={imgUrl} alt={imgAlt} className="w-20 pt-12 pb-8 mx-auto" />
      <h3 className="w-80 uppercase text-balance text-2xl text-mucky-950 tracking-wide py-2 font-medium">
        {title}
      </h3>
      <p className="text-balance tracking-wide max-w-64 mx-auto">
        {description}
      </p>
      <div className="absolute inset-0 -z-10 backdrop-blur-md rounded-xl"></div>
    </div>
  );
};

export default ServiceCard;

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
    <div className="grid gap-4 items-start justify-center text-center px-2 py-12 max-w-xs bg-neutral-950/20 backdrop-blur-md rounded-xl">
      <img src={imgUrl} alt={imgAlt} className="w-[30%] mx-auto" />
      <h3 className="text-balance text-3xl text-mucky-50 font-bold">{title}</h3>
      <p className="text-balance text-mucky-50 font-medium tracking-wide max-w-64 mx-auto">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

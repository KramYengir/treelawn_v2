import React from "react";
interface GallerySectionProps {
  title: string;
  description: string;
  imageBeforeUrl: string;
  imageBeforeAlt: string;
  imageAfterUrl: string;
  imageAfterAlt: string;
  caption: string;
}

const GallerySection = ({
  title,
  description,
  imageBeforeUrl,
  imageBeforeAlt,
  imageAfterUrl,
  imageAfterAlt,
  caption,
}: GallerySectionProps) => {
  return (
    <section className="w-full py-12">
      <div className="rm-container grid gap-6 justify-center items-center font-medium tracking-wide">
        <div>
          <h3 className="text-2xl font-bold md:text-left">{title}</h3>
          <p className="text-lg md:text-xl font-medium tracking-wide text-balance py-6">
            {description}
          </p>
          <div className="flex flex-wrap justify-evenly gap-6">
            <div className="relative max-w-2xl rounded-md overflow-hidden">
              <img src={imageBeforeUrl} alt={imageBeforeAlt} />
              <div className="absolute bottom-0 flex items-center px-4 h-12 md:h-16 w-full bg-neutral-950/40">
                <p className="text-white text-lg md:text-xl">
                  {caption}- Before
                </p>
              </div>
            </div>
            <div className="relative max-w-2xl rounded-md overflow-hidden">
              <img src={imageAfterUrl} alt={imageAfterAlt} />
              <div className="absolute bottom-0 flex items-center px-4 h-12 md:h-16 w-full bg-neutral-950/40">
                <p className="text-white text-lg md:text-xl">
                  {caption} - After
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

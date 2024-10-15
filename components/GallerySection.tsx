import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GallerySectionProps {
  title: string;
  description: string;
  imageBeforeUrl: string;
  imageBeforeAlt: string;
  imageDuringUrl?: string;
  imageDuringAlt?: string;
  imageAfterUrl: string;
  imageAfterAlt: string;
  imageAfterUrlB?: string;
  imageAfterAltB?: string;
  caption: string;
}

const GallerySection = ({
  title,
  description,
  imageBeforeUrl,
  imageBeforeAlt,
  imageDuringUrl,
  imageDuringAlt,
  imageAfterUrl,
  imageAfterAlt,
  imageAfterUrlB,
  imageAfterAltB,
  caption,
}: GallerySectionProps) => {
  return (
    <section className="w-full py-12">
      <div className="rm-container  gap-6 justify-center items-center ">
        <div>
          <h2 className=" text-2xl font-bold text-center">{title}</h2>
          <p className="text-lg md:text-xl font-light tracking-wide text-center max-w-[45ch] mx-auto py-6">
            {description}
          </p>

          <div className=" flex justify-center items-center  max-w-screen-lg mx-auto overflow-hidden">
            <Carousel>
              <CarouselContent className="flex gap-2 w-full mx-auto">
                {/* Image Before */}
                <CarouselItem className="flex justify-center w-full flex-shrink-0 pl-0">
                  <div className=" flex justify-center items-center  rounded-md overflow-hidden">
                    <div className="relative">
                      <img
                        src={imageBeforeUrl}
                        alt={imageBeforeAlt}
                        className="max-h-[75vh]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center px-4 h-12 md:h-16 bg-neutral-950/40">
                        <p className="text-white text-lg md:text-xl">
                          {caption} - Before
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Image During (optional) */}
                {imageDuringUrl && (
                  <CarouselItem className="flex justify-center w-full flex-shrink-0 pl-0">
                    <div className=" flex justify-center items-center  rounded-md overflow-hidden">
                      <div className="relative">
                        <img
                          src={imageDuringUrl}
                          alt={imageDuringAlt}
                          className="max-h-[75vh]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 flex items-center px-4 h-12 md:h-16 bg-neutral-950/40">
                          <p className="text-white text-lg md:text-xl">
                            {caption} - During
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )}

                {/* Image After */}
                <CarouselItem className="flex justify-center w-full flex-shrink-0 pl-0">
                  <div className=" flex justify-center items-center  rounded-md overflow-hidden">
                    <div className="relative">
                      <img
                        src={imageAfterUrl}
                        alt={imageAfterAlt}
                        className="max-h-[75vh]"
                      />
                      <div className="absolute bottom-0 left-0 right-0 flex items-center px-4 h-12 md:h-16 bg-neutral-950/40">
                        <p className="text-white text-lg md:text-xl">
                          {caption} - After
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                {/* Second After Image (optional) */}
                {imageAfterUrlB && (
                  <CarouselItem className="flex justify-center w-full flex-shrink-0 pl-0">
                    <div className=" flex justify-center items-center  rounded-md overflow-hidden">
                      <div className="relative">
                        <img
                          src={imageAfterUrlB}
                          alt={imageAfterAltB}
                          className="max-h-[75vh]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 flex items-center px-4 h-12 md:h-16 bg-neutral-950/40">
                          <p className="text-white text-lg md:text-xl">
                            {caption} - After
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )}
              </CarouselContent>

              {/* Navigation */}
              <CarouselPrevious className="absolute left-0 top-1/2  -translate-y-1/2 p-2">
                Previous
              </CarouselPrevious>
              <CarouselNext className="absolute right-0 top-1/2  -translate-y-1/2 p-2">
                Next
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

import React from "react";

const AboutCollage = () => {
  return (
    <div className="relative grid grid-cols-2 max-w-lg aspect-4/3 overflow-hidden mx-auto">
      <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
        <img src="/images/guy-clipping.jpg" alt="simple lawnmower graphic" />
      </div>
      <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
        <img src="/images/tree-cutting.jpg" alt="simple digger graphic" />
      </div>
      <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
        <img src="/images/digging.webp" alt="simple clippers graphic" />
      </div>
      <div className="overflow-hidden border-4 border-mucky-50 rounded-2xl ">
        <img src="/images/woodcutter.jpg" alt="simple chainsaw graphic" />
      </div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[40%] bg-mucky-50 rounded-full overflow-hidden">
        <img src="/images/logo-v3.png" alt="treelawn logo" />
      </div>
    </div>
  );
};

export default AboutCollage;
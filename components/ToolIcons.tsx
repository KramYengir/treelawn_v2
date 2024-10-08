import React from "react";

const ToolIcons = () => {
  return (
    <div className="flex w-full items-center gap-[4%]">
      <div className="max-w-16 md:max-w-16 overflow-hidden bg-gradient-to-t from-neutral-950/90 to-apple-900/90 p-1 rounded-2xl border-2 border-mucky-50 shadow-lg ">
        <img src="/images/lawnmower-zoom.png" alt="simple lawnmower graphic" />
      </div>
      <div className="max-w-16 md:max-w-16 overflow-hidden bg-gradient-to-t from-neutral-950/90 to-apple-900/90 p-1 rounded-2xl border-2 border-mucky-50 shadow-lg ">
        <img src="/images/digger-zoom.png" alt="simple digger graphic" />
      </div>
      <div className="max-w-16 md:max-w-16 overflow-hidden bg-gradient-to-t from-neutral-950/90 to-apple-900/90 p-1 rounded-2xl border-2 border-mucky-50 shadow-lg ">
        <img src="/images/clippers-zoom.png" alt="simple clippers graphic" />
      </div>
      <div className="max-w-16 md:max-w-16 overflow-hidden bg-gradient-to-t from-neutral-950/90 to-apple-900/90 p-1 rounded-2xl border-2 border-mucky-50 shadow-lg ">
        <img src="/images/chainsaw-zoom.png" alt="simple chainsaw graphic" />
      </div>
    </div>
  );
};

export default ToolIcons;

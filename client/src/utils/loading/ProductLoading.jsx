import React from "react";

const ProductLoading = () => {
  return (
    <div className="animate-pulse px-2">
      <div className=" lg:w-[275px] lg:h-[285px] md:w-60 md:h-60  sm:w-60 sm:h-64 w-60 h-60 bg-gray-200 rounded-lg overflow-hidden mx-auto">
        <div className="bg-gray-400 h-full w-full"></div>
      </div>
      <div class="h-2 mt-3 bg-gray-400 rounded"></div>
      <div class="grid grid-cols-3 gap-4 mt-3">
        <div class="h-2 bg-gray-400 rounded col-span-2"></div>
        <div class="h-2 bg-gray-400 rounded col-span-1"></div>
      </div>
    </div>
  );
};

export default ProductLoading;

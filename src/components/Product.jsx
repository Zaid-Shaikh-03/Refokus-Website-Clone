import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div
      onMouseEnter={() => {
        mover(count);
      }}
      className="w-full py-8 sm:py-20 text-white h-[23rem]  bg-zinc-900 relative  duration-500 ease-[cubic-bezier(0.45, 0, 0.55, 1)] group "
    >
      <img
        className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-[inherit] ease-[inherit] h-full w-full object-cover"
        src={val.bgimg}
        alt=""
      />
      <div className="relative z-10 max-w-screen-xl  mx-auto flex flex-col sm:flex-row items-start sm:items-center px-5 justify-between">
        <h1 className="text-4xl sm:text-5xl capitalize font-medium lg:px-5 xl:px-0 pb-1 sm:pb-0">
          {val.heading}
        </h1>
        <div className="dets w-2/5 sm:w-1/3 lg:px-5 xl:px-0">
          <p className="mb-10 ">{val.description}</p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-8  opacity-0 group-hover:opacity-100">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

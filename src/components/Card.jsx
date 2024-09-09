import React from "react";
import { IoMdArrowForward } from "react-icons/io";

function Card({ width, start, para, hover = "none" }) {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl min-h-[30rem] flex flex-col justify-between hover:bg-[${hover}] ${width}`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Up Next:Culture</h3>
          <IoMdArrowForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">
          Insights and behind the senses
        </h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none ">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contect Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;

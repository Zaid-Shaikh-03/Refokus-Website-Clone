import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl py-6 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700 px-5">
      <div className="nleft flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="links hidden md:flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a
                key={index}
                href="#"
                className="font-regular text-sm flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.5em #00FF19" }}
                    className="inline-block size-1.5 bg-[#00FF19] font-['satoshi'] rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
}

export default Navbar;

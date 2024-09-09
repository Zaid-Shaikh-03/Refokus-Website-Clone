import React from "react";

function Marquee({ imagesUrls }) {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-x-hidden">
      {imagesUrls.map((url, index) => (
        <img key={index} src={url} alt="" className="w-[6vw] flex-shrink-0" />
      ))}
      {imagesUrls.map((url, index) => (
        <img key={index} src={url} alt="" className="flex-shrink-0" />
      ))}
    </div>
  );
}

export default Marquee;

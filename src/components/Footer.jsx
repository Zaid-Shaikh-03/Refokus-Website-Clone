import React from "react";

function Footer() {
  return (
    <div>
      <div className="bg-zinc-900 w-full">
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col lg:flex-row gap-10 px-5 sm:px-0">
          <div className="left w-full sm:w-3/5">
            <h1 className="text-[5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-semibold leading-none tracking-tight mb-2">
              refokus.
            </h1>
            <div className="flex flex-wrap">
              {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
                (elem, index) => (
                  <a
                    key={index}
                    className={`ml-10 ${
                      index === 0 && "ml-3"
                    } capitalize text-zinc-600`}
                  >
                    {elem}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="right w-full sm:w-2/5 flex gap-5">
            <div className="w-1/3">
              <h4 className="mb-10 text-zinc-500 capitalize">Socials</h4>
              {["Instagram", "twitter (x?)", "LinkedIn"].map((elem, index) => (
                <a key={index} className="block  mt-2 capitalize text-zinc-600">
                  {elem}
                </a>
              ))}
            </div>
            <div className="w-1/3">
              <h4 className="mb-10 text-zinc-500 capitalize">Sitemap</h4>
              {["Home", "Work", "Careers", "Contect"].map((elem, index) => (
                <a key={index} className="block  mt-2 capitalize text-zinc-300">
                  {elem}
                </a>
              ))}
            </div>
            <div className="lg:w-1/3 xl:w-1/2 flex flex-col items-start xl:items-end pr-3 xl:pr-0">
              <p className="text-left xl:text-right xl:mt-14">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                at?
              </p>
              <img
                src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                alt=""
                className="w-44 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

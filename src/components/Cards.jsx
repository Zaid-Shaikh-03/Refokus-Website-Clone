import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full bg-zinc-900 lg:p-5 xl:p-0">
      <div className="max-w-screen-xl mx-auto py-20 flex flex-col sm:flex-row px-5 sm:px-0 gap-5 sm:gap-2">
        <Card
          width={"basis-1/3"}
          start={false}
          para={true}
          heading1={"Up next news"}
          heading2={"Insights and behind the senses"}
        />
        <Card
          width={"basis-2/3"}
          start={true}
          para={false}
          hover={"true"}
          heading1={"get in touch"}
          heading2={"Let's get to it, together"}
        />
      </div>
    </div>
  );
}

export default Cards;

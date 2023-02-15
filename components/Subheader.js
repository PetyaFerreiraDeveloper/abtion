import Image from "next/image";
import React from "react";

export const Subheader = ({ data, nextWeek }) => {
  const icon = data.weather[0].icon;
  const temp = Math.round(data.main.temp);

  return (
    <header
      className={`py-10 px-8  ${nextWeek ? "bg-white" : "bg-lightYellow"} dark:bg-gray-400 flex flex-col sm:w-[500px] sm:mx-auto `}
    >
      <h2 className="text-center text-[20px] dark:text-white">{data.name} </h2>
    </header>
  );
};

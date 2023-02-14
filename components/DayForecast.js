import React from "react";
import Image from "next/image";

export const DayForecast = ({day}) => {
    console.log(day);
  return (
    <li className="flex items-center pl-8 pr-10 py-8 bg-[#F5C023] dark:bg-gray-400">
      <div className="pr-5">
        <Image
          src={`http://openweathermap.org/img/w/04d.png`}
          width="80"
          height="80"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-between">
        <p className="pr-">Tomorrow</p>
        <p>max &deg;/ min &deg;</p>
      </div>
    </li>
  );
};

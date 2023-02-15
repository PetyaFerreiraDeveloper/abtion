import Image from "next/image";
import React from "react";

export const Header = ({ data }) => {
  const icon = data.weather[0].icon;
  const temp = Math.round(data.main.temp);

  return (
    <header className="py-10 px-8 bg-ligthYellow dark:bg-gray-400 flex flex-col ">
      <h2 className="text-center text-[20px] dark:text-white">{data.name} </h2>
      <div className="flex justify-between items-center">
        <Image
          src={`http://openweathermap.org/img/w/${icon}.png`}
          width="80"
          height="80"
          alt=""
        />
        <div className="dark:text-white">
          <span className="text-[45px]">{temp}</span>
          <span className="text-[45px]">&deg;</span>
        </div>
      </div>
    </header>
  );
};

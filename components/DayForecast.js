import React from "react";
import Image from "next/image";

export const DayForecast = ({ day, index }) => {
  const icon = day.weather[0].icon;
  const max = Math.round(day.main.temp_max);
  const min = Math.round(day.main.temp_min);
  const date = new Date(day.dt_txt);
  const options = { weekday: "long" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);
  
  return index == 0 ? (
    <li className="flex items-center pl-8 pr-10 py-8 bg-lightYellow dark:bg-gray-400">
      <div className="pr-5">
        <Image
          src={`http://openweathermap.org/img/w/${icon}.png`}
          width="80"
          height="80"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-between">
        <p className="pr-">Tomorrow</p>
        <p>
          <span>{max} &deg; </span>
          <span>/</span>
          <span> {min} &deg;</span>
        </p>
      </div>
    </li>
  ) : index % 2 == 0 ? (
    <li className="flex items-center pl-8 pr-10 py-8 bg-lightYellow dark:bg-gray-400">
      <div className="pr-5">
        <Image
          src={`http://openweathermap.org/img/w/${icon}.png`}
          width="80"
          height="80"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-between">
        <p className="pr-">{dayOfWeek}</p>
        <p>
          <span>{max} &deg; </span>
          <span>/</span>
          <span> {min} &deg;</span>
        </p>
      </div>
    </li>
  ) : (
    <li className="flex items-center pl-8 pr-10 py-8 bg-darkYellow dark:bg-gray-700">
      <div className="pr-5">
        <Image
          src={`http://openweathermap.org/img/w/${icon}.png`}
          width="80"
          height="80"
          alt=""
        />
      </div>
      <div className="flex flex-1 justify-between">
        <p className="pr-">{dayOfWeek}</p>
        <p>
          <span>{max} &deg; </span>
          <span>/</span>
          <span> {min} &deg;</span>
        </p>
      </div>
    </li>
  );
};

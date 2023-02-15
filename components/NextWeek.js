import React from "react";
import { DayForecast } from "./DayForecast";

export const NextWeek = ({ forecast }) => {

  return (
    <div className="dark:text-white mt-8">
      <h2 className="text-[50px] font-extrabold px-10 bg-gray-200">This might be it</h2>
      <ul>
        {forecast.list
          .filter(hr => hr.dt_txt[12] === '2')
          .map((day, index) => (
          <DayForecast key={day.dt} day={day} index={index} />
        ))}
      </ul>
    </div>
  );
};

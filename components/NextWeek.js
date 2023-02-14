import React from "react";
import { DayForecast } from "./DayForecast";

export const NextWeek = ({ forecast }) => {

  return (
    <div className="dark:text-white">
      <h2 className="text-[50px] font-extrabold px-10">This might be it</h2>
      <ul>
        {forecast.list.map((day) => (
          <DayForecast day={day} />
        ))}
      </ul>
    </div>
  );
};

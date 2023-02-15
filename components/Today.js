import React from 'react';
import { weatherTable } from '@/utils/weatherTable';

export const Today = ({data}) => {
    const temp = Math.round(data.main.temp);

  return (
    <p className="text-[50px] font-extrabold dark:text-white px-10 mt-10">
        {weatherTable(temp)}
    </p>
  )
}

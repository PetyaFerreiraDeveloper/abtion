import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function getForecast() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");

  useEffect(() => {
    if (navigator.geolocation !== undefined) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    }
  }, []);

  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;

  const { data, error } = useSWR(forecastUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  // console.log("data", data);
  return data;
}

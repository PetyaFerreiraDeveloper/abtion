import { useEffect, useState } from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function getWeather() {
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

  const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

  const { data, error } = useSWR(baseUrl, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  // console.log("data", data);
  return data;
}

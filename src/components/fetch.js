import React, { useState, useEffect } from "react";
import { DisplayMovies } from "./displayMovies";

export default function Fetch() {
  const [data, setData] = useState([]);
  const fetchMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=23a8ac63bcc28651d7d901c0094d5b99&language=en-US');
    const res = await data.json();
    setData(res.genres)
  }
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <select name="" id="">
        <option value="">Select a genre</option>
        {data.map((m) => {
          const { id, name } = m;
          return <>
            <option value={id}>{name}</option>
        </>
      })}
      </select>
      <DisplayMovies genre={data}/>
    </>
  );
}


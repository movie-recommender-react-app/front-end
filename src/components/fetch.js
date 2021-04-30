import React, { useState, useEffect } from "react";

export default function Fetch() {
  const [movieData, setData] = useState();
  const fetchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=23a8ac63bcc28651d7d901c0094d5b99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate"
    );
    const res = await data.json();
    setData(res.results[0].original_title);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <>
      <h1>{movieData}</h1>
    </>
  );
}

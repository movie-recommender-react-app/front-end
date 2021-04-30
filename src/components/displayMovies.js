import React, { useState, useEffect } from 'react'

export const DisplayMovies = ({data}) => {
    const [mov, setMov] = useState([]);
    const fecthMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=23a8ac63bcc28651d7d901c0094d5b99&language=en-US&page=1')
        const res = await data.json();
        setMov(res.results)
        console.log(res.results)
    }
    useEffect(() => {
        fecthMovies()
    }, [])
    return (
        <div>
            {mov.map((m) => {
                const { title } = m;
                return <h1>{title}</h1>

            })}
        </div>
    )
}

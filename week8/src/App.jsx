import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


const App = () => {
  const [movies,setmovies]=useState([]);
  useEffect(
    ()=>{
      axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=2993d064f9608273325bbc41faec9f86"
      )
      .then(response=>response.data.results)
      .then(data=>setmovies(data))
    },
    []
  )
  return (
    <>
    {
      movies.map(movie=><div key={movie.original_title}>
        <h1>
          {movie.original_title}
        </h1>
        <img width={300} height={400} src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt="images" />
        <p>{movie.release_date}</p>
      </div>)
    }
    </>
  )
}

export default App
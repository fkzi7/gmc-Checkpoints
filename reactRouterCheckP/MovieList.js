import React from "react";
import { Link } from "react-router-dom";
import movies from "./movies";

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

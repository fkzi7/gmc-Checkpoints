import React, { useState } from "react";
import MovieList from "./Components/MovieList"; // Correct import
import Filter from "./Components/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception", 
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://via.placeholder.com/150",
      rating: 8.8,
    },
  ]);

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
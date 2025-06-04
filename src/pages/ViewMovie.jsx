import { useEffect, useState } from "react";
import axios from "axios";

export default function ViewMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie List</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="bg-white/10 p-4 rounded-xl shadow-lg border border-white/20"
          >
            <h2 className="text-xl font-semibold text-purple-300">
              {movie.movieName}
            </h2>
            <p>Duration: {movie.duration}</p>
            <p>Language: {movie.language}</p>
            <p>Available Seats: {movie.availableSeats}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

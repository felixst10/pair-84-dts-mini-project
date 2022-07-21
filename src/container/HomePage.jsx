import React, { useEffect, useState } from "react";
import tmdbInstancePopular from "../apis/tmdbPopular";
import CardMovie from "../components/CardMovie";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const response = await tmdbInstancePopular.get("/movie/popular");

        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataMovies();
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>Popular</div>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} propsMovies={movie} />;
      })}
      <div>
        <Link to={"/login"}>Login</Link>
      </div>
    </>
  );
};

export default HomePage;

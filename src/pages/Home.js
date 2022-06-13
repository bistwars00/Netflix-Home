import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader color="#ff0000" loading={loading} size={150} />
      </div>
    );
  }
  return (
    <div className="bodyC">
      {popularMovies.results && <Banner movie={popularMovies.results[0]} />}

      <div>
        <h5>Popular Movie</h5>
        <MovieSlide movies={popularMovies} />
      </div>
      <div>
        <h5>Top Rated Movie</h5>
        <MovieSlide movies={topRatedMovies} />
      </div>
      <div>
        <h5>Upcoming Movie</h5>
        <MovieSlide movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default Home;

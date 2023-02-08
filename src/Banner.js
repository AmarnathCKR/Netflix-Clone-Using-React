import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button play_button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon"
              viewBox="0 0 384 512"
            >
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
            </svg>{" "}
            Play
          </button>
          <button className="banner__button info_icon">
            <img
              className="button__icon"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7ccMs3tw2-f0WaT-EcCrvELVv2Ekozlv0PyERXZhyxmqOMM2p_CTcaQ0Zk1KbZ6JD027MJmZpPmoMoksNY1rMhHXacyXWPHIPWjSp3pEEDyVj8x6ELghrdCSQq83JE3C0NIJpA2sq8tTLKtMy4sN0V-A60kyvZ38h6b-UjkO8122rZr5Tesp2QdkYXA/s1600/info.png"
              alt=""
            />{" "}
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;

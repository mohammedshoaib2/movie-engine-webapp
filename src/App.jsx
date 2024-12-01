import { useEffect, useState } from "react";
import "./App.css";
import search from "./assets/search.svg";
import Card from "./components/Card";
import getMovieData from "./services/getMovieData";

function App() {
  let [input, setInput] = useState("Batman");
  let [movieData, setMovieData] = useState([]);
  let [noData, setNoData] = useState("");

  useEffect(() => {
    getMovieData(input, setMovieData);
  }, []);

  return (
    <>
      <div className="main">
        <h1 className="head-title">MovieEngine</h1>
        <div className="input-field-container">
          <input
            className="input-field"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(String(e.target.value));
            }}
            placeholder="Search movie"
          />
          <img
            onClick={() => {
              if (input) {
                getMovieData(input, setMovieData);
                setNoData(`No matches for "${input}"`);
              }
            }}
            src={search}
            alt="search"
          />
        </div>

        <div className="card-container">
          {movieData?.length > 0 ? (
            movieData.map((movie) => {
              return (
                <Card
                  key={movie["imdbID"]}
                  movieCategory={movie["Type"]}
                  movieTitle={movie["Title"]}
                  movieImage={movie["Poster"]}
                  movieYear={movie["Year"]}
                />
              );
            })
          ) : (
            <h1 className="no-result">{noData}</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

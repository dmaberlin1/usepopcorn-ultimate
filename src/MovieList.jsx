import React, {useState} from 'react';
import {tempMovieData} from "./temp_data";
import Movie from "./components/Movie";

const MovieList = () => {
    const [movies, setMovies] = useState(tempMovieData);

    return (
        <ul className="list">
            {movies?.map((movie) => (
                     <Movie key={movie.imdbID} movie={movie}></Movie>
            ))}
        </ul>

    );
};

export default MovieList;

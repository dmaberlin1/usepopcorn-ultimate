import React, {useState} from 'react';
import {tempMovieData} from "../temp_data";
import Movie from "./Movie";

const MovieList = ({movies}) => {

    return (
        <ul className="list">
            {movies?.map((movie) => (
                     <Movie key={movie.imdbID} movie={movie}></Movie>
            ))}
        </ul>

    );
};

export default MovieList;

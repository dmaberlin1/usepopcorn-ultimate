
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React, {useState} from "react";
import {tempMovieData, tempWatchedData} from "./temp_data";
import Search from "./components/Search";
import Logo from "./components/Logo";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedListMovies from "./components/WatchedListMovies";
import StarRating from "./components/StarRating";



function App() {
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);
    const [movieRating, setMovieRating] = useState(0);


    return (
        <>
            <NavBar movies={movies}>
                <Logo/>
                <Search/>
                <NumResults movies={movies}/>
            </NavBar>

            <Main>
            <Box>
                <MovieList movies={movies}/>
            </Box>


                <Box>
                    <WatchedSummary watched={watched}/>
                    <WatchedListMovies watched={watched}/>
                </Box>
                <>
                <StarRating messages={['Terrible','Bad','Okay','Good','Amazing']} defaultRating={2}
                setMovieRating={setMovieRating}
                />
                    <p>This Movie was rated {movieRating} stars</p>
                </>
            </Main>
        </>
    );
}

export default App;

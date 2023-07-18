
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import React, {useEffect, useState} from "react";
import {tempMovieData, tempWatchedData} from "./temp_data";
import Search from "./components/Search";
import Logo from "./components/Logo";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedListMovies from "./components/WatchedListMovies";
import {BASED_URL} from "./const";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

// http://www.omdbapi.com/?apikey=[yourkey]&

function App() {
    const [movies, setMovies] = useState([]);
    const [watched, setWatched] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const query='interstellar';



    useEffect(() => {
        async function fetchMovies(){
            try {
                setIsLoading(true)
                const res=await fetch(`${BASED_URL}s=${query}`)

                if(!res.ok) throw new Error('Something went wrong with fetching movies')

                const data=await res.json();
                if(data.Response==='False') throw new Error('Movie not found')

                setMovies(data.Search);
            }
            catch (err) {
                console.log(err.message);
                setError(err.message)
            }
            finally {
                setIsLoading(false)
            }
        }

        fetchMovies()
        return () => {
            console.log('component unmount');
        };
    }, []);



    return (
        <>
            <NavBar movies={movies}>
                <Logo/>
                <Search/>
                <NumResults movies={movies}/>
            </NavBar>

            <Main>
            <Box>

                {/*{isLoading? <Loader/> : <MovieList movies={movies}/>}*/}
                {isLoading && !error && <MovieList/>}
                {isLoading && <Loader/>}
                {error && <ErrorMessage/>}

            </Box>


                <Box>
                    <WatchedSummary watched={watched}/>
                    <WatchedListMovies watched={watched}/>
                </Box>

            </Main>
        </>
    );
}

export default App;

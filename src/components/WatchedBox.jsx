import React, {useState} from 'react';
import {tempWatchedData} from "../temp_data";
import WatchedSummary from "./WatchedSummary";
import WatchedListMovies from "./WatchedListMovies";

const WatchedBox = () => {
    const [watched, setWatched] = useState(tempWatchedData);
    const [isOpen2, setIsOpen2] = useState(true);



    return (

        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                     <WatchedSummary watched={watched}/>
                    <WatchedListMovies watched={watched}/>
                </>
            )}
        </div>

    );
};

export default WatchedBox;

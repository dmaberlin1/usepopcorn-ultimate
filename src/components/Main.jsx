import React from 'react';


const Main = ({children}) => {
    return (
        <main className="main">
            {/*<ListBox movies={movies}/>*/}
            {/*<WatchedBox/>*/}
            {children}
        </main>

    );
};

export default Main;

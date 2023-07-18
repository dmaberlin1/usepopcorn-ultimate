import React from 'react';


const NavBar = ({children}) => {
    return (
        // <nav className="nav-bar">
        //     <Logo/>
        //    <Search/>
        //     <NumResults movies={movies}></NumResults>
        // </nav>
        <nav>
            {children}
        </nav>

    );
};

export default NavBar;

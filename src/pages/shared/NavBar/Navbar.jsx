import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <Link>News</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>

            <button className='btn btn-warning text-lg font-bold'>Login</button>
        </>
    );
};

export default Navbar;
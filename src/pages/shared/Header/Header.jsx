import React from 'react';
import logo from "../../../../public/images/logo.png";
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/Navbar';

const Header = () => {
    return (
        <div className='w-full'>
            <div className="navbar">
                <div className="flex-1 gap-4">
                    <Link className="w-28">
                        <img className='bg-white p-2 rounded' src={logo} alt="" />
                    </Link>

                    <div className="form-control">
                        <input type="text" placeholder="🔍 Search your Destination..." className="input input-bordered text-yellow-600" />
                    </div>
                </div>

                <div className="flex-none gap-16 text-white">
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const signOutHandler = () => {
        signOutUser()
            .then(() => {
                alert("Sign out successful");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <>
            <Link to={"/"}>Home</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>

            {
                user
                    ?
                    <>
                        <p>{user.email}</p>
                        <button onClick={signOutHandler} className='btn btn-warning text-lg font-bold'>Logout</button>
                    </>
                    :
                    <Link to={"/authentication"}><button className='btn btn-warning text-lg font-bold'>Login</button></Link>
            }
        </>
    );
};

export default Navbar;
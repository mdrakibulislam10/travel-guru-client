import React from 'react';
import bgImg from "../../public/images/Rectangle 1.png";
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <div className="card p-0 w-full bg-base-100 shadow-xl image-full">
                <figure><img src={bgImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title w-full">
                        <Header />
                    </h2>

                    <div className='flex justify-center items-center card-body'>

                        <Outlet />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
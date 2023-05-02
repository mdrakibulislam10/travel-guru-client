import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from "../../shared/Header/Header";
import HotelsRent from '../HotelsRent/HotelsRent';
import staticMapImg from "../../../../public/images/image 1.png"

const Hotels = () => {
    const allHotels = useLoaderData();
    // console.log(allHotels);

    return (
        <section>
            <Header />

            <div className='my-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-2'>
                    <div>
                        {
                            allHotels.map(hotels =>
                                <HotelsRent
                                    hotels={hotels}
                                    key={hotels.id}
                                />
                            )
                        }
                    </div>

                    <div>
                        {/* do functionality */}
                        <img src={staticMapImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hotels;
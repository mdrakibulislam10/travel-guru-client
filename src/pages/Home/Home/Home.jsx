import React, { useEffect, useState } from 'react';
import PlaceInfo from '../placeInfo/placeInfo';
import { useLoaderData } from 'react-router-dom';
import PlaceCard from '../PlaceCard/PlaceCard';

const Home = () => {
    const places = useLoaderData();

    const [place, setPlace] = useState("");

    const handlePlaceInfo = id => { // we can use find();
        // useEffect(() => { // do not use useEffect inside handler func;
        fetch(`https://travel-guru-server-eight-zeta.vercel.app/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
            .catch(err => console.log(err))
        // }, []);
    };

    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <div className=''>
                <PlaceInfo
                    place={place}
                />
            </div>

            <div className='col-span-2'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                    {
                        places.map(place => <PlaceCard
                            key={place.id}
                            place={place}
                            handlePlaceInfo={handlePlaceInfo}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;
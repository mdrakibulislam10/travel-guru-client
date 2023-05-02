import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const PlaceInfo = ({ place }) => {
    const { placeName, description } = place;
    // console.log(place);
    const navigate = useNavigate();

    return (
        <div>
            {
                !place
                    ?
                    <h2 className='text-2xl font-bold'>Click place photo to see information</h2>
                    :
                    <>
                        <h2 className='text-6xl'>{placeName}</h2>
                        <p className='my-4'>{description}</p>
                        <button onClick={() => navigate("/")}>Booking ➡️</button>
                    </>
            }
        </div>
    );
};

export default PlaceInfo;
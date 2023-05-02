import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const PlaceInfo = ({ place }) => {
    const { placeName, description, id } = place;
    // console.log(place);
    const navigate = useNavigate();

    return (
        <div>
            {
                !place
                    ?
                    <h2 className='text-2xl font-bold'>Click place photo to see information</h2>
                    :
                    <div className='text-white text-start'>
                        <h2 className='text-6xl font-semibold'>{placeName}</h2>
                        <p className='my-4'>{description}</p>
                        <button className='btn btn-warning text-lg font-bold' onClick={() => navigate(`/places/details/${id}`)}>Booking ➡️</button>
                    </div>
            }
        </div>
    );
};

export default PlaceInfo;
import React from 'react';

const PlaceCard = ({ place, handlePlaceInfo }) => {
    const { image, placeName, id } = place;

    return (
        // <section>
        <div onClick={() => handlePlaceInfo(id)} className="w-full bg-base-100 shadow-xl rounded-3xl relative cursor-pointer">
            <figure><img src={image} className='p-0 h-96' alt="Shoes" /></figure>
            <h2 className='absolute bottom-4 text-3xl left-4 font-bold'>
                {placeName}
            </h2>
        </div>
        // </section>
    );
};

export default PlaceCard;
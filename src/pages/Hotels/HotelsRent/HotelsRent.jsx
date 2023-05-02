import React from 'react';

const HotelsRent = ({ hotels }) => {
    const { id, hotelName, description, image, rating, pricePerNight, totalPrice, location, guests, bedrooms, beds, baths } = hotels;
    // console.log(hotels);

    return (
        <div className='flex gap-4 my-4 items-center'>
            <img className='w-72 rounded' src={image} alt="" />
            <div className='text-start'>
                <h3 className='text-2xl font-semibold'>{hotelName}</h3>
                <p className='my-2 text-slate-600'>
                    <span>{guests} guests,</span>
                    <span> {bedrooms} bedrooms,</span>
                    <span> {beds} beds,</span>
                    <span> {baths} baths</span>
                </p>
                <p>{description}</p>
                <p className='mt-2 text-slate-600'>
                    <span>⭐{rating},</span>
                    <span> ${pricePerNight}/Night,</span>
                    <span> ${totalPrice} total,</span>
                </p>
            </div>
        </div>
    );
};

export default HotelsRent;
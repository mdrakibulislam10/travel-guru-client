import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const PlaceDetails = () => {
    const place = useLoaderData();
    const { description, placeName } = place;

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='text-white text-start'>
                <h2 className='text-6xl font-semibold'>{placeName}</h2>
                <p className='my-4'>{description}</p>
            </div>

            <div>
                <div className="">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card p-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Origin</span>
                                    </label>
                                    <input type="text" placeholder="City" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Destination</span>
                                    </label>
                                    <input type="text" placeholder="place" className="input input-bordered" />
                                </div>
                                <div className='mt-5'>
                                    <input className='bg-orange-400 rounded p-1 mr-3' type="date" name="" id="" />
                                    <input className='bg-orange-400 rounded p-1' type="date" name="" id="" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-warning">Start Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlaceDetails;

// import { addDays } from 'date-fns';
// import { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';

// const [state, setState] = useState([
//     {
//         startDate: new Date(),
//         endDate: addDays(new Date(), 7),
//         key: 'selection'
//     }
// ]);

{/* <DateRangePicker
onChange={item => setState([item.selection])}
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    months={2}
    ranges={state}
    direction="horizontal"
/>; */}
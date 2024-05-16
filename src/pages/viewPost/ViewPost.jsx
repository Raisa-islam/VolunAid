
import { Link, useLoaderData } from 'react-router-dom';
import addvoli from '../../assets/download-removebg-preview.png'
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';



const ViewPost = () => {

    const [btnable, setBtnable] = useState(0)
    const x = 0;
    const [ale, setAle] = useState(0)
    const handleClick = () => {
        setAle(1);
        console.log('clicked')
    }
    const item = useLoaderData();
    const {_id, thumbnail, title, category, description, name, email, location, noOfVol, selectedDate}= item;
    const date = selectedDate.slice(0,10)
   
    useEffect(() => {
        if (parseInt(noOfVol) === 0) {
            setBtnable(1);
        }
    }, [x]);
    console.log("btn ability", btnable, noOfVol)
    console.log(item)
    return (
        <div className='container mx-auto max-w-[80%] lg:max-w-[60%] mt-12'>

            <Helmet>
                <title>VolunAid | Post</title>
            </Helmet>
            <div className='flex flex-col justify-center items-center'>
                <img src={addvoli} alt="" />
                <div className='bg-[#82c1f9] w-full flex flex-col rounded-t-xl px-4 md:px-8 lg:px-24'>
                    <div className='font-bold text-2xl mt-6 text-center mb-6'>
                        Volunteer Opportunities
                        <p className='text-lg font-medium'>Join Us, Explore Volunteer Roles</p>
                    </div>
                    <form className='mb-12'>
                        <div className='w-full flex justify-center items-center'>
                        <img src={thumbnail} alt="" />
                        </div>

                      

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Opportunities Title:</span>

                            </div>
                            <p className='text-xl font-medium'>{title}</p>
                        </div>

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Category:</span>

                            </div>
                            <p className='text-xl font-medium px-2 rounded-xl bg-[#b9c1eb]'># {category}</p>
                        </div>
                        

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Organizer Name:</span>

                            </div>
                            <p className='text-xl font-medium'>{name}</p>
                        </div>

                        <div className="form-control w-full flex flex-col md:flex-row gap-2 justify-start items-start">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Description:</span>

                            </div>
                            <p className='text-xl font-medium p-4'>{description}</p>
                        </div>
                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Location:</span>

                            </div>
                            <p className='text-xl font-medium'>{location}</p>
                        </div>

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Volunteer Needed:</span>

                            </div>
                            <p className='text-xl font-medium'>{noOfVol}</p>
                        </div>

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Deadline:</span>

                            </div>
                            <p className='text-xl font-medium'>{date}</p>
                        </div>

                        <div className="form-control w-full flex flex-row gap-4 justify-start items-center">
                            <div className="label w-fit">
                                <span className="label-text font-semibold text-xl">Organizer Email:</span>

                            </div>
                            <p className='text-xl font-medium'>{email}</p>
                        </div>


                        <div className='flex flex-col justify-center items-center'>

                            <Link to={btnable ? "#" : `/applyPost/${_id}`}>
                                <button
                                    className="md:flex bg-gradient-to-r from-[#495597] to-[#7794ed] text-white px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold mt-6"

                                    onClick={btnable ? handleClick : null}
                                >
                                    Be a volunteer
                                </button>
                            </Link>





                            {btnable === 1 && ale === 1 && <p className='text-red-500 text-lg'>You can't apply, as there is no vacancy!</p>}
                            {/* {btnable === 1 && <Toast className='text-red-500 text-lg'>You can't apply, as there is no vacancy!</Toast>} */}
                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default ViewPost;
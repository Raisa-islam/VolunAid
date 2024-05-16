import PropTypes from 'prop-types';
import { IoIosArrowDropright } from "react-icons/io";
import 'animate.css';
import { Link } from 'react-router-dom';

const SliderCard = ({ item }) => {

    const { _id,title, thumbnail, category, location, selectedDate
    } = item;
    const date = selectedDate.slice(0,10)
    return (
        <>
            <div className="relative w-full h-60 md:h-96">
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#000066] to-[#574457] flex flex-col justify-center">
                    <div className='text-white p-10 lg:p-14 lg:ml-8'>
                        <div className='flex flex-col gap-2 animate__animated animate__backInLeft'>
                            <p className='text-2xl md:text-4xl font-semibold'>{title}</p>
                            <p className='text-xl md:text-2xl font-semibold'>Category: {category}</p>
                            <p className='text-xl md:text-2xl font-semibold'>Apply Deadline: {date}</p>
                        </div>
                        <div className='mt-6'> <p className='text-xl md:text-3xl font-bold animate__animated animate__fadeInLeft animate__delay-1s'>Location: {location}</p></div>

                        <div className='animate__animated animate__fadeInLeft  animate__delay-2s'>
                            <Link to={`/view-post-details/${_id}`}>
                                <button className="mt-6 bg-blue-400 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-r hover:from-[#495597] hover:to-[#7794ed] transition duration-300 font-bold animate__animated animate__swing animate__delay-5s">
                                    <div className='flex flex-row gap-2 justify-center items-center '>
                                        <IoIosArrowDropright />
                                        <p>View Details</p>
                                    </div>
                                </button>
                            </Link>
                        </div>

                    </div>
                </div> 
            </div>


        </>
    );
};

SliderCard.propTypes = {
    estate: PropTypes.object.isRequired,
};

export default SliderCard;
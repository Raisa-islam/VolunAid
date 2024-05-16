
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SliderCard from "../../components/slider/SliderCard";
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import NeedsNowHomeCard from '../../components/needVolunteerCard/NeedsNowHomeCard';
import InspirationalQuotes from '../../components/slider/InspirationalQuotes';

const Home = () => {
    const item = useLoaderData()
    console.log(item)
    const random = item.slice(0, 5)
    const volNeedSection = item.slice(0, 6)

    const category = ['Healthcare', 'Education', 'Social Service',
        'Animal Welfare']

    volNeedSection.sort((a, b) => new Date(a.selectedDate.slice(0, 10)) - new Date(b.selectedDate.slice(0, 10)));
    return (
        <div className="">
            <Helmet>
                <title>VolunAdd | Home</title>
            </Helmet>
            <div className='flex flex-row justify-center items-center w-full'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {random.map((item) => <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <div>
                                {isActive ? (
                                    <div><SliderCard key={item.id} item={item}></SliderCard></div>
                                ) : (
                                    <div>Not active</div>
                                )}

                            </div>
                        )}
                    </SwiperSlide>)}

                </Swiper>

            </div>



            <div className='container mx-auto max-w-[80%] mt-12'>

                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Volunteer Opportunities Now</h1>
                    <p className='text-lg font-medium'>Explore the Opportunities to Serve and Support Our Communit</p>

                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                {volNeedSection.length===0 && <h1 className='text-2xl' > No Posts To Show!!</h1>}
                    {volNeedSection.map((item) => <NeedsNowHomeCard key={item._id} item={item}></NeedsNowHomeCard>)}
                </div>

            
            <div className='flex justify-center items-center mt-6'>
                <Link to='/needVolunteer'>
                    <button className="border border-[#495597] bg-white hover:text-white  text-black px-6 py-2 rounded-2xl hover:bg-[#3d4575] transition duration-300 font-bold ">See All</button>
                </Link>
            </div>

            <div className='mt-12 flex flex-col justify-center items-center mb-12'>
            <h1 className='text-2xl font-bold'>Opportunities Categories</h1>
                <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 w-full gap-4'>
                    <div className='h-16 p-12  bg-[#152823] lg:col-span-3 flex justify-center items-center rounded-xl'>
                    <Link to={`/post/${category[0]}`}> <h1 className='font-bold text-3xl text-white'>{category[0]}</h1>
                    </Link>
                    </div>
                    <div className='h-16 p-12 bg-[#C5BFBE] lg:col-span-4 flex justify-center items-center rounded-xl'>
                    <Link to={`/post/${category[2]}`}> <h1 className='font-bold text-3xl'>{category[2]}</h1></Link>

                    </div>

                   

                    <div className='h-16 p-12 bg-[#85FFF7] lg:col-span-4 flex justify-center items-center rounded-xl'>
                    <Link to={`/post/${category[3]}`}> <h1 className='font-bold text-3xl'>{category[3]}</h1></Link>

                    </div>
                    <div className='h-16 p-12 bg-[#3A2C2E] flex lg:col-span-3 justify-center items-center rounded-xl'>
                    <Link to={`/post/${category[1]}`}> <h1 className='font-bold text-3xl text-white'>{category[1]}</h1></Link>

                    </div>
                  


                </div>

            </div>

            <div className='mb-12'>
                <InspirationalQuotes/>
            </div>
            </div>
        </div>
    );
};

export default Home;
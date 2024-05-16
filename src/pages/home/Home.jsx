
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SliderCard from "../../components/slider/SliderCard";
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const item = useLoaderData()
    console.log(item)
    const random = item.slice(0, 5)
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

            <div>
                
            </div>


        </div>
    );
};

export default Home;
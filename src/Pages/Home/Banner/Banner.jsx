import img1 from '../../../assets/Home/Banner/slide-01.jpg'
import img2 from '../../../assets/Home/Banner/slide-02.jpg'
import img3 from '../../../assets/Home/Banner/slide-03.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import CtaButton from '../../../Components/CtaButton/CtaButton';

const Banner = () => {

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{ delay: 3000 }}
                speed={1000}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        {/* banner image */}
                        <img className='w-full bg-cover bg-no-repeat h-screen' src={img1} alt="" />

                        {/* overlay style top of the image */}
                        <div className='absolute bg-black bg-opacity-70 top-0 left-0 w-full h-full overlay'>
                            <div className='container mx-auto'>

                                {/* banner text strat here */}
                                <div className='flex justify-center items-center h-screen'>

                                    <div className='text-center'>
                                        <p className='text-sm text-hoverNavMenu font-bold tracking-[3px]'>STRATEGIC . INNOVATE . EXCELLENCE</p>
                                        <h1 className='md:text-8xl text-6xl  font-extrabold text-white my-3'>CREATIVE <br /> DESIGN</h1>
                                        <CtaButton buttonText='get started'></CtaButton>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        {/* banner image */}
                        <img className='w-full bg-cover bg-no-repeat h-screen' src={img2} alt="" />

                        {/* overlay style top of the image */}
                        <div className='absolute bg-black bg-opacity-70 top-0 left-0 w-full h-full overlay'>
                            <div className='container mx-auto'>

                                {/* banner text strat here */}
                                <div className='flex justify-center items-center h-screen'>

                                    <div className='text-center'>
                                        <p className='text-sm text-hoverNavMenu font-bold tracking-[3px]'>STRATEGIC . INNOVATE . EXCELLENCE</p>
                                        <h1 className='md:text-8xl text-6xl font-extrabold text-white my-3'>CREATIVE <br /> THINKER</h1>
                                        <CtaButton buttonText='get started'></CtaButton>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        {/* banner image */}
                        <img className='w-full bg-cover bg-no-repeat h-screen' src={img3} alt="" />

                        {/* overlay style top of the image */}
                        <div className='absolute bg-black bg-opacity-70 top-0 left-0 w-full h-full overlay'>
                            <div className='container mx-auto'>

                                {/* banner text strat here */}
                                <div className='flex justify-center items-center h-screen'>
                                    <div className='text-center'>
                                        <p className='text-sm text-hoverNavMenu font-bold tracking-[3px]'>STRATEGIC . INNOVATE . EXCELLENCE</p>
                                        <h1 className='md:text-8xl text-6xl font-extrabold text-white my-3'>EMPOWER  <br /> ELEVATE</h1>
                                        <CtaButton buttonText='get started'></CtaButton>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
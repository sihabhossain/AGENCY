import img2 from '../../../assets/Home/whoWeAre/about-05.jpg'
import img1 from '../../../assets/Home/whoWeAre/about-04.jpg'
import Title from '../../../Components/Title/Title';
import { HiCheck } from "react-icons/hi2";
const WhoWeAre = () => {
    return (
        <div className='w-10/12 mx-auto my-20'>
            <div className='md:flex gap-20 space-y-14 md:space-y-0'>
                <div className='grid grid-cols-2 gap-6 md:w-[45%] w-full'>
                    <div className='imageHover relative'>
                        <figure>
                            <img className='rounded' src={img2} alt="" />
                        </figure>
                        <div className='flex bg-buttonBg p-2 rounded text-white absolute bottom-4 left-24 z-10'> 
                            <h2 className='text-5xl font-extrabold'>2+</h2>
                            <p className='text-xl font-bold ml-2'>years of <br /> Experience</p>
                        </div>
                    </div>
                    <div className='imageHover'>
                        <figure>
                            <img className='rounded mt-14' src={img1} alt="" />
                        </figure>
                    </div>
                </div>
                <div className='md:w-[55%] w-full'>
                    <Title subheading='WHO WE ARE' heading='We offer the best design and development services!'></Title>
                    <p className='text-navMenu font-semibold text-opacity-80 text-[14px] my-10'>Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships.</p>
                    <p className='flex items-center font-semibold mb-3 text-[14px]'><HiCheck className='text-buttonBg text-lg mr-3' /> Provide Web Design & Development</p>
                    <p className='flex items-center font-semibold mb-3 text-[14px]'><HiCheck className='text-buttonBg text-lg mr-3' /> We Provide Logo Design & Copywriting</p>
                    <p className='flex items-center font-semibold mb-3 text-[14px]'><HiCheck className='text-buttonBg text-lg mr-3' />  Best Website Support & Consultations</p>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;
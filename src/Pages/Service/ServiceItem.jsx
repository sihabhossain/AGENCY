import img1 from '../../assets/Home/service/service-01.jpg'
import img2 from '../../assets/Home/service/service-02.jpg'
import img3 from '../../assets/Home/service/service-03.jpg'
import icon1 from '../../assets/Home/service/13.png'
import icon2 from '../../assets/Home/service/14.png'
import icon3 from '../../assets/Home/service/15.png'
import './ServiceItem.css'
import { Link } from 'react-router-dom'
const ServiceItem = () => {
    return (
        <div className='md:grid grid-cols-3 gap-6 md:space-y-0 space-y-16'>
            {/* serviceItem 01 */}
            <div className='relative serviceItem'>
                <img className='rounded bg-cover' src={img1} alt="" />

                <div className='absolute bg-black infoTitle bg-opacity-60 w-full h-full top-0 left-0 rounded'>
                    <h4 className='text-4xl pt-16 pl-12 font-bold text-white'>web <br /> designing</h4>

                    <div className='infoText'>
                        <p className='text-navMenu pl-12 pt-5 pr-14 pb-4 text-[14px] font-semibold'>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                        <Link to='/serviceDetails' className='uppercase text-navMenu text-[14px] pl-12 font-semibold'>read more</Link>
                    </div>

                </div>

                <div className='absolute w-16 h-16 circle bg-buttonBg flex justify-center items-center rounded-full -top-8 left-8'>
                    <img className='w-8 h-8' src={icon1} alt="" />
                </div>
            </div>
            {/* serviceItem 02 */}
            <div className='relative serviceItem'>
                <img className='rounded bg-cover' src={img2} alt="" />

                <div className='absolute bg-black infoTitle bg-opacity-60 w-full h-full top-0 left-0 rounded'>
                    <h4 className='text-4xl pt-16 pl-12 font-bold text-white'>web <br /> Development</h4>

                    <div className='infoText'>
                        <p className='text-navMenu pl-12 pt-5 pr-14 pb-4 text-[14px] font-semibold'>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                        <Link to='/serviceDetails' className='uppercase text-navMenu text-[14px] pl-12 font-semibold'>read more</Link>
                    </div>

                </div>

                <div className='absolute w-16 h-16 circle bg-buttonBg flex justify-center items-center rounded-full -top-8 left-8'>
                    <img className='w-8 h-8' src={icon2} alt="" />
                </div>
            </div>
            {/* serviceItem 03 */}
            <div className='relative serviceItem '>
                <img className='rounded bg-cover ' src={img3} alt="" />

                <div className='absolute bg-black infoTitle bg-opacity-60 w-full h-full top-0 left-0 rounded'>
                    <h4 className='text-4xl pt-16 pl-12 font-bold text-white'>web <br /> Application</h4>

                    <div className='infoText'>
                        <p className='text-navMenu pl-12 pt-5 pr-14 pb-4 text-[14px] font-semibold'>We offers plan and assemble managing for you from startups to the last creation or closing creation.</p>
                        <Link to='/serviceDetails' className='uppercase text-navMenu text-[14px] pl-12 font-semibold'>read more</Link>
                    </div>

                </div>

                <div className='absolute w-16 h-16 circle bg-buttonBg flex justify-center items-center rounded-full -top-8 left-8'>
                    <img className='w-8 h-8' src={icon3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ServiceItem;
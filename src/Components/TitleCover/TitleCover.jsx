import { Link } from 'react-router-dom';
import img1 from '../../assets/Service/page-title.jpg'
const TitleCover = ({ serviceText, pageTitle }) => {
    return (
        <div>

            <div className='relative'>
                {/* title image */}
                <img className='w-full bg-cover bg-no-repeat md:h-min h-[50vh]' src={img1} alt="" />

                {/* overlay style top of the image */}
                <div className='absolute bg-black bg-opacity-70 top-0 left-0 w-full h-full overlay'>
                    <div className='w-10/12 mx-auto'>

                        {/* title text start here */}
                        <div className='flex  items-center md:mt-[18%] mt-[25%]'>

                            <div >
                                <h4 className='text-[55px] font-extrabold text-white capitalize'>{serviceText}</h4>
                                <div className='flex items-center'>
                                    <Link className='text-white font-bold text-[14px]'  to='/'>Home</Link>
                                    <div className='w-4 h-[2px] ml-3 bg-buttonBg'></div>
                                    <p className='text-[14px] font-bold ml-4 text-gray-400 capitalize'>{pageTitle}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleCover;
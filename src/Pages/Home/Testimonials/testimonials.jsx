import Title from "../../../Components/Title/Title";
import avatar1 from '../../../assets/Home/Testimonial/avatar-05.jpg'
import avatar2 from '../../../assets/Home/Testimonial/avatar-06.jpg'
import avatar3 from '../../../assets/Home/Testimonial/avatar-07.jpg'
import './Testimonials.css'
import { FaQuoteLeft } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className="py-20 bg-gray-100">
            <div className="w-10/12 mx-auto">
                <div className="text-center">
                    <Title subheading='OUR TESTIMONIALS' heading='What They’re Saying?'></Title>
                </div>
                <div className="mt-20"> 
                    <div className="md:grid grid-cols-3 gap-8 space-y-8 md:space-y-0">
                        {/* testimonial 01 */}
                        <div >
                            <div className="flex ">
                                <div>
                                    <img className="rounded" src={avatar1} alt="" />
                                </div>
                                <div className="ml-5 mt-5">
                                    <h4 className="text-lg font-bold text-navMenu ">Zachary Holden</h4>
                                    <p className="text-[14px] text-navMenu">CEO & Founder</p>
                                </div>
                            </div>
                            <div className="-mt-6 ml-8 z-10 relative test-text text-[14px] bg-white pt-6 pb-4 px-5 text-navMenu rounded border-b-2 border-buttonBg">
                                <div className="absolute -top-4 right-8 text-4xl text-buttonBg"><FaQuoteLeft /></div>
                                <p>We have used web design agency for the last five years. We can not understand how we have been living without web design agency. Thank You!</p>
                            </div>
                        </div>
                        {/* testimonial 02 */}
                        <div >
                            <div className="flex ">
                                <div>
                                    <img className="rounded" src={avatar2} alt="" />
                                </div>
                                <div className="ml-5 mt-5">
                                    <h4 className="text-lg font-bold text-navMenu ">Daniel Johann</h4>
                                    <p className="text-[14px] text-navMenu">Satisfied customers</p>
                                </div>
                            </div>
                            <div className="-mt-6 ml-8 z-10 relative test-text text-[14px] bg-white pt-6 pb-4 px-5 text-navMenu rounded border-b-2 border-buttonBg">
                                <div className="absolute -top-4 right-8 text-4xl text-buttonBg"><FaQuoteLeft /></div>
                                <p>I am so pleased with this product. Absolutely wonderful! You will not regret it. It is really wonderful. Definitely worth the investment.</p>
                            </div>
                        </div>

                        {/* testimonial 03 */}
                        <div >
                            <div className="flex ">
                                <div>
                                    <img className="rounded" src={avatar3} alt="" />
                                </div>
                                <div className="ml-5 mt-5">
                                    <h4 className="text-lg font-bold text-navMenu ">
                                        Alannah Jeffcott</h4>
                                    <p className="text-[14px] text-navMenu">Business Consultant</p>
                                </div>
                            </div>
                            <div className="-mt-6 ml-8 z-10 relative test-text text-[14px] bg-white pt-6 pb-4 px-5 text-navMenu rounded border-b-2 border-buttonBg">
                                <div className="absolute -top-4 right-8 text-4xl text-buttonBg"><FaQuoteLeft /></div>
                                <p>I had be lost without web design agency. Web design agency is the most valuable business resource we have EVER purchased.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
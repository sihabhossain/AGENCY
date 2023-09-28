import { Link } from "react-router-dom";
import Title from "../../../Components/Title/Title";
import img1 from '../../../assets/Home/Blog/blog-01.jpg'
import img2 from '../../../assets/Home/Blog/blog-02.jpg'
import img3 from '../../../assets/Home/Blog/blog-03.jpg'
import { HiArrowSmallRight } from "react-icons/hi2";

const BlogItems = () => {
    return (
        <div className="py-20 bg-gray-100">
            <div className="w-10/12 mx-auto">

                <div className="text-center">
                    <Title subheading='OUR BLOG' heading='Our Recent News'></Title>
                </div>

                <div className="md:grid grid-cols-3 gap-6 mt-10 md:space-y-0 space-y-8">

                    {/* blogItem 01 */}
                    <div className="bg-white rounded">
                        <div className="imageHover relative">
                            <figure>
                                <img className="rounded-t" src={img1} alt="" />
                            </figure>
                        </div>
                        <div className="pt-6 px-5">
                            <p className="text-hoverNavMenu text-[14px]">June 01, 2023</p>
                            <Link><p className="text-lg text-navMenu hover:text-hoverNavMenu duration-200 font-bold mt-2 mb-5">The Reasons Why We Love Web Design Agency.</p></Link>
                        </div>
                        <div className="border-t border-gray-200 clear-left flex justify-between py-4">
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-[14px] font-bold pl-5">Read more</Link>
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-xl pr-5"><HiArrowSmallRight /></Link>
                        </div>
                    </div>

                    {/* blogItem 02 */}
                    <div className="bg-white rounded">
                        <div className="imageHover relative">
                            <figure>
                                <img className="rounded-t" src={img2} alt="" />
                            </figure>
                        </div>
                        <div className="pt-6 px-5">
                            <p className="text-hoverNavMenu text-[14px]">May 29, 2023</p>
                            <Link><p className="text-lg text-navMenu hover:text-hoverNavMenu duration-200 font-bold mt-2 mb-5">How To Own Web Design Agency For Free.</p></Link>
                        </div>
                        <div className="border-t border-gray-200 clear-left flex justify-between py-4">
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-[14px] font-bold pl-5">Read more</Link>
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-xl pr-5"><HiArrowSmallRight /></Link>
                        </div>
                    </div>

                    {/* blogItem 03 */}
                    <div className="bg-white rounded">
                        <div className="imageHover relative">
                            <figure>
                                <img className="rounded-t" src={img3} alt="" />
                            </figure>
                        </div>
                        <div className="pt-6 px-5">
                            <p className="text-hoverNavMenu text-[14px]">May 25, 2023</p>
                            <Link><p className="text-lg text-navMenu hover:text-hoverNavMenu duration-200 font-bold mt-2 mb-5">Five Latest Developments In Web Agency.</p></Link>
                        </div>
                        <div className="border-t border-gray-200 clear-left flex justify-between py-4">
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-[14px] font-bold pl-5">Read more</Link>
                            <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-xl pr-5"><HiArrowSmallRight /></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogItems;
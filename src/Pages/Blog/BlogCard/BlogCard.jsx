import { HiArrowSmallRight } from "react-icons/hi2"
import { Link } from "react-router-dom"


const BlogCard = ({ blog }) => {
    const { image, title, name, date } = blog || {}
    return (
        <div className="bg-white rounded h-fit w-full ">
            <div className="imageHover relative">
                <figure>
                    <img className="rounded-t" src={image} alt="" />
                </figure>
                <p className="px-5 bg-[#FF497C] py-2 z-10 w-fit absolute left-10 top-0">{name}</p>
            </div>
            <div className="pt-6 px-5">
                <p className="text-hoverNavMenu text-[14px]">{date}</p>
                <Link><p className="text-lg text-navMenu hover:text-hoverNavMenu duration-200 font-bold mt-2 mb-5">{title}</p></Link>
            </div>
            <div className="border-t border-gray-200 clear-left flex justify-between py-4">
                <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-[14px] font-bold pl-5">Read more</Link>
                <Link className="text-navMenu hover:text-hoverNavMenu duration-200 text-xl pr-5"><HiArrowSmallRight /></Link>
            </div>
        </div>
    )
}

export default BlogCard
import { Link } from "react-router-dom"

import BlogCard from "./BlogCard/BlogCard"
import BlogCategories from "./BlogCategories/BlogCategories"
import { blogsData } from "./BlogData/blogdata"
import BlogSearch from "./BlogSearch/BlogSearch"
import BlogTag from "./BlogTag/BlogTag"
import RecentBlogCard from "./RecentBlogCard/RecentBlogCard"

import { FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn } from 'react-icons/fa';
import TitleCover from "../../Components/TitleCover/TitleCover"


const Blog = () => {
    const SidebarStyle = "bg-[#1F2732] px-8 py-7 text-white rounded-md"
    const socialIconStyle = "bg-white text-[#FF497C] text-[40px] p-3 hover:bg-[#FF497C] hover:text-white transition-all duration-700"
    return (
        <section className="bg-[#F3F4F6]">
            {/* banner */}
            {/* <Banner title="Right Sidebar" /> */}
            <TitleCover serviceText={'Right side bar'} pageTitle={"right side bar"}/>
            {/* blog card */}
            <div className="container py-[120px] lg:flex gap-20 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-2/3">
                    {
                        blogsData.map((blog, index) => <BlogCard key={index} blog={blog} />)
                    }
                </div>
                {/* side bar */}
                <div className="w-full  lg:w-[30%] space-y-8">
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-3 text-xl font-bold ">Search</h3>
                        <BlogSearch />
                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Recent Posts</h3>
                        <div className="flex flex-col items-center gap-6">
                            {
                                blogsData.slice(0, 3).map((blog, index) => (
                                    <RecentBlogCard key={index} blog={blog} />
                                ))
                            }
                        </div>

                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Categories</h3>
                        <div className="flex flex-col gap-3">

                            <BlogCategories categoriesName={'Business'} />
                            <BlogCategories categoriesName={'Digital Agency'} />
                            <BlogCategories categoriesName={'Introductions'} />
                            <BlogCategories categoriesName={'New Technologies'} />
                            <BlogCategories categoriesName={'Web Development'} />
                        </div>

                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Tags</h3>
                        <div className="flex flex-wrap gap-2" style={{ gridAutoFlow: "dense" }}>
                            <BlogTag blogTag={"Consulting"} />
                            <BlogTag blogTag={"Agency"} />
                            <BlogTag blogTag={"Business"} />
                            <BlogTag blogTag={"Digital"} />
                            <BlogTag blogTag={"Experience"} />
                            <BlogTag blogTag={"Technology"} />

                        </div>
                    </div>
                    <div className={`${SidebarStyle}`}>
                        <h3 className="pb-5 text-xl font-bold ">Follow Us</h3>
                        <div className="flex  items-center gap-5">
                            <Link to={""} target="blank"><FaFacebookF className={`${socialIconStyle}`} /></Link>
                            <Link to={""} target="blank"><FaTwitter className={`${socialIconStyle}`} /></Link>
                            <Link to={""} target="blank"><FaInstagramSquare className={`${socialIconStyle}`} /></Link>
                            <Link to={""} target="blank"><FaLinkedinIn className={`${socialIconStyle}`} /></Link>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Blog
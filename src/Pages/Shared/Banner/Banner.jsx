import { Link } from "react-router-dom"


const Banner = ({title,}) => {
    return (
        <div className="relative overflow-x-hidden ">
            {/* Contact page banner */}
            <img
                src="https://flywebhtml.websitelayout.net/img/banner/page-title.jpg"
                alt=""
                className="w-full h-[250px] md:h-full bg-cover bg-no-repeat bg-slate-900 bg-opacity-60 "
            />

            {/* Overlay texts on contact page banner */}
            <div className="absolute  bg-slate-900 bg-opacity-60 top-0 left-0 w-full h-full overlay">
                <div className="container md:mx-28">
                    {/* banner texts here */}
                    <div className="">
                        <h2 className="md:text-7xl text-3xl text-white font-bold md:mt-48 mt-28">
                         {title}
                        </h2>
                        <div className="flex items-center gap-5">
                            <Link to="/" className="md:text-2xl font-semibold mt-2 text-white  after:bg-[#ff497c] after:w-[10px]">
                                Home
                            </Link>

                            <p className="bg-buttonBg py-[2px] mt-2 px-4 rounded-sm"></p>

                            <h4 className="md:text-2xl font-semibold mt-2 text-[#ffffff] opacity-[0.6]">
                               {title}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
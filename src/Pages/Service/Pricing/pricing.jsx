import Title from "../../../Components/Title/Title";
import { HiCheck, HiXMark } from "react-icons/hi2";

const Pricing = () => {
    return (
        <div className="py-20 container mx-auto bg-gray-100">
            <div className="text-center">
                <Title subheading='PRICING TABLE' heading='Our Pricing Plans'></Title>
            </div>

            <div className="md:grid grid-cols-3 gap-8 md:space-y-0 space-y-6 mt-20">

                {/* pricing item 01 */}
                <div className=" bg-white rounded-sm">
                    <p className="py-2 px-3 text-[14px] bg-navMenu rounded-r-3xl my-8 w-1/3 text-white">REGULAR</p>
                    <div className="text-center px-8">
                        <h4 className="text-5xl text-navMenu font-extrabold pb-3"><span className="text-4xl">$</span> 29.99</h4>
                        <p className="pb-4 border-b ">Monthly Package</p>
                    </div>
                    <div className="px-8 py-10">
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> 24/7 system monitoring</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Security management</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Patch management</p>
                        <p className="pb-5 flex items-center"><HiXMark className="mr-3 text-xl"/> Remote support</p>
                        <button className="py-3 w-full bg-buttonBg text-xl font-bold rounded-sm text-white uppercase">start now</button>
                    </div>
                </div>

                {/* pricing item 02 */}
                <div className=" bg-white rounded-sm">
                    <p className="py-2 px-3 text-[14px] bg-navMenu rounded-r-3xl my-8 w-1/3 text-white">REGULAR</p>
                    <div className="text-center px-8">
                        <h4 className="text-5xl text-navMenu font-extrabold pb-3"><span className="text-4xl">$</span> 39.99</h4>
                        <p className="pb-4 border-b ">Monthly Package</p>
                    </div>
                    <div className="px-8 py-10">
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> 24/7 system monitoring</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Security management</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Patch management</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Remote support</p>
                        <button className="py-3 w-full bg-buttonBg text-xl font-bold rounded-sm text-white uppercase">start now</button>
                    </div>
                </div>

                {/* pricing item 03 */}
                <div className=" bg-white rounded-sm">
                    <p className="py-2 px-3 text-[14px] bg-navMenu rounded-r-3xl my-8 w-1/3 text-white">REGULAR</p>
                    <div className="text-center px-8">
                        <h4 className="text-5xl text-navMenu font-extrabold pb-3"><span className="text-4xl">$</span> 49.99</h4>
                        <p className="pb-4 border-b ">Monthly Package</p>
                    </div>
                    <div className="px-8 py-10">
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> 24/7 system monitoring</p>
                        <p className="pb-5 flex items-center"><HiCheck className="mr-3 text-hoverNavMenu  text-xl"/> Security management</p>
                        <p className="pb-5 flex items-center"><HiXMark className="mr-3 text-xl"/> Patch management</p>
                        <p className="pb-5 flex items-center"><HiXMark className="mr-3 text-xl"/> Remote support</p>
                        <button className="py-3 w-full bg-buttonBg text-xl font-bold rounded-sm text-white uppercase">start now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
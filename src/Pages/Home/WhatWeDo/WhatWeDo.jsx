import Title from "../../../Components/Title/Title";
import ServiceItem from "../../Service/ServiceItem";

const WhatWeDo = () => {
    return (
        <div className="py-20 bg-gray-100">
            <div className="w-10/12 mx-auto">
                <div className="text-center">
                    <Title subheading='what we do' heading='Services That Help You Grow.'></Title>
                </div>
                <div className="mt-20">
                    <ServiceItem></ServiceItem>
                </div>
            </div>

        </div>
    );
};

export default WhatWeDo;
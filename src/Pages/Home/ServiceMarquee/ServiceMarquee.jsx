import './ServiceMarquee.css'
const ServiceMarquee = () => {
    return (
        <div className="bg-bgSecondary pb-8 pt-5 overflow-x-hidden">
            <div className="scrolling-marquee"> 
                <div className="flex">
                    <h4 className="text-7xl font-extrabold m-0 p-0 text-hoverNavMenu"> Design & Branding — Web Development — Product Design —  Mobile </h4>
                    <h4 className="text-7xl font-extrabold m-0 p-0 text-hoverNavMenu ">Application — Web Application — SEO Optimization - </h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceMarquee;
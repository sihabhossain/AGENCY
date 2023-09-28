import Banner from "./Banner/Banner";
import BlogItems from "./BlogItems/BlogItems";
import ServiceMarquee from "./ServiceMarquee/ServiceMarquee";
import Testimonials from "./Testimonials/testimonials";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatWeDo></WhatWeDo>
            <WhoWeAre></WhoWeAre>
            <Testimonials></Testimonials>
            <ServiceMarquee></ServiceMarquee>
            <BlogItems></BlogItems>
        </div>
    );
};

export default Home;
import TitleCover from '../../Components/TitleCover/TitleCover';
import ServiceMarquee from '../Home/ServiceMarquee/ServiceMarquee';
import Testimonials from '../Home/Testimonials/testimonials';
import WhatWeDo from '../Home/WhatWeDo/WhatWeDo';
import Pricing from './Pricing/pricing';
const Service = () => {
    return (
        <div>
            <div className='title'>
                <TitleCover serviceText='Our service' pageTitle='Our service'></TitleCover>
                <WhatWeDo></WhatWeDo>
                <Testimonials></Testimonials>
                <ServiceMarquee></ServiceMarquee>
                <Pricing></Pricing>
            </div>
        </div>
    );
};

export default Service;
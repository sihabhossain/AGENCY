import TitleCover from "../../Components/TitleCover/TitleCover";
import HelpCard from "./HelpCard/HelpCard";
import MainContent from "./MainContent/MainContent";
import OurServices from "./OurServices/OurServices";

const ServiceDetails = () => {
  return (
    <div>
      {/* Service details banner */}
      <TitleCover
        serviceText="Service Details"
        pageTitle="Service details"
      ></TitleCover>

      <div className="md:flex container mx-auto gap-10 mt-20 mb-20">
        {/* Sidebars */}
        <div className="md:w-2/6 space-y-10">
          {/* Our services */}
          <div className="flex flex-col gap-3 bg-[#f8f9fa] px-8 py-7 text-white rounded-md">
            <h3 className="pb-5 text-2xl font-bold text-black ">
              Our Services
            </h3>
            <OurServices categoriesName={"Web Designing"}></OurServices>
            <OurServices categoriesName={"Web Designing"}></OurServices>
            <OurServices categoriesName={"Web Designing"}></OurServices>
            <OurServices categoriesName={"Web Designing"}></OurServices>
            <OurServices categoriesName={"Web Designing"}></OurServices>
            <OurServices categoriesName={"Web Designing"}></OurServices>
          </div>

          {/* How can we help card */}
          <HelpCard></HelpCard>
        </div>
        {/* Main content */}
        <div className="md:w-4/6">
          <MainContent></MainContent>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

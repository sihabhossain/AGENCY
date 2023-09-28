import { BsChevronRight } from "react-icons/bs";

const OurServices = ({ categoriesName }) => {
  return (
    <div className="bg-white text-black hover:text-white hover:bg-black flex justify-between items-center px-5 py-5 rounded-md">
      <p className="font-bold font-mulish text-base">{categoriesName}</p>
      <BsChevronRight className="text-lg font-bold" />
    </div>
  );
};

export default OurServices;

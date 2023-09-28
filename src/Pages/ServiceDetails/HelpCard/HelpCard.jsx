import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMailOpen } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const HelpCard = () => {
  return (
    <div className="">
      <img
        src="https://flywebhtml.websitelayout.net/img/content/contact-img.jpg"
        alt=""
        className="rounded-t-md"
      />

      <div className="text-center space-y-5 font-bold pt-20 pb-10 bg-[#1f2732] text-white relative">
        {/* Headphone icon */}
        <div className="absolute bg-[#ff497c] p-6 rounded-full -top-12 md:right-36 right-28">
          <TfiHeadphoneAlt size={"50px"}></TfiHeadphoneAlt>
        </div>
        <h2 className="text-3xl">How Can We Help?</h2>
        <div className="flex items-center justify-center gap-3">
          <BsFillTelephoneFill></BsFillTelephoneFill>
          <h3>(+44)123 456 789</h3>
        </div>
        <div className="flex items-center justify-center gap-3">
          <IoMdMailOpen></IoMdMailOpen>
          <h4>addyour@emailhere</h4>
        </div>
      </div>
    </div>
  );
};

export default HelpCard;

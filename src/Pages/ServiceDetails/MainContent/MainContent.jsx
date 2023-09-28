import { AiOutlineCheck } from "react-icons/ai";

const MainContent = () => {
  return (
    <div className="space-y-10">
      {/* Main content banner */}
      <div className="">
        <img
          src="https://flywebhtml.websitelayout.net/img/service/service-details-01.jpg"
          alt=""
          className="mt-10 md:mt-0 rounded-md "
        />
      </div>

      {/* Web Designing */}
      <div className="space-y-3">
        <h2 className="text-black font-bold text-4xl">Web Designing</h2>
        <p className="from-neutral-600 text-[17px]">
          Web designing is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using Content here,
          content here, making it look like readable English.
        </p>
      </div>

      {/* Best solution and data Analysys */}

      <div className="md:flex gap-10 ">
        <div className="flex gap-5 bg-[#f8f9fa] md:mb-0 mb-10">
          <div>
            <img
              src="https://flywebhtml.websitelayout.net/img/service/service-details-2.jpg"
              alt=""
              className="h-full"
            />
          </div>
          <div className="py-2 space-y-3">
            <h2 className="text-2xl font-bold">Best Solutions</h2>
            <p>We focus on the best practices for it solutions and services.</p>
          </div>
        </div>

        <div className="flex gap-5 bg-[#f8f9fa]">
          <div>
            <img
              src="https://flywebhtml.websitelayout.net/img/service/service-details-3.jpg"
              alt=""
              className="h-full"
            />
          </div>
          <div className="py-2 space-y-3">
            <h2 className="text-2xl font-bold">Data Analysys</h2>
            <p>We focus on the best practices for it solutions and services.</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="text-[17px] from-neutral-600">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text.
        </p>
      </div>

      {/* Our work benifits */}
      <div>
        <h2 className="text-black font-bold text-4xl">Our work benefits</h2>

        <div>
          <p className="text-[17px] from-neutral-600 mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text.
          </p>
        </div>

        {/* Ticks */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex items-center gap-2">
            <AiOutlineCheck
              className="text-pink-500"
              size={"25px"}
            ></AiOutlineCheck>
            <p className="text-[17px] text-black font-bold">
              Marketing options and rates
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineCheck
              className="text-pink-500"
              size={"25px"}
            ></AiOutlineCheck>
            <p className="text-[17px] text-black font-bold">
              Research beyond the business plan
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineCheck
              className="text-pink-500"
              size={"25px"}
            ></AiOutlineCheck>
            <p className="text-[17px] text-black font-bold">
              The ability to turnaround consulting
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineCheck
              className="text-pink-500"
              size={"25px"}
            ></AiOutlineCheck>
            <p className="text-[17px] text-black font-bold">
              Customer engagement matters
            </p>
          </div>
        </div>

        <div>
          <p className="text-[17px] from-neutral-600 mt-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isnt anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

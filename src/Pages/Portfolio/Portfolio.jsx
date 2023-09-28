import PortfolioCard from "./PortfolioCard/PortfolioCard";
import { PortfoliDAta } from "./PortfolioData/PortFolioData";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import TitleCover from "../../Components/TitleCover/TitleCover";

const Portfolio = () => {
  return (
    <section className=" overflow-auto">
      {/* banner section */}
      <TitleCover
        serviceText="Our Portfolio"
        pageTitle="Our Portfolio"
      ></TitleCover>
      {/* card section */}
      <div className=" md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-10/12 mx-auto py-[150px]">
        {PortfoliDAta?.map((CardData, index) => (
          <Link to="/details" key={index}>
            {" "}
            <PortfolioCard CardData={CardData} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

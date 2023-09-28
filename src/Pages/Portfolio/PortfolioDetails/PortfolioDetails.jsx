import Banner from "../../Shared/Banner/Banner"
import image from '../../../assets/portfolio/portfolio-details-01.jpg'
import ClientDetailsCard from "./ClientDetailsCard"
import ExplaineCard from "./ExplaineCard";
// dummy data
const projectData = [
    {
        client: "Theresa Dasilva",
        projectValue: "$679",
        date: "June 14, 2023",
        category: "XD Design",
    },
];




const PortfolioDetails = () => {
    return (
        <section>
            {/* banner */}
            <Banner title={"Portfolio Details"} />
            {/* details card */}
            <div className="container py-[120px] text-white">
                <img className="w-full h-auto object-cover rounded-md" src={image} alt="" />
                <div className="bg-[#1F2732] p-10 mt-10 rounded-md">
                    {
                        projectData?.map((project, index) => <ClientDetailsCard key={index} project={project} />)
                    }

                </div>
                {/* project  card */}
                <div>
                    <h3 className="text-[32px] font-bold font-mulish text-black py-6">Project Details</h3>
                    <ExplaineCard/>
                </div>
            </div>

        </section>
    )
}

export default PortfolioDetails;
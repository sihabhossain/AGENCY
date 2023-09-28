
const PortfolioCard = ({ CardData }) => {
    const { image, title, name } = CardData || {}
    return (
        <div >
            <img className="w-full h-80" src={image} alt="" />
            <div className="bg-[#F8F9FA] text-center py-7">

                <h4 className="text-black hover:text-[#FF49A5] text-2xl font-mulish font-bold">{title}</h4>
                <h6 className="text-[#FF49A5] pt-3 font-semibold uppercase font-mulish">{name}</h6>
            </div>
        </div>
    )
}

export default PortfolioCard
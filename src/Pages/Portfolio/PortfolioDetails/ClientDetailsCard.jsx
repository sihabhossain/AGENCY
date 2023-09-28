


const ClientDetailsCard = ({ project }) => {
    const { client, projectValue, date, category } = project || {}
    return (
        <div className="flex  items-center justify-between ">
            <div className="text-center space-y-3">
                <p className="font-bold font-mulish text-xl text-[#FF497C]">Client</p>
                <p className="font-medium text-base ">{client}</p>
            </div>
            <div className="text-center space-y-3">
                <p className="font-bold font-mulish text-xl text-[#FF497C]">Project Value</p>
                <p className="font-medium text-base ">{projectValue}</p>
            </div>
            <div className="text-center space-y-3">
                <p className="font-bold font-mulish text-xl text-[#FF497C]">Date</p>
                <p className="font-medium text-base ">{date}</p>
            </div>
            <div className="text-center space-y-3">
                <p className="font-bold font-mulish text-xl text-[#FF497C]">Category</p>
                <p className="font-medium text-base ">{category}</p>
            </div>
        </div>
    )
}

export default ClientDetailsCard
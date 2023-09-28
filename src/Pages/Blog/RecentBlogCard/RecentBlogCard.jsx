

const RecentBlogCard = ({ blog }) => {
    const { title, date, image } = blog || {}
    return (
        <div className="flex items-center">
            <img className="h-20 w-20 object-cover" src={image} alt="" />
            <div className="ml-4 text-white flex flex-col items-start gap-3">
                <h6 className="font-mulish font-bold text-base leading-[140%] ">{title}</h6>
                <span className="font-mulish font-bold text-sm  opacity-80 ">{date}</span>
            </div>
        </div>
    )
}

export default RecentBlogCard
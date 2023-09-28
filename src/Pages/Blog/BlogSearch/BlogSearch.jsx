import { BiSearch } from 'react-icons/bi';

const BlogSearch = () => {
    return (
        <div className='flex items-center'>
            <input type="text" placeholder='Search here ...' className='py-3 px-3 outline-none text-black text-lg font-medium w-full' />
            <button className='bg-[#FF497C] py-3 px-6 font-bold text-[30px]  '><BiSearch /></button>
        </div>
    )
}

export default BlogSearch
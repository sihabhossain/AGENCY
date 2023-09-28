import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaPhoneVolume, FaEnvelopeOpenText } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-bgSecondary pt-24">
            <footer className='container mx-auto'>
                <div className="md:grid grid-cols-3 gap-24">
                    <div>
                        <div>
                            <Link className="text-4xl font-bold text-white uppercase">Logo</Link>
                            <p className="text-white mt-10">We have been most trusted web design agency since 25+ years.</p>

                            {/* social icons */}
                            <div className="flex space-x-2 mt-10">
                                <Link to='/' >
                                    <div className="p-2 bg-white bg-opacity-20 hover:bg-buttonBg duration-200 transition-all ease-in w-8 h-8 text-white">< FaFacebookF className="text-[15px]" /></div>
                                </Link>
                                <Link to='/' >
                                    <div className="p-2 bg-white bg-opacity-20 hover:bg-buttonBg duration-200 transition-all ease-in w-8 h-8 text-white">< FaTwitter className="text-[15px]" /></div>
                                </Link>
                                <Link to='/' >
                                    <div className="p-2 bg-white bg-opacity-20 hover:bg-buttonBg duration-200 transition-all ease-in w-8 h-8 text-white">< FaYoutube className="text-[15px]" /></div>
                                </Link>
                                <Link to='/' >
                                    <div className="p-2 bg-white bg-opacity-20 hover:bg-buttonBg duration-200 transition-all ease-in w-8 h-8 text-white">< FaLinkedinIn className="text-[15px]" /></div>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-10">Newsletter</h3>
                        <p className="text-white">Subscribe to our newsletter to receive updates on the latest news!</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-10">Contacts</h3>
                        <div className="space-y-4">
                            <div className="flex space-x-4 items-center">
                                <span className="text-4xl text-hoverNavMenu"><FaPhoneVolume /></span>
                                <div>
                                    <h5 className="text-xl text-white font-semibold">Contact Us</h5>
                                    <a className="text-white" href="tel:+44123456789">(+44) 123-456-789</a>
                                </div>
                            </div>
                            <div className="flex space-x-4 items-center">
                                <span className="text-4xl text-hoverNavMenu">
                                    <FaEnvelopeOpenText />
                                </span>
                                <div>
                                    <h5 className="text-xl text-white font-semibold">Email</h5>
                                    <a className="text-white" href="mailto:info@yourdomain.com">info@yourdomain.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="text-center py-5 border-t mt-20 "> 
                <p className="text-white">© 2023 Flyweb Powered by our company name</p>
            </div>
        </div>
    );
};

export default Footer;
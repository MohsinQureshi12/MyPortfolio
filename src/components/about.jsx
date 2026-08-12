import { ArrowRight } from "lucide-react";
import aboutUsImage2 from "../../public/assets/image/aboutusimage2.jpg";
import { Link } from "react-router-dom";
// import aboutUsImage2 from "../../public/assets/image/aboutusimage2.jpg";


export const AboutComponent = () => {
    return (
        <div>
            <div className=" bg-white lg:py-20 py-10">
                <div className="flex items-center justify-center">
                    <div className="mx-auto px-4 w-full container max-w-7xl">
                        <div >
                            <p className='text-primary font-bold text-sm lg:text-start text-center  uppercase'>About Us</p>
                            <h1 className='lg:text-3xl text-lg font-bold lg:text-start text-center text-black  lg:w-[50%]'>A Modern AI-Powered Software Company Built for Global Businesses.</h1>
                        </div>
                        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
                            {/* Text Content */}
                            <div className="w-full md:w-[48%] text-center">
                                <div className="lg:text-base  text-sm lg:text-left text-center text-grey-light">
                                    <p>
                                        Street Coder is a global software development company delivering AI-powered solutions, custom software, web applications, and intelligent digital experiences across Australia, the UK, Pakistan, and beyond. We combine technical expertise with innovative technology to help startups, businesses, and enterprises build secure, scalable, and future-ready digital products.
                                    </p>
                                    <Link to="/about">
                                        <p className="flex gap-2 items-center mt-4 text-primary lg:justify-start jistify-center text-base  w-40 p-3 rounded-full border border-primary">Learn about us <ArrowRight className="mt-1" size={20} /></p>
                                    </Link>

                                </div>
                            </div>
                            {/* Image Section */}
                            <div className="w-full md:w-[48%] flex justify-center ">
                                <img
                                    src={aboutUsImage2}
                                    alt="About Us"
                                    className="h-auto max-h-[300px] w-full max-w-[500px] rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


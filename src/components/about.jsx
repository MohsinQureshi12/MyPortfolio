import { ArrowRight } from "lucide-react";
import Arrowleft from "../../public/assets/Icon/Arrowleft";
import aboutUsImage2 from "../../public/assets/image/aboutusimage2.jpg";
import { Link } from "react-router-dom";
// import aboutUsImage2 from "../../public/assets/image/aboutusimage2.jpg";


export const AboutComponent = () => {
    return (
        <div>


            <div className=" bg-white lg:py-20 py-10">
                <div className="flex   items-center justify-center">
                    <div className="mx-auto px-4 w-full container max-w-7xl">
                        <div >
                            <p className='text-primary font-bold text-sm lg:text-start text-center  uppercase'>About Us</p>
                            <h1 className='lg:text-5xl text-2xl font-bold lg:text-start text-center  mb-6 text-black  lg:w-[50%]'>A modern AI-powered software company engineered for global standards.</h1>
                        </div>

                        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6">
                            {/* Text Content */}
                            <div className="w-full md:w-[48%] text-center">
                                <div className="lg:text-base  text-sm lg:text-left text-center text-axc-gray">
                                    <p>
                                        Street Coders Solutions is one of the quickest developing
                                        innovation company comprised of over 15 years of prepared IT
                                        engineers and experts. We likewise helped numerous
                                        organizations develop from the good to the best and from the
                                        beginning stage to the top. Our main goal is not just to
                                        provide IT consultancy, however, to provide an intelligent
                                        and financially savvy system utilizing cutting-edge
                                        innovations. We are an enthusiastic team of certified
                                        professionals with proven software development experience.
                                        <br />
                                        <br />
                                        We are a full-cycle software development firm with
                                        multi-dimensional expertise, from developing a complete
                                        platform to improving existing technologies. Our secure and
                                        reliable solutions have established our mark among renowned
                                        brands worldwide.
                                    </p>
                                    <Link to="#">
                                        <p className="flex gap-2 items-center mt-4 text-primary lg:justify-start jistify-center text-base">Learn about us <ArrowRight className="mt-1" size={20} /></p>
                                    </Link>

                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="w-full md:w-[48%] flex justify-center">
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


import PortfolioBgImage from '../assets/aboutUs_background.jpg'
// import PortfolioImageBg2 from '../assets/PortfolioImageBg2.png'
import PortfolioImage1 from '../assets/PortfolioImage1.png'
import PortfolioImage2 from '../assets/PortfolioImage2.png'


const PortfolioPage = () => {
    return (
        <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${PortfolioBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container min-h-[600px] flex flex-col items-center">
                <div className="mb-3 mt-4">
                    <h5 className="text-3xl font-bold text-[#FF6600]">What We Offer</h5>
                </div>
                <div className="mb-5 ">
                    <h1 className="text-3xl font-bold text-white">Our Core Expertise</h1>
                </div>
                <div className="text-center mb-5">
                    <p className="text-white md:w-[674px] w-[370px] ">
                        We leverage IT intellect to create innovative software solutions. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies. We will help you with all your web development, software development or even block chain development concerns. Even any UI/UX design concerns of yours will be addressed with ease by our special team of experts.


                    </p>
                </div>
1

                <div className="relative w-full md:w-[918px] h-[550px] md:h-[320px] rounded-lg overflow-hidden mb-20">
                    <div className="absolute inset-0">
                        {/* Orange gradient overlay for top half */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#651e14] to-transparent"></div>
                        {/* Background image for bottom half */}
                        {/* <img src={PortfolioBgImage} alt="Portfolio background" className="absolute bottom-0 right-0 w-full h-1/2 object-cover rounded-lg" /> */}
                    </div>
                    {/* Content on the left side */}
                    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between text-white z-10 px-3">
                        <div className="text-center w-full md:w-[55%]">
                            <h1 className="text-2xl font-bold text-[#FF6600] text-left md:my-0">Web Development</h1>
                            <h2 className="text-lg font-semibold text-left">Custom Software Solution</h2>
                            <p className="text-left mb-8 w-[96%] h-[215px]">
                                We leverage IT intellect to create innovative software solutions. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies. We will help you with all your web development, software development or even block chain development concerns. Even any UI/UX design concerns of yours will be addressed with ease by our special team of experts.
                            </p>
                        </div>

  <div className="w-[60%] md:w-[52%] md:h-[100%] ">
                            <img src={PortfolioImage1} alt="PortfolioImage1" className="object-cover w-full h-[250px] mt-[34px] " />
                        </div>
                    </div>
                </div>





                <div className="relative w-full md:w-[918px] h-[550px] md:h-[250px] rounded-lg overflow-hidden mb-20 ">
                    <div className="absolute inset-0">
                        {/* Orange gradient overlay for top half */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#651e14] to-transparent"></div>
                        {/* Background image for bottom half */}
                        {/* <img src={PortfolioBgImage} alt="Portfolio background" className="absolute bottom-0 right-0 w-full h-1/2 object-cover rounded-lg" /> */}
                    </div>
                    {/* Content on the right side */}
                    <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between text-white z-10 px-5">
                        <div className='w-[60%] md:w-[33%] md:h-[100%]'>
                            <img src={PortfolioImage2} alt="PortfolioImage1" className="object-cover   h-full pt-[15px] w-[285px] ml-[15px]" />
                        </div>
                        <div className="text-center w-full md:w-[55%] h-[165px] ">
                            <h1 className="text-2xl font-bold text-[#FF6600] text-left my-5 md:my-0 ">UI UX</h1>
                            <h2 className="text-lg font-semibold text-left">Custom Software Solution</h2>
                            <p className="text-left mb-8">
                                We leverage IT intellect to create innovative software solutions. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies. We will help you with all your web development, software development or even block chain development concerns. Even any UI/UX design concerns of yours will be addressed with ease by our special team of experts.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PortfolioPage
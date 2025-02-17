import ArrowLogo from '../assets/arrowsign.png';
import AboutUsBg from '../assets/aboutUs_background.jpg';
import UIUX from '../assets/icon1.png'
import WebDev from '../assets/icon2.png'
import GameDev from '../assets/icon3.png'
import BlockChainDev from '../assets/icon4.png'

const AboutUs = () => {
    return (
        // <div className='w-full flex justify-center items-center min-h-screen' style={{ backgroundImage: `url(${AboutUsBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className='w-full flex justify-center items-center min-h-screen'>
            <div className="container min-h-[600px] flex flex-col items-center mt-5">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-[#0E315A] ">What We Do</h1>
                </div>

                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-[#0E315A]  ">We provide end-to-end Design and Development Solutions</h1>
                </div>
                <div className="text-center mb-4">
                    <p className="text-[#0E315A]  md:w-[674px] w-[370px] ">
                        Our aim is to transform your business process for a digital future.
                        We provide dedicated resources and staff augmentation to enterprises
                        worldwide for IT support and success. Our diligent team of developers
                        and designers can produce bespoke projects as per your needs.
                        Be it a simple project with minimal details or an indepth project with
                        specific pointers,we have ve got you covered.
                    </p>
                </div>
                <div className="mb-20">
                    <img src={ArrowLogo} alt="arrowlogo" className="w-8 h-20 mt-2" />
                </div>

                <div className='flex flex-row w-full h-[300px] '>
                    <div className='w-[300px] h-[240px] mr-[29px] rounded-lg shadow-md relative'>
                        <div className='size-[78px] rounded-full absolute top-[-40px] left-[110px] before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-black/20 before:blur-md'>
                            <img className='h-[70px] w-[300px] mt-2' src={UIUX} alt="UIUX" />
                        </div>

                        <div className='text-center pt-[65px]'>
                            <h1 className='text-xl font-bold mb-2 text-[20px] text-[#0E315A]'>UI/UX Design</h1>
                            <p className='text-[13px] text-[#0E315A] p-2'>We deliver web, mobile, and desktop software solutions tailored to your business processes across all verticals.</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[240px] mr-[29px] rounded-lg shadow-md relative'>
                        {/* <div className='size-[78px] rounded-full bg-[#fb5c46] absolute top-[-40px] left-[112px]'> */}
                        <div className='size-[78px] rounded-full absolute top-[-40px] left-[110px] before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-black/20 before:blur-md'>
                            <img className='h-[40px] w-[60px] mt-4 ml-2' src={WebDev} alt="WebDev" />

                        </div>
                        <div className='text-center pt-[65px]'>
                            <h1 className='text-xl font-bold mb-2 text-[20px] text-[#0E315A]'>Web Development</h1>
                            <p className='text-[13px] text-[#0E315A] p-2'>We deliver high-fidelity software solutions for web, mobile, and desktops mapped onto your unique business processes. We build, modernize, optimize and scale your business apps using the latest SDLC tools and cross-platform technologies.</p>
                        </div>
                    </div>



                    <div className='w-[300px] h-[240px] mr-[29px] rounded-lg shadow-md relative'>
                    <div className='size-[78px] rounded-full absolute top-[-40px] left-[110px] before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-black/20 before:blur-md'>
                            <img className='h-[50px] w-[70px] mt-2 ml-1' src={GameDev} alt="GameDev" />
                        </div>
                        <div className='text-center pt-[65px]'>
                            <h1 className='text-xl font-bold mb-2 text-[20px] text-[#0E315A]'>Game Development</h1>
                            <p className='text-[13px] text-[#0E315A] p-2'>We develop pixel-perfect games with future-proof architecture and high resolution, using the latest technologies.</p>
                        </div>
                    </div>

                    <div className='w-[300px] h-[240px] rounded-lg shadow-md relative'>
                    <div className='size-[78px] rounded-full absolute top-[-40px] left-[110px] before:content-[""] before:absolute before:inset-0 before:rounded-full before:bg-black/20 before:blur-md'>
                            <img className='h-[60px] w-[150px] mt-2' src={BlockChainDev} alt="BlockChainDev" />
                        </div>
                        <div className='text-center pt-[65px]'>
                            <h1 className='text-xl font-bold mb-2 text-[20px] text-[#0E315A]'>Blockchain Development</h1>
                            <p className='text-[13px] text-[#0E315A] p-2'>We design solutions like smart contracts, DEXs, DeFi, NFTs, gamification, etc., based on blockchain technology.
                            </p>
                        </div>
                    </div>



                </div>



            </div>
        </div>
    );
};

export default AboutUs;

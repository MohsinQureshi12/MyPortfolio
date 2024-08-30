import ContactPageBg from "../../assets/ContactPageBg.jpg";
import logo from '../../assets/Vector.svg';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactDetailsPage = () => {
    return (
        <div className='w-full flex flex-col md:flex-row justify-center items-center h-[400px] relative
        ' style={{ backgroundImage: `url(${ContactPageBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='container flex flex-col md:flex-row h-full'>
                <div className='w-1/3 flex-col'>
                    <img className='w-[192px] h-[49px] mt-[54px] ml-[44px]' src={logo} alt="" />
                    <p className='w-[246px] text-[14px] mt-[22px] ml-[45px] text-white'>Mustech is the best web development
                        & Software Company</p>
                    <button className='w-[122px] h-[43px] bg-[#364C62] rounded-lg mt-[24px] ml-[44px] text-white'>Get a Quote</button>
                    <div className="flex flex-row ml-[44px] mt-[24px]">
                        <FaFacebook className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
                        <FaInstagram className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
                        <FaYoutube className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
                        <FaLinkedin className="text-3xl text-[#364C62] mr-2 cursor-pointer hover:text-blue-500" />
                        <FaTwitter className="text-3xl text-[#364C62] cursor-pointer hover:text-blue-500" />
                    </div>
                </div>
                <div className='w-1/3 flex-col'>
                    <h1 className='w-[67px] mt-[62px] ml-10 font-bold text-white mb-[24px]'>
                        Visit Us
                    </h1>
                    <div className='size-[200px] flex flex-col'>
                        <div className='flex flex-row justify-between text-white mb-2'>
                            <h1 className='font-bold text-[#FB5C46]'>Location:</h1>
                            <div>Lahore, Pakistan</div>
                        </div>
                        <div className='flex flex-row justify-between text-white mb-2'>
                            <h1 className='font-bold text-[#FB5C46]'>Email:</h1>
                            <div>abcd@gmail.com</div>
                        </div>
                        <div className='flex flex-row justify-between text-white mb-2'>
                            <h1 className='font-bold text-[#FB5C46]'>Phone:</h1>
                            <div><p className='text-left'>03009999000</p></div>
                        </div>
                    </div>
                </div>



                <div className='w-1/3 flex flex-col  '>
                    <h2 className="text-white text-2xl font-bold mb-[24px] mt-[62px]">CONTACT US</h2>
                    <div className="flex mb-2">
                        <div className="mr-2 w-[175px]">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="fullname">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Enter your full name" required />
                        </div>
                        <div className="w-[175px]">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="phone">
                                Phone Number <span className="text-red-500">*</span>
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Enter Phone number" required />
                        </div>
                    </div>
                    <div className="mb-1 w-[355px]">
                        <label className="block text-white text-sm font-bold mb-1" htmlFor="message">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-[100px]" id="message" placeholder="Enter your message" required ></textarea>
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default ContactDetailsPage;

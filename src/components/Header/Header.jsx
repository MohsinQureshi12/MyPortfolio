import { Link } from "react-router-dom";
import logo from "../../assets/Sclogo.svg";
import "../../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const navLinks = [
  { path: "/", display: "Home" },
  { path: "/about-page", display: "About Us" },
  { path: "/services", display: "Services" },
  { path: "/portfolio-page", display: "Portfolio" },
  { 
    display: "Hire Us",  
    dropdown: [
      { path: "/hire-web-dev", label: "Per Hour" },
      { path: "/hire-mobile-dev", label: "Weekly Base" },
      { path: "/hire-ui-ux", label: "Monthly Base" }
    ]
  },
  { path: "/technology-page", display: "Technology" }
];

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="w-full bg-black">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center justify-between p-4">
        <img className="w-[200px]" src={logo} alt="Logo" />
        <nav>
          <ul className="flex flex-col md:flex-row">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-4 text-white relative">
                {link.dropdown ? (
              <button 
              className="text-white flex items-center gap-2 focus:outline-none" 
              onClick={toggleDropdown}
            >
              {link.display}
              <i className="fa-solid fa-caret-down"></i> {/* Dropdown Icon */}
            </button>
                ) : (
                  <Link to={link.path}>{link.display}</Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && dropdownVisible && (
                  <div className="absolute left-3 mt-2 w-40 bg-white text-black shadow-lg border rounded z-20">
                    <ul className="py-2">
                      {link.dropdown.map((item, idx) => (
                        <li key={idx} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                          <Link to={item.path}>{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <button className="w-[86px] h-[40px] bg-[#0E315A] border border-[#0E315A] rounded-lg mt-4 md:mt-0 text-white"
          onClick={() => navigate("/contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;







// import { Link } from 'react-router-dom';
// import logo from '../../assets/Vector.svg';
// // import backgroundImage from "../../assets/background_image1.png"
// import '../../App.css'; // Import CSS file for header styles
// import HireUs from '../../pages/HireUs';
// const navLinks = [
//   {
//     path: "/",
//     display: "Home",
//   },
//   {
//     path: "/about-page",
//     display: "About Us",
//   },
//   {
//     path: "/services",
//     display: "Services",
//   },
//   {
//     path: "/portfolio-page",
//     display: "Portfolio",
//   },

//   {
//     // path: "/hire-us-page",
//     display: "Hire Us",

//   },
//   {
//     path: "/technology-page",
//     display: "Technology",
//   },
// ];

// const Header = () => {
//   return (
//     <div className='w-full bg-black'>
//       <div className='container mx-auto flex flex-col md:flex-row md:items-center justify-between p-4'>
//         <img className='w-[200px]' src={logo} alt="" />
//         <nav>
//           <ul className="flex flex-col md:flex-row">
//             {navLinks.map((link, index) => (
//               <li key={index} className="mx-4 text-white">
//                 <Link to={link.path}>{link.display}</Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//         <button className='w-[86px] h-[40px] bg-[#FB5C46] border border-[#FB5C46] rounded-lg mt-4 md:mt-0 text-white'>Contact</button>
//       </div>
//     </div>
//   );
// };

// export default Header;

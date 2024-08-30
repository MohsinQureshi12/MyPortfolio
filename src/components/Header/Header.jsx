import { Link } from 'react-router-dom';
import logo from '../../assets/Vector.svg';
// import backgroundImage from "../../assets/background_image1.png"
import '../../App.css'; // Import CSS file for header styles

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about-page",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/portfolio-page",
    display: "Portfolio",
  },
  {
    path: "/technology-page",
    display: "Technology",
  },
];

const Header = () => {
  return (
    <div className='w-full bg-black'>
      <div className='container mx-auto flex flex-col md:flex-row md:items-center justify-between p-4'>
        <img className='w-[200px]' src={logo} alt="" />
        <nav>
          <ul className="flex flex-col md:flex-row">
            {navLinks.map((link, index) => (
              <li key={index} className="mx-4 text-white">
                <Link to={link.path}>{link.display}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className='w-[86px] h-[40px] bg-[#FB5C46] border border-[#FB5C46] rounded-lg mt-4 md:mt-0 text-white'>Contact</button>
      </div>
    </div>
  );
};

export default Header;

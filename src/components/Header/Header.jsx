 
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/Sclogo.svg";
import { useState, useEffect, useRef } from "react";

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
      { path: "/hire-ui-ux", label: "Monthly Base" },
    ],
  },
  { path: "/technology-page", display: "Technology" },
];

const Header = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const closeAllDropdowns = () => {
    setDropdownVisible(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    closeAllDropdowns();
  };

  // Auto close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto close sidebar on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          
          <img className="w-[200px] cursor-pointer" src={logo} alt="Logo"  onClick={() => {
        window.location.href = "/";
      }}/>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleSidebar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" ref={dropdownRef}>
            <ul className="flex items-center">
              {navLinks.map((link, index) => (
                <li key={index} className="mx-4 text-white relative">
                  {link.dropdown ? (
                    <button
                      className="flex items-center gap-2 focus:outline-none"
                      onClick={() => toggleDropdown(index)}
                    >
                      {link.display}
                      <i className="fa-solid fa-caret-down"></i>
                    </button>
                  ) : (
                    <Link to={link.path}>{link.display}</Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && dropdownVisible === index && (
                    <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg border rounded z-20">
                      <ul className="py-2">
                        {link.dropdown.map((item, idx) => (
                          <li
                            key={idx}
                            className="px-4 py-2 hover:bg-gray-200"
                            onClick={closeAllDropdowns}
                          >
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

          {/* Desktop Contact Button */}
          <button
            className="hidden md:block py-3 px-6 bg-[#0E315A] border border-[#0E315A] rounded-md text-white"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img className="w-[150px] cursor-pointer" src={logo} alt="Sidebar Logo"  onClick={() => {
        window.location.href = "/";
      }}/>
          <button className="text-2xl" onClick={toggleSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="h-auto overflow-y-auto p-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.dropdown ? (
                    <button
                      className="w-full flex items-center justify-between focus:outline-none"
                      onClick={() => toggleDropdown(index)}
                    >
                      {link.display}
                      <i className="fa-solid fa-caret-down"></i>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        toggleSidebar();
                        closeAllDropdowns();
                      }}
                    >
                      {link.display}
                    </Link>
                  )}

                  {/* Sidebar Dropdown */}
                  {link.dropdown && dropdownVisible === index && (
                    <div className="mt-2 bg-gray-800 text-white rounded shadow-lg">
                      <ul className="py-2">
                        {link.dropdown.map((item, idx) => (
                        
                          <li
                           
                            key={idx}
                            className="px-4 py-2 hover:bg-gray-700"
                            onClick={() => {
                              toggleSidebar(); // Close sidebar
                              closeAllDropdowns(); // Close dropdown
                            }}
                          >
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

          {/* Mobile Contact Button */}
          <button
            className="w-full mt-4 p-3 bg-[#0E315A] border border-[#0E315A] text-white rounded-lg"
            onClick={() => {
              navigate("/contact");
              toggleSidebar();
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

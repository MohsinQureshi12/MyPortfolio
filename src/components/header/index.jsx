
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/image/Sclogo.svg";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "../../Constant";



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
      <div className="w-full bg-black p-2 relative z-40">
        <div className="container mx-auto flex justify-around items-center">
          {/* Logo */}

          <img className="w-[150px] cursor-pointer" src={logo} alt="Logo" onClick={() => {
            window.location.href = "/";
          }} />

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
              {navLinks?.map((link, index) => (
                <li 
                  key={index} 
                  className={`mx-4 text-white py-4 ${link.isMegaMenu ? 'static' : 'relative'}`}
                  onMouseEnter={() => setDropdownVisible(index)}
                  onMouseLeave={() => setDropdownVisible(null)}
                >
                  {link.dropdown || link.isMegaMenu ? (
                    link.path ? (
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 focus:outline-none"
                        onClick={() => setDropdownVisible(null)}
                      >
                        {link.display}
                        <i className="fa-solid fa-caret-down"></i>
                      </Link>
                    ) : (
                      <button
                        className="flex items-center gap-2 focus:outline-none"
                      >
                        {link.display}
                        <i className="fa-solid fa-caret-down"></i>
                      </button>
                    )
                  ) : (
                    <Link to={link.path}>{link.display}</Link>
                  )}

                  {/* Regular Dropdown Menu */}
                  {link.dropdown && !link.isMegaMenu && dropdownVisible === index && (
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

                  {/* Mega Menu */}
                  {link.isMegaMenu && dropdownVisible === index && (
                    <div className="absolute top-full left-0 w-full  bg-white text-black shadow-2xl border border-gray-100 rounded-b-xl z-50 flex overflow-hidden cursor-default transition-all duration-300">
                      {/* left-1/2 */}
                      <div className="flex-1 p-8 grid grid-cols-4 gap-x-6 gap-y-8 bg-white">
                        {link.megaMenu.columns.map((col, colIdx) => (
                          <div key={colIdx} className="flex flex-col gap-6">
                            <h3 className="text-primary font-bold text-xs tracking-widest uppercase">{col.title}</h3>
                            <div className="flex flex-col gap-5">
                              {col.items.map((item, itemIdx) => {
                                const Icon = item.icon;
                                return (
                                  <Link 
                                    key={itemIdx} 
                                    to={item.path} 
                                    className="flex items-start gap-4 hover:opacity-75 transition-opacity"
                                    onClick={closeAllDropdowns}
                                  >
                                    <div className="p-2.5 bg-blue-50 text-primary rounded-xl shrink-0 flex items-center justify-center">
                                      {Icon && <Icon size={20} strokeWidth={2} />}
                                    </div>
                                    <div className="pt-0.5">
                                      <h4 className="font-bold text-primary text-sm mb-1">{item.label}</h4>
                                      <p className="text-grey-dark font-medium text-xs leading-relaxed max-w-[180px]">{item.desc}</p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {link.megaMenu.featured && (
                        <div className="w-[320px] bg-primary text-white p-8 flex flex-col justify-between shrink-0 relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded text-xs mb-8 text-blue-100 border border-white/20">
                              <i className="fa-solid fa-wand-magic-sparkles text-[10px]"></i> Featured
                            </div>
                            <h3 className="text-[26px] font-bold mb-4 leading-tight pr-4">{link.megaMenu.featured.title}</h3>
                            <p className="text-blue-100/90 text-sm leading-relaxed pr-2">
                              {link.megaMenu.featured.desc}
                            </p>
                          </div>
                          <Link 
                            to={link.megaMenu.featured.path} 
                            className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all relative z-10 mt-12"
                            onClick={closeAllDropdowns}
                          >
                            Explore <i className="fa-solid fa-arrow-right text-xs"></i>
                          </Link>
                          {/* Decorative background element for the featured card */}
                          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/30 rounded-full blur-3xl"></div>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <button
            className="hidden md:block py-2 px-6 bg-[#0E315A] border border-[#0E315A] rounded-full text-white"
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile Navigation) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <img className="w-[150px] cursor-pointer" src={logo} alt="Sidebar Logo" onClick={() => {
            window.location.href = "/";
          }} />
          <button className="text-2xl" onClick={toggleSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="h-auto overflow-y-auto p-4">
          <nav>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.dropdown || link.isMegaMenu ? (
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

                  {/* Sidebar Regular Dropdown */}
                  {link.dropdown && !link.isMegaMenu && dropdownVisible === index && (
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

                  {/* Sidebar Mega Menu Dropdown (Simplified) */}
                  {link.isMegaMenu && dropdownVisible === index && (
                    <div className="mt-2 bg-gray-800 text-white rounded shadow-lg max-h-[60vh] overflow-y-auto">
                      <ul className="py-2">
                        {link.megaMenu.columns.map((col, colIdx) => (
                          <li key={colIdx}>
                            <div className="px-4 py-1 text-xs text-primary font-bold uppercase tracking-wider">{col.title}</div>
                            <ul>
                              {col.items.map((item, itemIdx) => (
                                <li
                                  key={itemIdx}
                                  className="px-6 py-2 hover:bg-gray-700"
                                  onClick={() => {
                                    toggleSidebar(); // Close sidebar
                                    closeAllDropdowns(); // Close dropdown
                                  }}
                                >
                                  <Link to={item.path} className="flex items-center gap-2">
                                    <span className="text-sm">{item.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                        <li>
                          <div className="px-4 py-1 text-xs text-primary font-bold uppercase tracking-wider mt-2">FEATURED</div>
                          <ul>
                            <li
                              className="px-6 py-2 hover:bg-gray-700"
                              onClick={() => {
                                toggleSidebar();
                                closeAllDropdowns();
                              }}
                            >
                              <Link to={link.megaMenu.featured.path} className="flex items-center gap-2 text-primary">
                                <span className="text-sm font-semibold">{link.megaMenu.featured.title}</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
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

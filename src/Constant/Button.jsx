import { Link } from "react-router-dom";

export const ServiceBtn = ({ title, onClick }) => {
  return (
    <button
      className="border border-[#FA5C46] text-[#0E315A] px-4 py-2 rounded-[3px] text-[20px] relative flex items-center group"
      onClick={onClick}
    >
      {title}
      <div className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </button>
  );
};

export const CommonBtn = ({ className, href, title }) => {
  return (
    <>
      <Link to={href} className={className}>
        {title}
      </Link>
    </>
  );
};

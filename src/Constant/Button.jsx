import Arrowleft from "../../public/assets/Icon/Arrowleft";

export const ServiceBtn = ({ title, onClick }) => {
  return (
    <button
      className="border border-[#FA5C46] text-[#0E315A] px-4 py-2 rounded-[3px] text-[20px] relative flex items-center group"
      onClick={onClick}
    >
      {title}
      <div className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300 ml-0 group-hover:ml-2">
        {/* <i className="fa-solid fa-arrow-right"></i> */}
        <Arrowleft/>
      </div>
    </button>
  );
};

export const CommonBtn = ({ className, onClick, title, disabled = false }) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
    >
      {title}
    </button>
  );
};

import headerLogo from "../assets/headerLogo.png";
import "../App.css";
const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-[9px] bg-[#262626] text-white">
        <div className="flex items-center">
          <img
            src={headerLogo}
            alt="Company Logo"
            className="companyLogo h-8 mt-1"
          />
          <h1 className="text-[24px] tracking-tighter">
            envato<span className="text-lime-500 font-thin">market</span>{" "}
          </h1>
        </div>
        <button className="bg-[#7AA93C] hover:bg-green-600 text-white font-normal py-1 px-4 rounded mr-3 mt-1 text-[16px]">
          Buy now
        </button>
      </nav>
    </div>
  );
};

export default Header;

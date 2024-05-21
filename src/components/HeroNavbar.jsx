import companyLogo from "../assets/companyLogo.png";

const HeroNavbar = () => {
  return (
    <div className="hero">
      <header className="flex justify-between items-center p-2 bg-transparent text-white mt-5">
        <div className="flex items-center">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="companyLogo h-13 mt-1 ml-4"
          />
        </div>
        <button className="purchaseButton bg-white hover:bg-transparent hover:text-white text-black font-normal px-9 py-3 rounded mr-3 mt-1 text-[18px]">
          Purchase now
        </button>
      </header>
    </div>
  );
};

export default HeroNavbar;

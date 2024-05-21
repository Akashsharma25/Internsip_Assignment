import { FaArrowRightLong } from "react-icons/fa6";
import wand from "../assets/wand.png";

const MagicWnad = () => {
  return (
    <div className="pt-[80px] flex ml-4">
      <div className="details w-[60%]">
        <p className="text-zinc-50 text-[40px] font-[500] tracking-loose mt-10">
          Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
          Visitors
        </p>
        <p className="text-zinc-300 pt-6 leading-relaxed text-[17px]">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="gradBg flex mt-6 p-4 rounded-2xl text-white text-[20px] px-10">
          Purchase From Envato{" "}
          <span className="mt-[6px] ml-6">
            <FaArrowRightLong />
          </span>
        </button>
      </div>
      <div className="wand ml-60 mt-10">
        <img src={wand} alt="wand" />
      </div>
    </div>
  );
};

export default MagicWnad;

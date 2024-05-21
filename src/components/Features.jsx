import cardf1 from "../assets/cardf1.png";
import cardf2 from "../assets/cardf2.png";
import cardf3 from "../assets/cardf3.png";

const Features = () => {
  return (
    <div>
      <div className="w-[46%] m-auto">
        <p className="text-center text-zinc-50 text-[40px] font-[500] tracking-loose mt-10">
          An All-Round Plugin With Powerful Features
        </p>
        <p className="text-zinc-300 pt-6 leading-relaxed text-[17px] text-center">
          Whether you&prime;re a seasoned web designer or just starting out,
          Motion Art for Elementor seamlessly integrates with the Elementor
          platform, providing you with a seamless and intuitive experience.
        </p>
      </div>
      <div className="cards flex justify-between mb-32 mt-20">
        <div className="card1">
          <img src={cardf1} alt="card" />
          <p className=" text-zinc-200 text-[29px] pl-9">Light Weight</p>
          <p className="text-zinc-300 pt-6 leading-relaxed text-[17px] pl-9 pb-8">
            Motion Art for Elementor is designed to be lightweight.
          </p>
        </div>
        <div className="card1">
          <img src={cardf2} alt="card" />
          <p className=" pl-9 text-zinc-200 text-[29px]">100% Responsive</p>
          <p className="text-zinc-300 pt-6 leading-relaxed text-[17px] pl-9 pb-8">
            Create a consistent visual experience across all devices.
          </p>
        </div>
        <div className="card1">
          <img src={cardf3} alt="card" />
          <p className=" text-zinc-200 text-[29px] pl-9">
            User Friendly Interface
          </p>
          <p className="text-zinc-300 pt-6 leading-relaxed text-[17px] pl-9 pb-8">
            Ensure a smooth experience for both applicants and administrators.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;

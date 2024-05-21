import HeroNavbar from "./HeroNavbar";

const Hero = () => {
  return (
    <div>
      <HeroNavbar />
      <div className="flex pt-[80px]">
        <div className="heroLeft bg-transparent w-[333px] pl-[29.5px] pt-[13px]">
          <p className="text-[20px]">
            <span className="gradientText">Transform</span> <br />{" "}
            <span className="gradientText">Your Website</span>
          </p>
          <p className="pt-3 text-[17px] text-white">
            With Motion Art <br /> Effect
          </p>
        </div>
        <div className="heroMiddle bg-transparent w-[655px] leading-tight pt-3">
          <p className="font-semibold text-zinc-200 text-[68px] font-[Sora] tracking-tight">
            Attract Your <br /> Visitors Attention <br /> With Colorful
          </p>
          <p className="gradientText text-[68px] font-[Sora] tracking-tight">
            Motion Art Effect
          </p>
          <p className=" text-zinc-300 pt-6 leading-relaxed text-[17px]">
            Unleash the power of creativity with Motion Art for Elementor - your{" "}
            <br />
            ultimate solution for seamlessly integrating captivating animations
            into <br /> your website.
          </p>
        </div>
        <div className="heroRight"></div>
      </div>
    </div>
  );
};

export default Hero;

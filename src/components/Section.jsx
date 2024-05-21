import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const Section = () => {
  return (
    <div className="pt-[80px] ml-6">
      <div className="heading text-center text-zinc-50 text-[40px] font-[500] tracking-loose mt-10">
        Apply On Any Section Or Enable <br /> <span>For Whole Page</span>
      </div>
      <div className="imgContainer flex gap-5 mt-20">
        <div className="imgCard">
          <p className=" text-zinc-200 text-[29px]">Apply On Section</p>
          <p className="text-zinc-300 pt-6 leading-relaxed text-[17px]">
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </p>
          <img className="mt-6" src={img1} alt="Section Image" />
        </div>
        <div className="imgCard mt-20">
          <p className="text-zinc-200 text-[29px]">Apply On Page</p>
          <p className="text-zinc-300 pt-6 leading-relaxed text-[17px]">
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </p>
          <img className="mt-6" src={img2} alt="Section Image" />
        </div>
      </div>
    </div>
  );
};

export default Section;

import support from "../assets/support.png";


const Support = () => {
  return (
    <div className="gradientBg mt-[120px] mx-2">
      <div className="w-[35%] m-auto mt-8">
        <p className="text-center text-zinc-200 text-[29px]">
          Supported by All Popular Browsers
        </p>
        <p className="text-zinc-300 pt-6 leading-relaxed text-[17px] ml-6">
          Rest assured, Motion Art is designed to be compatible <br />
          <span className="ml-[85px]"> with all major web browsers.</span>
        </p>
        <img className="mt-10 pb-14" src={support} alt="Browser Icons" />
      </div>
    </div>
  );
};

export default Support;

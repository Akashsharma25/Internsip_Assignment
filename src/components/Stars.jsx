import stars from "../assets/stars.png";
import starsLogo1 from "../assets/starsLogo1.png";
import starsLogo2 from "../assets/starsLogo2.png";
import starsLogo3 from "../assets/starsLogo3.png";

const Stars = () => {
  return (
    <div className="bg-transparent mt-[80px]">
      <p className="text-center text-[22px] text-zinc-200">
        Trusted by thousands of users around the world
      </p>
      <div className="starsCard flex justify-between pt-12">
        <div className="star1 flex pt-2 pl-4">
          <div className="logo">
            <img src={starsLogo1} alt="Logo" />
          </div>
          <div className="details pl-2">
            <div className="stars mt-5">
              <img src={stars} alt="stars" />
            </div>
            <div className="reviewsAndScore mt-5">
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
        <div className="star2 flex pt-2">
          <div className="logo">
            <img src={starsLogo2} alt="Logo" />
          </div>
          <div className="details pl-2">
            <div className="stars mt-5">
              <img src={stars} alt="stars" />
            </div>
            <div className="reviewsAndScore mt-5">
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
        <div className="star3 flex pt-2 pr-6">
          <div className="logo">
            <img src={starsLogo3} alt="Logo" />
          </div>
          <div className="details pl-2">
            <div className="stars mt-5">
              <img src={stars} alt="stars" />
            </div>
            <div className="reviewsAndScore mt-5">
              <p>4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stars;

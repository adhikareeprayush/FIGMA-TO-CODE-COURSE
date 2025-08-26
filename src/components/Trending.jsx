import card1Image from "../assets/trendy/card1.png";
import calendar from "../assets/trendy/calendar.svg";
import location from "../assets/trendy/location.svg";
import user from "../assets/trendy/user.svg";
import card1Flag from "../assets/trendy/card1Flag.png";
import star from "../assets/trendy/star_fill.svg";
import Button from "./Button";

const Trending = () => {
  return (
    <div className="flex flex-col px-[200px] py-20 gap-10">
      <div className="flex flex-col items-center gap-2">
        <span className="text-center font-semibold font-poppins text-[18px] text-primary uppercase">
          Trendy
        </span>
        <h2 className="text-center text-[#181E4B] font-volkhov font-bold text-[50px] capitalize leading-[50px]">
          Our Trending Tour <br /> Packages
        </h2>
      </div>
      <div className="grid grid-cols-3 w-full gap-[50px]">
        <div className="columns-1 flex flex-col gap-2">
          <div className="image-container relative rounded-[10px]">
            <img
              src={card1Image}
              alt=""
              className="h-[300px] rounded-[10px] object-cover"
            />
            <img
              src={card1Flag}
              alt=""
              className="border-4 border-white w-[78px] h-[78px] object-cover rounded-full absolute -bottom-[39px] left-[40px] shadow-md"
            />
          </div>
          <div className="flex gap-3 items-center mt-[30px]">
            <div className="flex items-center gap-2">
              <img src={calendar} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                8 days
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={user} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                25 people going
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <h3 className="text-[29px] text-[#2F2F2F] font-bold font-poppins">
              Switzerland
            </h3>
            <div className="flex items-center gap-1">
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={location} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                Europe
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h5 className="text-primary font-medium text-[29px] font-poppins">
              1,000 $
            </h5>
            <h5 className="text-[#7D7D7D] font-medium text-[22px] font-poppins line-through">
              1,200 $
            </h5>
          </div>
          <p className="font-poppins text-black text-[12px]">
            Nam exercitationem commodi et ducimus quia in dolore animi sit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <Button name={"Explore Now"} classname="w-fit" />
        </div>
        <div className="columns-1 flex flex-col gap-2">
          <div className="image-container relative rounded-[10px]">
            <img
              src={card1Image}
              alt=""
              className="h-[300px] rounded-[10px] object-cover"
            />
            <img
              src={card1Flag}
              alt=""
              className="border-4 border-white w-[78px] h-[78px] object-cover rounded-full absolute -bottom-[39px] left-[40px] shadow-md"
            />
          </div>
          <div className="flex gap-3 items-center mt-[30px]">
            <div className="flex items-center gap-2">
              <img src={calendar} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                8 days
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={user} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                25 people going
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <h3 className="text-[29px] text-[#2F2F2F] font-bold font-poppins">
              Switzerland
            </h3>
            <div className="flex items-center gap-1">
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={location} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                Europe
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h5 className="text-primary font-medium text-[29px] font-poppins">
              1,000 $
            </h5>
            <h5 className="text-[#7D7D7D] font-medium text-[22px] font-poppins line-through">
              1,200 $
            </h5>
          </div>
          <p className="font-poppins text-black text-[12px]">
            Nam exercitationem commodi et ducimus quia in dolore animi sit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <Button name={"Explore Now"} classname="w-fit" />
        </div>
        <div className="columns-1 flex flex-col gap-2">
          <div className="image-container relative rounded-[10px]">
            <img
              src={card1Image}
              alt=""
              className="h-[300px] rounded-[10px] object-cover"
            />
            <img
              src={card1Flag}
              alt=""
              className="border-4 border-white w-[78px] h-[78px] object-cover rounded-full absolute -bottom-[39px] left-[40px] shadow-md"
            />
          </div>
          <div className="flex gap-3 items-center mt-[30px]">
            <div className="flex items-center gap-2">
              <img src={calendar} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                8 days
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={user} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                25 people going
              </span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <h3 className="text-[29px] text-[#2F2F2F] font-bold font-poppins">
              Switzerland
            </h3>
            <div className="flex items-center gap-1">
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
              <img src={star} alt="" className="size-5" />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img src={location} alt="" className="size-5" />
              <span className="text-[#7D7D7D] text-[17px] font-poppins capitalize">
                Europe
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h5 className="text-primary font-medium text-[29px] font-poppins">
              1,000 $
            </h5>
            <h5 className="text-[#7D7D7D] font-medium text-[22px] font-poppins line-through">
              1,200 $
            </h5>
          </div>
          <p className="font-poppins text-black text-[12px]">
            Nam exercitationem commodi et ducimus quia in dolore animi sit
            mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum
            molestias mollitia et corporis praesentium a laudantium internos.
          </p>
          <Button name={"Explore Now"} classname="w-fit" />
        </div>
      </div>
    </div>
  );
};

export default Trending;

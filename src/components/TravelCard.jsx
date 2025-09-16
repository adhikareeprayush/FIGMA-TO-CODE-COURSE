import image from "../assets/hero2.jpg";
import star from "../assets/trendy/star_fill.svg";

const TravelCard = ({ type }) => {
  return (
    <div
      className={`${
        type == 1 ? "bg-white shadow-sm" : ""
      } p-[21px] w-[370px] rounded-[21px] flex flex-col gap-4`}
    >
      <div className="flex flex-col">
        <img
          src={image}
          alt=""
          className={`h-[250px] ${
            type == 1 ? "rounded-t-[21px]" : ""
          } w-full object-cover`}
        />
        <div className="px-[20px] py-2 flex items-center gap-4 justify-center bg-primary text-white font-poppins font-medium text-[14px]">
          <p>12, September 2022</p>
          <p>120+ People</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[#181E4B] font-volkhov text-[34px] font-bold">
          Switzerland
        </h3>
        <p className="text-[#181E4B] font-poppins text-[17px]">
          Qui tempore voluptate qui quia commodi rem praesentium alias et.
        </p>
        <div className="flex items-center gap-3">
          <p className="text-[#262626] font-poppins text-[17px] font-medium">
            1,100$
          </p>
          <div className="flex items-center gap-1">
            <img src={star} alt="" className="size-7" />
            <p>5 Stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;

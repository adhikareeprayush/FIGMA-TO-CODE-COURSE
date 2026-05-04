import star from "../assets/trendy/star_fill.svg";

const TravelCard = ({ tour, featured }) => {
  if (!tour) return null;
  const { image, title, excerpt, dateLabel, peopleLabel, price, stars } = tour;
  return (
    <div
      className={`${
        featured ? "bg-white shadow-sm" : ""
      } flex w-[370px] max-w-full flex-col gap-4 rounded-[21px] p-[21px]`}
    >
      <div className="flex flex-col">
        <img
          src={image}
          alt=""
          className={`h-[250px] w-full object-cover ${
            featured ? "rounded-t-[21px]" : ""
          }`}
        />
        <div className="flex items-center justify-center gap-4 bg-primary px-[20px] py-2 font-poppins text-[14px] font-medium text-white">
          <p>{dateLabel}</p>
          <p>{peopleLabel}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-volkhov text-[34px] font-bold text-[#181E4B]">
          {title}
        </h3>
        <p className="font-poppins text-[17px] text-[#181E4B]">{excerpt}</p>
        <div className="flex items-center gap-3">
          <p className="font-poppins text-[17px] font-medium text-[#262626]">
            {price}
          </p>
          <div className="flex items-center gap-1">
            <img src={star} alt="" className="size-7" />
            <p>{stars} stars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;

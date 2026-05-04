import calendar from "../assets/trendy/calendar.svg";
import location from "../assets/trendy/location.svg";
import user from "../assets/trendy/user.svg";
import star from "../assets/trendy/star_fill.svg";
import Button from "./Button";
import Section from "./Section";
import { trendingTours } from "../data/siteContent";

const TrendingCard = ({ tour, reverse }) => {
  const rowClass = reverse
    ? "flex-row-reverse lg:flex-col"
    : "flex-row lg:flex-col";
  return (
    <div
      className={`cols-span-1 flex ${rowClass} justify-between gap-2 lg:flex-col`}
    >
      <div className="image-container relative w-[40%] rounded-[10px] lg:w-full">
        <img
          src={tour.image}
          alt=""
          className="h-[300px] w-full rounded-[10px] object-cover"
        />
        {tour.flag ? (
          <img
            src={tour.flag}
            alt=""
            className="absolute bottom-0 left-[40px] h-[78px] w-[78px] rounded-full border-4 border-white object-cover shadow-md lg:-bottom-[39px]"
          />
        ) : null}
      </div>
      <div className="flex max-w-[400px] flex-1 flex-col gap-3">
        <div className="mt-[30px] flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <img src={calendar} alt="" className="size-5" />
            <span className="font-poppins text-[17px] capitalize text-[#7D7D7D]">
              {tour.duration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img src={user} alt="" className="size-5" />
            <span className="font-poppins text-[17px] capitalize text-[#7D7D7D]">
              {tour.group}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <h3 className="font-poppins text-[29px] font-bold text-[#2F2F2F]">
            {tour.title}
          </h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={star} alt="" className="size-5" />
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <img src={location} alt="" className="size-5" />
            <span className="font-poppins text-[17px] capitalize text-[#7D7D7D]">
              {tour.region}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <h5 className="font-poppins text-[29px] font-medium text-primary">
            {tour.priceNow}
          </h5>
          <h5 className="font-poppins text-[22px] font-medium text-[#7D7D7D] line-through">
            {tour.priceWas}
          </h5>
        </div>
        <p className="font-poppins text-[12px] text-black">{tour.blurb}</p>
        <Button name={"Explore Now"} classname="w-fit" />
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <Section classname="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-2">
        <span className="text-center font-semibold font-poppins text-[18px] text-primary uppercase">
          Trendy
        </span>
        <h2 className="text-center font-volkhov text-[50px] font-bold capitalize leading-[50px] text-[#181E4B]">
          Our Trending Tour <br /> Packages
        </h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-[50px] lg:grid-cols-3">
        {trendingTours.map((tour, i) => (
          <TrendingCard key={tour.id} tour={tour} reverse={i === 1} />
        ))}
      </div>
    </Section>
  );
};

export default Trending;

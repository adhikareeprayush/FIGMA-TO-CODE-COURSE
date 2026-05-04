import heroImg from "../assets/about/hero.jpg";

const ReusableHero = ({ subTitle = "Read", title = "About Us" }) => {
  return (
    <div className="relative isolate z-0 h-[50vh] min-h-[280px] w-full overflow-hidden sm:h-[60vh] lg:h-[80vh]">
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 z-0 h-full w-full object-cover brightness-[0.65]"
        aria-hidden
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="font-poppins text-sm font-bold uppercase tracking-wide text-[#FFEFEC] sm:text-[18px]">
          {subTitle}
        </span>
        <h1 className="font-Yesteryear text-5xl font-normal leading-none text-white sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[1.05] xl:text-[158px] xl:leading-[223px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ReusableHero;

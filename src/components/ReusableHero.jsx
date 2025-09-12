import heroImg from "../assets/about/hero.jpg";
const ReusableHero = (subTitle, title) => {
  return (
    <div className="h-[80vh] relative w-full overflow-hidden">
      {subTitle && title ? (
        <div className="absolute flex items-center justify-center flex-col gap-2 z-100 h-full w-full">
          <span className="font-poppins text-[18px] font-bold uppercase text-[#FFEFEC]">
            {subTitle ? subTitle : "Read"}
          </span>
          <h1 className="font-Yesteryear text-white text-[158px] leading-[223px] font-normal">
            {title ? title : "About Us"}
          </h1>
        </div>
      ) : (
        <div className="absolute flex items-center justify-center flex-col gap-2 z-100 h-full w-full">
          <span className="font-poppins text-[18px] font-bold uppercase text-[#FFEFEC]">
            Read
          </span>
          <h1 className="font-Yesteryear text-white text-[158px] leading-[223px] font-normal">
            About Us
          </h1>
        </div>
      )}
      <img
        src={heroImg}
        alt=""
        className="absolute h-full w-full object-cover -z-10  brightness-70"
      />
      {/* https://github.com/adhikareeprayush/FIGMA-TO-CODE-COURSE */}
    </div>
  );
};

export default ReusableHero;

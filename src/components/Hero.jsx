import heroImage from "../assets/hero2.jpg";
import Nav from "./Nav";
import curve from "../assets/curve.svg";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <Nav />
      <img
        src={heroImage}
        className="h-full w-full object-cover brightness-67"
      />
      <div className="flex items-center justify-center gap-4 absolute transform bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-[5px] w-[100px] bg-white rounded-full"></div>
        <div className="h-[5px] w-[100px] bg-primary rounded-full"></div>
        <div className="h-[5px] w-[100px] bg-white rounded-full"></div>
      </div>
      <div className="flex flex-col gap-4 absolute z-10 transform top-1/2 -translate-y-1/2 pl-[200px]">
        <img src={curve} alt="" className="w-[80px]" />
        <h1 className="font-poppins text-[58px] font-bold text-white w-[631px] leading-[75px]">
          No matter where you’re going to, we’ll take you there
        </h1>
      </div>
    </div>
  );
};
export default Hero;

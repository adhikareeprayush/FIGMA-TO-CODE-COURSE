import logo1 from "../assets/brands/1.svg";
import logo3 from "../assets/brands/3.svg";

const Brands = () => {
  return (
    <div className="w-full bg-[#F7F7F7] px-[140px] flex items-center justify-between py-8">
      <img src={logo1} className="max-w-[120px] object-fit" />
      <img src={logo1} className="max-w-[120px] object-fit" />
      <img src={logo3} className="max-w-[120px] object-fit" />
      <img src={logo3} className="max-w-[120px] object-fit" />
      <img src={logo1} className="max-w-[120px] object-fit" />
    </div>
  );
};

export default Brands;

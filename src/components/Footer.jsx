import footerImage from "../assets/footer/footer.jpg";
import logo from "../assets/logo-black.svg";
import linkedin from "../assets/footer/logo/linkedin.svg";
import messenger from "../assets/footer/logo/messenger.svg";
import twitter from "../assets/footer/logo/twitter.svg";
import twoo from "../assets/footer/logo/twoo.svg";
import Button from "./Button";
const Footer = () => {
  return (
    <div className="w-full overflow-hidden relative flex items-center justify-center flex-col">
      <img
        src={footerImage}
        alt=""
        className="absolute bottom-0 -right-[200px] h-full opacity-5 -z-10 w-[577px]"
      />
      <div className="flex justify-between w-full px-[200px] py-20">
        <div className="flex flex-col">
          <img src={logo} alt="" className="w-[120px]" />
          <p className="font-manrope font-medium text-[#757095] text-[16px] w-[220px]">
            Travel helps companies manage payments easily.
          </p>
          <div className="flex items-center gap-3 mt-4">
            <img src={linkedin} alt="" className="w-[20px]" />
            <img src={messenger} alt="" className="w-[20px]" />
            <img src={twitter} alt="" className="w-[20px]" />
            <img src={twoo} alt="" className="w-[20px]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-manrope text-[21px] font-bold text-[#181433]">
            Comapny
          </h6>
          <ul className="flex flex-col gap-3">
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              About Us
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Blog
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Careers
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Pricing
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h6 className="font-manrope text-[21px] font-bold text-[#181433]">
            Destinations
          </h6>
          <ul className="flex flex-col gap-3">
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Maldives
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Las Vegas
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Los Angelas
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Toronto
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h6 className="font-manrope text-[21px] font-bold text-[#181433]">
            Join Our Newsletter
          </h6>
          <div className="flex items-center h-[55px] w-[350px] bg-[#EEF] justify-between">
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              className="flex-1 h-full outline-0 focus:border-0 border-0 px-3 placeholder:text-[16px] placeholder:font-manrope placeholder:text-[#181433] placeholder:opacity-20 placeholder:font-medium"
            />
            <Button name={"Subscribe"} classname="" />
          </div>
          <p className="font-manrope text-[16px] font-medium text-[#181433] opacity-50 w-[300px]">
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-[200px] w-full pb-4">
        <hr className="h-[2px] w-full bg-[#E5E5EA]" />
        <p className="text-[#181433] text-[16px] font-manrope font-medium text-center">
          Copyright @ CODEIT 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

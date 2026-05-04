import footerImage from "../assets/footer/footer.jpg";
import logo from "../assets/logo-black.svg";
import linkedin from "../assets/footer/logo/linkedin.svg";
import messenger from "../assets/footer/logo/messenger.svg";
import twitter from "../assets/footer/logo/twitter.svg";
import twoo from "../assets/footer/logo/twoo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative w-full overflow-x-clip">
      <img
        src={footerImage}
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-full max-h-[min(100%,640px)] w-auto max-w-[min(577px,55vw)] opacity-5"
      />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-x-10 gap-y-12 px-6 py-14 sm:px-10 md:grid-cols-2 md:gap-x-12 lg:grid-cols-4">
        <div className="min-w-0 flex flex-col">
          <img src={logo} alt="" className="w-[120px]" />
          <p className="mt-3 max-w-sm font-manrope text-[16px] font-medium leading-relaxed text-[#757095]">
            Travel helps companies manage payments easily.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <img src={linkedin} alt="" className="h-5 w-5" />
            <img src={messenger} alt="" className="h-5 w-5" />
            <img src={twitter} alt="" className="h-5 w-5" />
            <img src={twoo} alt="" className="h-5 w-5" />
          </div>
        </div>
        <div className="min-w-0 flex flex-col gap-4">
          <h6 className="font-manrope text-[21px] font-bold text-[#181433]">
            Company
          </h6>
          <ul className="flex flex-col gap-3">
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
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
        <div className="min-w-0 flex flex-col gap-4">
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
              Los Angeles
            </li>
            <li className="font-manrope text-[16px] font-medium text-[#181433]">
              Toronto
            </li>
          </ul>
        </div>

        <div className="min-w-0 flex flex-col gap-4">
          <h6 className="font-manrope text-[21px] font-bold text-[#181433]">
            Join Our Newsletter
          </h6>
          <div className="flex w-full max-w-[380px] flex-wrap items-stretch bg-[#EEF] sm:h-[55px] sm:flex-nowrap">
            <input
              type="text"
              name="newsletter"
              id="newsletter"
              placeholder="Enter your email"
              className="min-h-[48px] min-w-[12ch] flex-1 border-0 bg-transparent px-3 py-2 outline-0 placeholder:font-manrope placeholder:text-[16px] placeholder:font-medium placeholder:text-[#181433]/20 sm:min-h-0 sm:py-0"
            />
            <div className="flex min-h-[48px] shrink-0 items-center justify-center px-2 py-2 sm:min-h-0 sm:px-1 sm:py-0">
              <Button name={"Subscribe"} classname="" />
            </div>
          </div>
          <p className="max-w-sm font-manrope text-[16px] font-medium leading-relaxed text-[#181433]/50">
            * Will send you weekly updates for your better tour packages.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-2 sm:px-10">
        <hr className="h-px w-full border-0 bg-[#E5E5EA]" />
        <p className="pt-4 text-center font-manrope text-[16px] font-medium text-[#181433]">
          Copyright @ CODEIT 2026. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import Button from "./Button";
import logo from "../assets/logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Nav = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between absolute w-full top-6 left-0 z-10 text-white px-[200px]">
        <img src={logo} className="" />
        <ul className="lg:flex hidden items-center justify-center gap-[50px] text-[17px] font-medium ">
          <li className="relative">
            <a href="#home" className="cursor-pointer">
              Home
            </a>
            <div className="absolute w-[70%] h-[2px] bg-primary transform left-1/2 -translate-x-1/2"></div>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Upcoming Packages</a>
          </li>
        </ul>
        <Button name={"Get Started"} classname="lg:flex hidden" />
        <button
          onClick={() => setIsSidebar((prev) => !prev)}
          className="lg:hidden block"
        >
          Hamburger
        </button>
      </nav>
      {isSidebar && <Sidebar setSidebar={setIsSidebar} />}
    </>
  );
};
export default Nav;

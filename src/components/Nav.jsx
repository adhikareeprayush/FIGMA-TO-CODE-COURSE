import Button from "./Button";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between absolute w-full top-6 left-0 z-10 text-white px-[200px]">
      <img src={logo} className="" />
      <ul className="flex items-center justify-center gap-[50px] text-[17px] font-medium">
        <li className="relative">
          <a href="#home" className="cursor-pointer">
            Home
          </a>
          <div className="absolute w-[70%] h-[2px] bg-primary transform left-1/2 -translate-x-1/2"></div>
        </li>
        <li>About</li>
        <li>Services</li>
        <li>Upcoming Packages</li>
      </ul>
      <Button name={"Get Started"} />
    </nav>
  );
};
export default Nav;

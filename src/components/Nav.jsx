import Button from "./Button";
import logo from "../assets/logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Link } from "react-router-dom";

const navMenus = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "About",
    url: "/about",
  },
  {
    id: 3,
    label: "Packages",
    url: "/packages",
  },
  {
    id: 4,
    label: "Tour Info",
    url: "/tour",
  },
];

const Nav = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [activeMenu, setActiveMenu] = useState(1);
  return (
    <>
      <nav className="flex items-center justify-between absolute w-full top-6 left-0 z-10 text-white px-[200px]">
        <img src={logo} className="" />
        <ul className="lg:flex hidden items-center justify-center gap-[50px] text-[17px] font-medium ">
          {navMenus.map((menu) => (
            <li key={menu.id} className="relative">
              <Link
                onClick={() => setActiveMenu(menu.id)}
                to={`${menu.url}`}
                className="cursor-pointer"
              >
                {menu.label}
              </Link>
              {menu.id == activeMenu && (
                <div className="absolute w-[70%] h-[2px] bg-primary transform left-1/2 -translate-x-1/2"></div>
              )}
            </li>
          ))}
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

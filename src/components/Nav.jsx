import Button from "./Button";
import logo from "../assets/logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const navMenus = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About", url: "/about" },
  { id: 3, label: "Packages", url: "/packages" },
  { id: 4, label: "Tour Info", url: "/tour" },
];

const navLinkClass = ({ isActive }) =>
  `relative cursor-pointer transition-opacity hover:opacity-90 ${
    isActive ? "text-white" : "text-white/90"
  }`;

const Nav = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <>
      <nav className="absolute left-0 top-0 z-[100] flex w-full items-center justify-between px-4 pt-4 text-white sm:px-8 sm:pt-6 lg:px-12 xl:px-24 2xl:px-[200px]">
        <NavLink to="/" className="shrink-0" aria-label="Home">
          <img src={logo} alt="" className="h-8 w-auto sm:h-10" />
        </NavLink>
        <ul className="hidden items-center justify-center gap-8 text-[15px] font-medium lg:flex xl:gap-[50px] xl:text-[17px]">
          {navMenus.map((menu) => (
            <li key={menu.id} className="relative">
              <NavLink
                to={menu.url}
                end={menu.url === "/"}
                className={({ isActive }) =>
                  `${navLinkClass({ isActive })} inline-flex flex-col items-center gap-1`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex flex-col items-center gap-1">
                    <span>{menu.label}</span>
                    {isActive ? (
                      <span className="h-0.5 w-[70%] shrink-0 rounded-full bg-primary" />
                    ) : null}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <NavLink
            {...(isAuthenticated
              ? { to: "/dashboard" }
              : {
                  to: "/login",
                  state: { from: "/dashboard" },
                })}
          >
            <Button
              name={isAuthenticated ? "Dashboard" : "Login"}
              classname=""
            />
          </NavLink>
        </div>
        <button
          type="button"
          onClick={() => setIsSidebar((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/30 bg-white/10 lg:hidden"
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>
      </nav>
      {isSidebar && <Sidebar setSidebar={setIsSidebar} />}
    </>
  );
};

export default Nav;

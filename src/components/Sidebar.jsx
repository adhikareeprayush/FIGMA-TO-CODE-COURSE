import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Sidebar = ({ setSidebar }) => {
  const { isAuthenticated } = useAuth();

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/packages", label: "Packages" },
    { to: "/tour", label: "Tour Info" },
  ];

  return (
    <div className="fixed inset-0 z-[110] flex flex-col bg-[#181433] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <p className="font-poppins text-lg font-semibold">Menu</p>
        <button
          type="button"
          onClick={() => setSidebar(false)}
          className="rounded-lg border border-white/20 px-3 py-2 text-sm font-medium"
        >
          Close
        </button>
      </div>
      <nav className="flex flex-1 flex-col gap-1 px-3 py-6">
        {links.map((l) => (
          <NavLink
            key={l.to + l.label}
            to={l.to}
            end={l.end}
            state={l.state}
            onClick={() => setSidebar(false)}
            className={({ isActive }) =>
              `rounded-xl px-4 py-3 text-lg font-medium ${
                isActive ? "bg-primary text-white" : "hover:bg-white/10"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-5">
        <NavLink
          {...(isAuthenticated
            ? { to: "/dashboard" }
            : {
                to: "/login",
                state: { from: "/dashboard" },
              })}
          onClick={() => setSidebar(false)}
          className="block rounded-xl bg-primary py-3 text-center text-base font-semibold text-white"
        >
          {isAuthenticated ? "Dashboard" : "Login"}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

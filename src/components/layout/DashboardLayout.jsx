import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logo-black.svg";
import { useAuth } from "../../context/AuthContext";

const navItems = [
  { to: "/dashboard", label: "Overview", end: true },
  { to: "/dashboard/bookings", label: "Bookings" },
  { to: "/dashboard/tours", label: "Tours" },
  { to: "/dashboard/analytics", label: "Analytics" },
];

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
    isActive
      ? "bg-primary/10 text-primary"
      : "text-[#4a4a68] hover:bg-black/5 hover:text-[#181433]"
  }`;

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const initials =
    user?.name
      ?.split(/\s+/)
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() ||
    user?.email?.slice(0, 2).toUpperCase() ||
    "?";

  return (
    <div className="min-h-screen w-full bg-[#f4f5fb] font-poppins text-[#181433]">
      <div className="sticky top-0 z-30 flex w-full items-center justify-between border-b border-black/5 bg-white/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <img src={logo} alt="Wanderlust" className="h-8 w-auto" />
        <button
          type="button"
          className="rounded-lg border border-black/10 px-3 py-2 text-sm font-medium"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-expanded={sidebarOpen}
        >
          Menu
        </button>
      </div>

      <div className="flex w-full min-w-0">
        <aside
          className={`fixed inset-y-0 left-0 z-40 w-64 shrink-0 transform border-r border-black/5 bg-white transition-transform lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-full min-h-screen w-full flex-col gap-6 px-4 py-8">
            <div className="hidden px-2 lg:block">
              <img src={logo} alt="Wanderlust" className="h-9 w-auto" />
              <p className="mt-2 text-xs font-medium text-[#757095]">
                Operations console
              </p>
            </div>
            <nav className="flex flex-1 flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={linkClass}
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="h-2 w-2 rounded-full bg-current opacity-60" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className="rounded-xl border border-black/10 px-3 py-2.5 text-center text-sm font-semibold text-[#181433] hover:bg-black/[0.03]"
                onClick={() => setSidebarOpen(false)}
              >
                ← Back to site
              </NavLink>
              <button
                type="button"
                onClick={() => {
                  setSidebarOpen(false);
                  handleLogout();
                }}
                className="rounded-xl bg-primary/10 px-3 py-2.5 text-center text-sm font-semibold text-primary hover:bg-primary/15"
              >
                Log out
              </button>
            </div>
          </div>
        </aside>

        {sidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-black/40 lg:hidden"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex min-h-screen min-w-0 w-full flex-1 flex-col">
          <header className="sticky top-0 z-20 hidden w-full border-b border-black/5 bg-white/80 px-6 py-4 backdrop-blur-md lg:flex lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Dashboard
              </p>
              <h1 className="font-volkhov text-2xl font-bold text-[#181433]">
                Wanderlust Travel
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold text-[#181433] hover:bg-black/[0.04]"
              >
                Log out
              </button>
              <div className="hidden text-right sm:block">
                <p className="text-sm font-semibold">{user?.name}</p>
                <p className="text-xs text-[#757095]">{user?.email}</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                {initials}
              </div>
            </div>
          </header>

          <main className="w-full min-w-0 flex-1 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

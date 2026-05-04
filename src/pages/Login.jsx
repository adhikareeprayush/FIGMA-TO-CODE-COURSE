import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo-black.svg";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    typeof location.state?.from === "string" &&
    location.state.from.startsWith("/") &&
    !location.state.from.startsWith("/login")
      ? location.state.from
      : "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    navigate(from, { replace: true });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#f4f5fb] font-poppins text-[#181433]">
      <header className="border-b border-black/5 bg-white px-6 py-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <img src={logo} alt="Wanderlust" className="h-9 w-auto" />
        </Link>
      </header>
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-8 shadow-lg shadow-black/5">
          <h1 className="font-volkhov text-3xl font-bold text-[#181433]">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-[#757095]">
            Demo only: use any email and a password with at least 4 characters.
          </p>
          <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Email
              <input
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border border-black/10 px-4 py-3 text-base outline-none ring-primary/20 focus:ring-2"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              Password
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border border-black/10 px-4 py-3 text-base outline-none ring-primary/20 focus:ring-2"
                placeholder="••••••••"
              />
            </label>
            {error ? (
              <p className="text-sm font-medium text-red-600" role="alert">
                {error}
              </p>
            ) : null}
            <button
              type="submit"
              className="mt-2 rounded-xl bg-primary py-3 text-center text-base font-semibold text-white shadow-sm shadow-primary/25 hover:opacity-95"
            >
              Continue to dashboard
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-[#757095]">
            <Link to="/" className="font-semibold text-primary hover:underline">
              ← Back to website
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;

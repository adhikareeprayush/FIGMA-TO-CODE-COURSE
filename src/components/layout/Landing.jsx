import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Nav from "../Nav";

const Landing = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Landing;

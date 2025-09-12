import Hero from "../Hero";
import Footer from "../Footer";
import Nav from "../Nav";
const Landing = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Landing;

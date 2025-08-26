import Banner from "./components/Banner";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Holiday from "./components/Holiday";
import Services from "./components/Services";
import Teestimonials from "./components/Teestimonials";
import Trending from "./components/Trending";
import ViewPackages from "./components/ViewPackages";

const App = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Services />
      <ViewPackages />
      <Holiday />
      <Trending />
      <Banner />
      <Teestimonials />
      <Footer />
    </div>
  );
};

export default App;

import Banner from "../components/Banner";
import Brands from "../components/Brands";
import Fast from "../components/Fast";
import Hero from "../components/Hero";
import Holiday from "../components/Holiday";
import Services from "../components/Services";
import Teestimonials from "../components/Teestimonials";
import Trending from "../components/Trending";
import ViewPackages from "../components/ViewPackages";
import Views from "../components/Views";

const Index = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <ViewPackages />
      <Holiday />
      <Trending />
      <Fast />
      <Banner />
      <Views />
      <Teestimonials />
    </>
  );
};

export default Index;

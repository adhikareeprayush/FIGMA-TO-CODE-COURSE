import Brands from "./components/Brands";
import Hero from "./components/Hero";
import Holiday from "./components/Holiday";
import Services from "./components/Services";
import ViewPackages from "./components/ViewPackages";

const App = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Services />
      <ViewPackages />
      <Holiday />
    </div>
  );
};

export default App;

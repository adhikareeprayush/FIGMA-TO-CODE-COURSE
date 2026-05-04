import TravelCard from "./TravelCard";
import { tourPackages } from "../data/siteContent";

const PackagesContainer = () => {
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-6 sm:grid-cols-2 sm:justify-items-center lg:justify-items-stretch">
      {tourPackages.map((tour) => (
        <div key={tour.id} className="flex justify-center sm:block">
          <TravelCard tour={tour} featured={tour.featured} />
        </div>
      ))}
    </div>
  );
};

export default PackagesContainer;

import TravelCard from "./TravelCard";
import { tourPackages } from "../data/siteContent";

const PackagesContainer = () => {
  return (
    <div className="grid grid-cols-2">
      {tourPackages.map((tour) => (
        <div key={tour.id} className="col-span-1">
          <TravelCard tour={tour} featured={tour.featured} />
        </div>
      ))}
    </div>
  );
};

export default PackagesContainer;

import TravelCard from "./TravelCard";

const PackagesContainer = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="col-span-1">
        <TravelCard type={1} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
      <div className="col-span-1">
        <TravelCard type={2} />
      </div>
    </div>
  );
};

export default PackagesContainer;

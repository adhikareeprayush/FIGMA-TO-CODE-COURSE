import bgImage from "../assets/rect.png";
import line from "../assets/Line-1.png";
const Holiday = () => {
  return (
    <div
      className="w-full h-[400px] px-[200px] py-14 flex items-center"
      style={{
        background: `url(${bgImage})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "right",
      }}
    >
      <div className="relative w-fit">
        <h2 className="text-white text-[50px] font-bold font-volkhov w-[600px]">
          Let’s make your next holiday amazing
        </h2>
        <img src={line} alt="" className="absolute right-[120px] w-[150px]" />
      </div>
    </div>
  );
};

export default Holiday;

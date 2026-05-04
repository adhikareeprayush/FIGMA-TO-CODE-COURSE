import bgImage from "../assets/rect.png";
import line from "../assets/Line-1.png";
const Holiday = () => {
  return (
    <div
      className="flex min-h-[280px] w-full items-center bg-cover bg-center px-4 py-10 sm:min-h-[360px] sm:px-8 md:px-12 lg:px-16 xl:px-20"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="relative w-full max-w-3xl">
        <h2 className="font-volkhov text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[50px] lg:leading-tight">
          Let’s make your next holiday amazing
        </h2>
        <img
          src={line}
          alt=""
          className="absolute -bottom-2 right-0 w-24 sm:right-8 sm:w-[120px] md:right-24 md:w-[150px] lg:right-[120px]"
        />
      </div>
    </div>
  );
};

export default Holiday;

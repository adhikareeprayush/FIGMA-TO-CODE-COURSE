import defaultAvatar from "../assets/testimonials/photo.jpg";

const Circle = ({ classname, variant = "image", src = defaultAvatar }) => {
  return (
    <div
      className={`absolute top-1/2 flex h-9 w-9 shrink-0 -translate-y-1/2 transform items-center justify-center rounded-full border-2 border-white bg-white ${classname}`}
    >
      {variant === "image" ? (
        <img
          src={src}
          alt=""
          className="h-full w-full rounded-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-white">
          +
        </div>
      )}
    </div>
  );
};

export default Circle;

const Section = ({ classname, children }) => {
  return (
    <div
      className={`xl:px-[200px] md:px-[60px] sm:px-[40px] px-[20px] lg:py-20 md:py-10 py-5 ${classname}`}
    >
      {children}
    </div>
  );
};

export default Section;

const Section = ({ classname, children }) => {
  return (
    <div
      className={`px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16 xl:py-20 2xl:px-20 ${classname}`}
    >
      {children}
    </div>
  );
};

export default Section;

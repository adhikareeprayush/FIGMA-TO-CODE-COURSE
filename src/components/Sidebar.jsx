const Sidebar = ({ setSidebar }) => {
  return (
    <div className="fixed w-[100vw] h-[100vh] bg-primary flex flex-col items-center justify-center text-white overflow-hidden z-20">
      Sidebar
      <button onClick={() => setSidebar(false)}>Close</button>
    </div>
);
};

export default Sidebar;

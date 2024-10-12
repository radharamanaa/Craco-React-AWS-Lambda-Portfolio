import NavBarListItem from "../molecules/NavBarListItem";

const NavBar = () => {
  return (
    <div className="w-full mx-auto bg-blue-900 sticky top-0 z-50">
      <nav className="text-slate-100 flex flex-wrap md:flex-nowrap justify-between items-center max-w-6xl mx-auto p-4 gap-2">
        <h1
          className="text-2xl font-thin"
          style={{ fontFamily: "Playfair Display" }}
        >
          <a href="#Home">Abhijeet Mishra</a>
        </h1>
        <ul className="flex flex-wrap md:flex-nowrap">
          {["Skills", "Experience", "Projects", "ContactMe"].map((item) => (
            <NavBarListItem key={item} text={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

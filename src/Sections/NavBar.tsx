import NavBarListItem from "../atoms/NavBarListItem";

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
        <div className="flex gap-2">
          <ul className="flex flex-wrap md:flex-nowrap">
            {["Skills", "Experience", "Projects", "ContactMe"].map((item) => (
              <NavBarListItem key={item} text={item} />
            ))}
          </ul>
          <div
            className="hover:text-blue-100 text-white hover:scale-140 tracking-wide hover:underline hover:transition-all hover:scale-105 hover:ease-in"
            style={{ fontFamily: "Poppins" }}
          >
            {/* replace below link with the link of your resume */}
            <a
              href="https://abhijeet-portfolio-personal-build-bucket.s3.ap-south-1.amazonaws.com/public/Abhijeet+-+ATS+Resume+23+Sept+2024.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

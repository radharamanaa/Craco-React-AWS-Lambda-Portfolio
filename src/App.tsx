import "./App.css";
import NavBar from "./Sections/NavBar";
import MainIntro from "./Sections/MainIntro";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import ContactMe from "./Sections/ContactMe";

function App() {
  return (
    <div className="md:max-w-8xl bg-gray-100 mx-auto w-full">
      <NavBar />
      <MainIntro />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </div>
  );
}

export default App;

import projectsData from "../data/projectsData";
import ProjectCard from "../organisms/ProjectCard";
import Heading from "../atoms/Heading";
import Seperator from "../atoms/Seperator";
const Projects = () => {
  return (
    <div className="flex flex-col mx-auto px-4 py-6 mt-4" id="Projects">
      <div className="h-8 bg-transparent w-full"></div>
      <Heading heading="Projects" />
      <Seperator />
      <div className="max-w-8xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-1 gap-4 items-start">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

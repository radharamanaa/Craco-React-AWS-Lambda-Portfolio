import React from "react";
import { ProjectDetails } from "../data/projectsData";
import "@fontsource/lato";
import HeadingInProjects from "../molecules/HeadingInProjects";
import SingleTechnologyInProjects from "../molecules/SingleTechnologyInProjects";
import "@fontsource/roboto"; // Defaults to weight 400

const ProjectCard: React.FC<{ project: ProjectDetails }> = ({ project }) => {
  return (
    <div className="max-w-6xl border grid grid-cols-1 md:grid-cols-[40%_60%] items-center justify-center bg-slate-100 shadow-lg shadow-slate-600 rounded-t-lg">
      <HeadingInProjects project={project} />
      <div className="flex flex-col border border-dashed border-slate-300 p-4">
        <p
          className="text-sm text-slate-600 tracking-wider text-left px-4 mt-8 first-letter:text-2xl first-letter:ml-8"
          style={{ fontFamily: "Lato" }}
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        <div className="w-full flex justify-start mt-8 mb-4 py-4 bg-slate-100 px-8">
          <ul className="flex flex-wrap">
            {project.technologies.map((technology) => (
              <SingleTechnologyInProjects
                key={technology}
                technology={technology}
              />
            ))}
          </ul>
        </div>
        {project.url && (
          <div className="flex justify-end items-end mt-4">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm  tracking-wider px-4 shadow-md first-letter:text-2xl  bg-neutral-800 text-white"
              style={{ fontFamily: "Open Sans" }}
            >
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

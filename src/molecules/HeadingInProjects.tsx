import React from "react";
import { ProjectDetails } from "../data/projectsData";

const HeadingInProjects: React.FC<{ project: ProjectDetails }> = ({
  project,
}) => {
  return (
    <div className="w-full h-full relative flex justify-center  rounded-lg overflow-hidden">
      {project.img && (
        <div className="absolute inset-0 -z-0">
          <img
            src={project.img}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center justify-center  w-full py-8 rounded-t-md shadow-xl z-0">
        <div className="bg-slate-100/80 flex items-end w-full justify-center py-6">
          <div className="text-6xl font-semibold text-black tracking-wider ">
            {project.name.substring(0, 1)}
          </div>
          <div className="text-xl font-thin text-black">
            {project.name.substring(1)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingInProjects;

import React from "react";

const SingleTechnologyInProjects: React.FC<{ technology: string }> = ({
  technology,
}) => {
  return (
    <span
      key={technology}
      className="text-xs text-white w-min px-4 py-1 rounded-xl bg-blue-600 text-slate-40 tracking-wider text-left 
              mt-2 mr-2"
    >
      {technology}
    </span>
  );
};

export default SingleTechnologyInProjects;

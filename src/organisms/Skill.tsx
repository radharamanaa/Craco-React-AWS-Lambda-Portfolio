import React from "react";
import Rating from "../molecules/Rating";

interface SkillProps {
  name: string;
  level: string;
  icon: string;
  rating: number;
  description: string;
}

const Skill: React.FC<SkillProps> = ({ description, level, name, rating }) => {
  return (
    <div
      className="flex mt-8 flex-col w-72 items-center justify-center z-20
    bg-slate-600 rounded-md shadow-md  relative transition-transform hover:scale-105 hover:ease-in cursor-pointer"
    >
      <div
        className="text-xs font-thin self-start mt-1 absolute -left-2 top-0 z-10
      bg-lime-600 text-white px-1 py-1 rounded-sm shadow-lg"
      >
        {level}
      </div>
      <div className="flex items-end justify-center bg-blue-800 w-full py-8 h-32">
        <div className="text-4xl text-slate-100 mt-[0.25px]">
          {name.substring(0, 1)}
        </div>
        <div className="text-2xl font-thin text-slate-100">
          {name.substring(1)}
        </div>
      </div>
      <div
        className="text-sm text-slate-200 tracking-wider text-left w-11/12 mt-8 min-h-48"
        style={{ fontFamily: "Lato" }}
      >
        {description}
      </div>
      <div className="w-full flex justify-start mt-8 mb-4 ml-4">
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default Skill;

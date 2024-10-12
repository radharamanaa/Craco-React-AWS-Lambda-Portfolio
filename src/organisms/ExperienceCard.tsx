import React from "react";
import "@fontsource/poppins";
import "@fontsource/roboto"; // Defaults to weight 400
import { Experience } from "../data/experienceData";
export interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <div className="max-w-6xl bg-slate-100rounded-t-lg ">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 mx-auto max-w-6xl text-center md:text-left">
        <div className="flex  text-center md:w-full md:h-full  bg-white/30 items-center justify-center  border-slate-300">
          <img
            src={experience.urlForTitle}
            alt={experience.title}
            className="w-64 h-64 md:w-full md:h-full object-cover grayscale-[25%] blur-xs"
          />
        </div>
        <div className="flex flex-col mt-4 w-11/12 py-12">
          <div
            className="text-4xl font-thin text-center text-neutral-800 underline decoration-1 underline-offset-4 mb-1"
            style={{ fontFamily: "Playfair Display" }}
          >
            {experience.title}
          </div>
          <div className="text-sm flex justify-center gap-8 text-slate-600">
            <div className="ml-2">
              <span className=" font-semibold">{experience.company}</span>,{" "}
              {experience.location}, {experience.start} - {experience.end}
            </div>
          </div>

          <div
            className="text-sm w-9/12 mx-auto text-center text-slate-600 py-4 tracking-tight first-letter:text-2xl first-letter:ml-8"
            dangerouslySetInnerHTML={{ __html: experience.description }}
            style={{ fontFamily: "Lato" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

import allExperiences from "../data/experienceData";
import HeadingForExperience from "../molecules/HeadingForExperience";
import ExperienceCard from "../organisms/ExperienceCard";
const Experience = () => {
  return (
    <div className="pb-8 mt-8 " id="Experience">
      <div className="h-8 bg-transparent w-full"></div>
      <div className="flex flex-col mx-auto px-4 py-6 mt-4 ">
        <HeadingForExperience heading="Experience" totalExp={"8+ Years"} />
        <div className="h-[1px] w-9/12 mx-auto bg-slate-600" />
        <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-1 gap-4 items-start">
          {allExperiences.map((exp, index) => (
            <ExperienceCard experience={exp} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

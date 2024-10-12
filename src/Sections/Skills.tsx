import skillsData from "../data/skillsData";
import Skill from "../organisms/Skill";
import Heading from "../molecules/Heading";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="h-8 bg-transparent w-full"></div>
      <div className="mx-auto bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-50 w-full rounded-md mt-8">
        <Heading heading="Skills" />
        <div className="h-[1px] w-8/12 mx-auto bg-slate-600" />
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 justify-center gap-4 mx-auto w-8/12 max-w-6xl">
          {skillsData.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
              rating={skill.rating}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

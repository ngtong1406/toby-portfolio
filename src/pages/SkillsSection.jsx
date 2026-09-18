import TechTagLarge from "../components/TechTagLarge";
import techStack from "../data/tech_stack.json";

const SkillsSection = () => {
    return (
        <>
            <h1 className="section-heading">technical-skills</h1>
            <hr className="section-break" />
            <div className="grid grid-cols-2 gap-20 my-20">
                {Object.entries(techStack).map(([category, items]) => (
                    <div key={category} className="col-span-1 space-y-5">
                        <div className="text-5xl text-white font-semibold">
                            {category}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <TechTagLarge
                                    key={skill.name}
                                    icon={skill.icon}
                                    text={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SkillsSection;

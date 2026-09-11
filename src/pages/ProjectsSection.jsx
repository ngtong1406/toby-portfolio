import GitHubIcon from "../assets/icons/github.svg?react";
import TechTagSmall from "../components/TechTagSmall";
import { SquareMousePointer } from "lucide-react";

import projects from "../data/projects.json";

const ProjectsSection = ({ onSelectProject }) => {
    const handleClick = (project) => {
        onSelectProject(project);
    };

    return (
        <div className="section-container">
            <div className="w-full inline-flex items-center justify-between">
                <h1 className="section-heading">my-most-proud-projects</h1>
                <div className="ml-auto mr-4">More on GitHub:</div>
                <a href="https://github.com/ngtong1406" target="_blank">
                    <GitHubIcon className="w-10 h-10 text-white" />
                </a>
            </div>
            <hr className="section-break" />
            {Object.entries(projects)
                .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // descending from largest to smallest
                .map(([year, projectList]) => (
                    <div
                        key={year}
                        className="my-10 flex flex-col opacity-75 hover:opacity-100"
                    >
                        {projectList.map((project, index) => {
                            const isFirst = index === 0;
                            const isLast = index === projectList.length - 1;

                            return (
                                <div
                                    key={project.title}
                                    className="w-full grid grid-cols-10 gap-12 items-center"
                                >
                                    {/* Year */}
                                    <div className="col-span-1 text-5xl text-white font-semibold">
                                        {isFirst ? year : ""}
                                    </div>

                                    {/* Middle Hyphen */}
                                    <div className="col-span-1 flex items-center justify-center">
                                        {isFirst && (
                                            <span className="w-full h-px bg-border-main" />
                                        )}
                                    </div>

                                    {/* Project List */}
                                    <div className="col-span-8 flex flex-col">
                                        <div
                                            onClick={() => handleClick(project)}
                                            className="grid grid-cols-5 py-6 pl-4 items-center gap-6 hover:bg-border-sub-light cursor-pointer transition-colors"
                                        >
                                            <div className="col-span-3 space-y-2">
                                                <div>
                                                    <span className="text-white font-semibold text-xl">
                                                        {project.title}
                                                    </span>
                                                    <span className="text-secondary">
                                                        {" "}
                                                        • {project.period}
                                                    </span>
                                                </div>
                                                <ul className="inline-flex flex-wrap items-center gap-2">
                                                    {project.tech_stack.map(
                                                        (tech) => (
                                                            <li key={tech}>
                                                                <TechTagSmall
                                                                    text={tech}
                                                                />
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>

                                            {/* Contributors */}
                                            <div className="col-span-1 inline-flex flex-wrap items-center gap-4">
                                                <span className="text-secondary">
                                                    Contributor(s):
                                                </span>
                                                <div className="flex items-center -space-x-2">
                                                    {project.contributors
                                                        .slice(0, 2)
                                                        .map((c, i) => (
                                                            <div
                                                                key={i}
                                                                title={`${c.name} (${c.role})`}
                                                                className="w-10 h-10 rounded-full bg-white border border-red-600 shrink-0"
                                                            />
                                                        ))}
                                                </div>
                                                {project.contributors.length >
                                                    2 && (
                                                    <span className="text-secondary -ml-2">
                                                        +
                                                        {project.contributors
                                                            .length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="col-span-1 mx-auto text-secondary hover:text-white">
                                                <SquareMousePointer className="w-6 h-6" />
                                            </div>
                                        </div>

                                        {/* Hyphen separated between projects in the same year */}
                                        {!isLast && (
                                            <hr className="section-break my-0" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
        </div>
    );
};

export default ProjectsSection;

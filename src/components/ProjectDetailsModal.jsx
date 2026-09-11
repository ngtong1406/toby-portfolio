import { useEffect } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

import GitHubIcon from "../assets/icons/github.svg?react";
import TechTagSmall from "./TechTagSmall";
import ContributorTag from "./ContributorTag";
import ContactLinkSmall from "./ContactLinkSmall";

const ProjectDetailsModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (project) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [project, onClose]);

    return (
        <AnimatePresence>
            {project && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-xs"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 10 }}
                        transition={{ duration: 0.1, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative z-10 w-full max-w-7xl h-200 bg-primary border border-border-main overflow-hidden"
                    >
                        <div className="w-full h-full grid grid-cols-5">
                            {project.image && (
                                <div className="relative col-span-2 h-full overflow-hidden border-r border-border-main">
                                    <img
                                        src={project.image}
                                        alt=""
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <div
                                className={
                                    (project.image
                                        ? "col-span-3"
                                        : "col-span-5") +
                                    " h-full flex flex-col min-h-0 p-7"
                                }
                            >
                                <div className="flex items-center justify-between shrink-0">
                                    <div className="text-2xl">
                                        <span className="text-white font-semibold">
                                            {project.title}
                                        </span>
                                        <span className="text-date-gray">
                                            {" "}
                                            — {project.period}
                                        </span>
                                    </div>
                                    {project.other.length > 0 &&
                                        project.other[0].text ===
                                            "Live Demo" && (
                                            <a
                                                href={project.other[0].link}
                                                target="_blank"
                                                className=""
                                            >
                                                <GitHubIcon className="w-10 h-10 text-white" />
                                            </a>
                                        )}
                                </div>

                                <hr className="section-break shrink-0" />

                                <div className="h-4/5 overflow-y-auto overscroll-contain">
                                    <p className="text-white mb-2">
                                        The Problem:
                                    </p>
                                    <p className="mb-4">
                                        {project.the_problem}
                                    </p>
                                    <p className="text-white mb-2">
                                        Project Highlights:
                                    </p>
                                    <p className="mb-4">
                                        {project.project_highlights}
                                    </p>
                                    <p className="text-white mb-2">
                                        Tech stack:
                                    </p>
                                    <ul className="inline-flex flex-wrap items-center gap-2 mb-4">
                                        {project.tech_stack.map((entry) => {
                                            return (
                                                <li>
                                                    <TechTagSmall
                                                        text={entry}
                                                    />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <p className="text-white mb-2">
                                        Contributor(s):
                                    </p>
                                    <ul className="flex flex-wrap items-center gap-3 mb-4">
                                        {project.contributors.map(
                                            (contributor) => {
                                                return (
                                                    <li className="col-span-1">
                                                        <ContributorTag
                                                            contributor={
                                                                contributor
                                                            }
                                                        />
                                                    </li>
                                                );
                                            },
                                        )}
                                    </ul>
                                </div>

                                <hr className="section-break shrink-0" />

                                <div></div>
                                {/* <ContactLinkSmall /> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;

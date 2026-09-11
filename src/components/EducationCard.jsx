import {
    MapPin,
    GraduationCap,
    Paperclip,
    ExternalLink,
    Trophy,
} from "lucide-react";

import academicTranscript from "/files/Nguyen_Tong_Tran_unisa_transcript.pdf";
import unisaLogo from "../assets/photos/unisa-logo.png";
import marryatvilleLogo from "../assets/photos/marryatville-logo.jpg";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";

export default function EducationCard() {
    const [expandedId, setExpandedId] = useState("");

    const toggleExpand = (id) => {
        setExpandedId((prevId) => (prevId === id ? null : id));
    };

    const getMapUrl = (schoolName, locationName) => {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(schoolName + " " + locationName)}`;
    };

    const educations = [
        {
            id: "unisa",
            logo: unisaLogo,
            school: "University of South Australia (UniSA)",
            degree: "Bachelor of Information Technology (Software Development)",
            period: "Mar. 2023 — Nov. 2025",
            details: [
                {
                    icon: (
                        <MapPin className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: (
                        <a
                            href={getMapUrl(
                                "University of South Australia (UniSA)",
                                "Mawson Lakes, SA",
                            )}
                            target="_blank"
                            className="edu-card-link"
                        >
                            Mawson Lakes, SA
                            <ExternalLink className="w-5 h-5 text-secondary" />
                        </a>
                    ),
                },
                {
                    icon: (
                        <Trophy className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: (
                        <span>
                            Honours/Awards: 2023-25 University Merit Awards
                        </span>
                    ),
                },
                {
                    icon: (
                        <GraduationCap className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: <span>GPA: 6.17 / 7.0</span>,
                },
                {
                    icon: (
                        <Paperclip className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: (
                        <a
                            href={academicTranscript}
                            target="_blank"
                            className="edu-card-link"
                        >
                            View academic transcript
                            <ExternalLink className="w-5 h-5 text-secondary" />
                        </a>
                    ),
                },
            ],
        },
        {
            id: "marryatville",
            logo: marryatvilleLogo,
            school: "Marryatville High School",
            degree: "Y10-12 Full-time Student",
            period: "2020 — 2022",
            details: [
                {
                    icon: (
                        <MapPin className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: (
                        <a
                            href={getMapUrl(
                                "Marryatville High School",
                                "Marryatville, SA",
                            )}
                            target="_blank"
                            className="edu-card-link"
                        >
                            Marryatville, SA
                            <ExternalLink className="w-5 h-5 text-secondary" />
                        </a>
                    ),
                },
                {
                    icon: (
                        <Trophy className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: <span>Honours/Awards: 2022 SACE Merit Award</span>,
                },
                {
                    icon: (
                        <GraduationCap className="w-5 h-5 text-secondary shrink-0" />
                    ),
                    content: <span>ATAR: 90.00 / 99.95</span>,
                },
            ],
        },
    ];

    return (
        <div className="w-full flex flex-col gap-4">
            {educations.map((entry) => {
                const isOpen = expandedId === entry.id;

                return (
                    <div
                        key={entry.id}
                        onClick={() => toggleExpand(entry.id)}
                        className={`w-full py-6 px-10 bg-border-sub-light border hover:border-secondary border-border-main duration-100 rounded-none hover:cursor-pointer ${
                            isOpen ? "bg-border-subbody" : "bg-border-sub-light"
                        }`}
                    >
                        <div
                            className={
                                "w-full flex items-center justify-start gap-7 select-none "
                            }
                        >
                            <img
                                className="w-18 h-18 rounded-full object-cover"
                                src={entry.logo}
                                alt=""
                            />
                            <div>
                                <div className="font-semibold text-white">
                                    {entry.school}
                                </div>
                                <div className="text-white">{entry.degree}</div>
                                <div>{entry.period}</div>
                            </div>
                            <ChevronRight
                                className={
                                    "ml-auto duration-100 " +
                                    (isOpen ? "rotate-90" : "")
                                }
                            />
                        </div>

                        <AnimatePresence initial={false}>
                            {isOpen && entry.details && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <ul className="flex flex-col pt-4 gap-2">
                                        {entry.details.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    {item.icon}
                                                    <span>{item.content}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
            {/* <div
                onClick={onClick}
                className={
                    "w-full flex items-center justify-start gap-7 py-6 px-10 bg-border-sub-light border border-border-main hover:border-secondary hover:cursor-pointer select-none duration-100 " +
                    (expand ? "pb-72 bg-border-subbody" : "")
                }
            >
                <img
                    className="w-18 h-18 rounded-full object-cover"
                    src={unisaLogo}
                    alt=""
                />
                <div>
                    <div className="font-semibold text-white">
                        University of South Australia (UniSA)
                    </div>
                    <div className="text-white">
                        Bachelor of Information Technology (Software
                        Development)
                    </div>
                    <div>Mar. 2023 &mdash; Nov. 2025</div>
                </div>
                <ChevronRight
                    className={
                        "ml-auto duration-100 " + (expand ? "rotate-90" : "")
                    }
                />
            </div>
            <div className="w-full flex items-center justify-start gap-7 py-6 px-10 bg-border-sub-light border border-border-main hover:border-secondary hover:cursor-pointer select-none">
                <img
                    className="w-18 h-18 rounded-full object-cover"
                    src={marryatvilleLogo}
                    alt=""
                />
                <div>
                    <div className="font-semibold text-white">
                        Marryatville High School
                    </div>
                    <div className="text-white">Y10-12 Full-time Student</div>
                    <div>2020 &mdash; 2022</div>
                </div>
                <ChevronRight className="ml-auto" />
            </div> */}
        </div>
    );
}

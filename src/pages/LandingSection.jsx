import tobyDrawing from "../assets/photos/toby-drawing.jpeg";

import ContactLinkSmall from "../components/ContactLinkSmall";

import AtIcon from "../assets/icons/at.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import GitHubIcon from "../assets/icons/github.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import { useState, useEffect } from "react";
import { ExternalLink, MapPin } from "lucide-react";

import { getMapUrl } from "../utilities/googleMapLink";
import StatusBadgeSmall from "../components/StatusBadgeSmall";
import EducationCard from "../components/EducationCard";

const LandingSection = () => {
    const TOBY_BIRTH_YEAR = 2004;
    const [age, setAge] = useState("");

    useEffect(() => {
        const updateAge = () => {
            const currentYear = new Date().getFullYear();
            setAge(currentYear - TOBY_BIRTH_YEAR);
        };

        updateAge();
    }, []);

    const [time, setTime] = useState("");
    useEffect(() => {
        const updateClock = () => {
            const options = {
                timeZone: "Australia/Adelaide",
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            };

            const formattedTime = new Date().toLocaleTimeString("en-US", options);
            setTime(formattedTime.toLowerCase());
        };

        updateClock();

        const timerId = setInterval(updateClock, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <>
            <div className="w-full grid grid-cols-2 gap-10">
                <div className="col-span-1 flex items-center gap-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={tobyDrawing}
                            alt="A drawing of Toby."
                        />
                    </div>

                    <div className="flex flex-col h-full">
                        <div className="text-xl">WEB PORTFOLIO // TOBY TRAN, {age} YEARS OLD</div>
                        <a
                            href="https://www.instagram.com/knchrls/"
                            target="_blank"
                            className="font-serif text-white font-bold text-5xl hover:underline"
                        >
                            Software Developer
                        </a>
                        <div className="mt-auto space-y-3">
                            <ul className="flex items-center gap-2">
                                <li>
                                    <StatusBadgeSmall
                                        text={"Open to opportunities"}
                                        disabled={false}
                                    />
                                </li>
                                <li>
                                    <StatusBadgeSmall
                                        text={"On-site / Hybrid / Remote"}
                                        disabled={false}
                                    />
                                </li>
                            </ul>
                            <div className="inline-flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                <span>
                                    Based in{" "}
                                    <a
                                        className="text-white inline-flex items-center gap-2 hover:underline underline-offset-4"
                                        href={getMapUrl("Adelaide, South Australia")}
                                    >
                                        <span>Adelaide, South Australia</span>
                                        <ExternalLink className="w-5 h-5" />
                                    </a>{" "}
                                    ({time || "Loading time..."})
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 flex justify-end">
                    <div className="w-fit grid grid-cols-1 items-center justify-center gap-2">
                        <ContactLinkSmall
                            SvgIcon={AtIcon}
                            label="Email address"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=ngtong1406@gmail.com&su=Inquiry+from+Portfolio"
                        />
                        <ContactLinkSmall
                            SvgIcon={LinkedInIcon}
                            label="LinkedIn"
                            href="https://www.linkedin.com/in/tobytran/"
                        />
                        <ContactLinkSmall
                            SvgIcon={GitHubIcon}
                            label="GitHub"
                            href="https://github.com/ngtong1406"
                        />
                        <ContactLinkSmall
                            SvgIcon={InstagramIcon}
                            label="Instagram"
                            href="https://www.instagram.com/knchrls/"
                        />
                    </div>
                </div>

                <div className="col-span-1">
                    <h1 className="section-heading">about-me</h1>
                    <hr className="section-break" />
                    <div className="section-text mb-4">
                        <p>
                            Hey there 👋, my name is Toby Tran. I’m a software developer recently
                            graduated from{" "}
                            <span className="section-text-highlight">
                                the University of South Australia (UniSA)
                            </span>{" "}
                            with{" "}
                            <span className="section-text-highlight">a GPA of 6.17 / 7.00</span>,
                            majoring in Software Development. Currently based in{" "}
                            <span className="section-text-highlight">Adelaide, SA</span>, I am{" "}
                            <span className="section-text-highlight">
                                actively looking for opportunities
                            </span>{" "}
                            to contribute to real-world projects.
                        </p>
                        <p>
                            I take great pride in building solutions that are
                            <span className="section-text-highlight">
                                {" "}
                                not only functional but are also underpinned by clean, robust
                                architecture
                            </span>
                            . My serious commitment to applying best practices through SOLID
                            Principles and System Design ensures scalability, prevents technical
                            debts, and contributes to timely, high-quality deliverables.
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <h1 className="section-heading">educational-background-🇦🇺</h1>
                    <hr className="section-break" />
                    <EducationCard />
                </div>
            </div>
        </>
    );
};

export default LandingSection;

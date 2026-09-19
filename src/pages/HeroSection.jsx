import { useState } from "react";
import tobyDrawing from "../assets/photos/toby-drawing.jpeg";
import { useEffect } from "react";

import { getMapUrl } from "../utilities/googleMapLink";

import AtIcon from "../assets/icons/at.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import GitHubIcon from "../assets/icons/github.svg?react";

import resume from "/files/Resume_Toby_Tran_Software_Developer.pdf";
import StatusBadgeSmall from "../components/StatusBadgeSmall";
import { ExternalLink } from "lucide-react";
import ContactLinkSmall from "../components/ContactLinkSmall";
import ContactLinkResume from "../components/ContactLinkResume";
import { MapPin } from "lucide-react";

const HeroSection = () => {
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

            const formattedTime = new Date().toLocaleTimeString(
                "en-US",
                options,
            );
            setTime(formattedTime.toLowerCase());
        };

        updateClock();

        const timerId = setInterval(updateClock, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <section className="w-full min-h-screen flex items-center justify-center">
            <div className="h-45 flex items-center gap-18">
                <div className="h-full flex items-center gap-8">
                    <div className="w-40 h-40 rounded-full overflow-hidden shrink-0">
                        <img
                            className="w-full h-full object-cover"
                            src={tobyDrawing}
                            alt="A drawing of Toby."
                        />
                    </div>

                    <div className="flex flex-col justify-start h-full">
                        <div className="text-xl">
                            WEB PORTFOLIO // TOBY TRAN, {age} YEARS OLD
                        </div>
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
                                        href={getMapUrl(
                                            "Adelaide, South Australia",
                                        )}
                                        target="_blank"
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
                    <ContactLinkResume label="View resume" href={resume} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

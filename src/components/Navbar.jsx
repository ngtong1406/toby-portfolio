import { useEffect } from "react";
import { useState } from "react";
import ExternalLinkButton from "./ExternalLinkButton";

import resume from "/files/Resume_Toby_Tran_Software_Developer.pdf";

const Navbar = () => {
    const initialWidth = window.innerWidth;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const onWindowScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", onWindowScroll);

        return () => {
            window.removeEventListener("scroll", onWindowScroll);
        };
    }, [initialWidth]);

    const [activeItem, setActiveItem] = useState();
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const options = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveItem(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
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
        <div
            className={
                "nav-container " +
                (isScrolled &&
                    "shadow-xl border-b border-b-border-main transition-shadow")
            }
        >
            <nav className="w-full inline-flex justify-between align-middle">
                <div className="w-1/3 space-y-1">
                    <div className="text-white font-bold">
                        TOBY TRAN, PORTFOLIO.
                    </div>
                    <div className="inline-flex justify-between space-x-2 align-bottom">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <title>map-pin-sharp</title>
                            <path
                                fill="none"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.9628 15.3333L12 22L6.0372 15.3333C4.7253 13.8666 4 11.9678 4 10C4 5.5817 7.5817 2 12 2C16.4183 2 20 5.5817 20 10C20 11.9678 19.2747 13.8666 17.9628 15.3333ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.3431 10.3431 7 12 7C13.6569 7 15 8.3431 15 10Z"
                            />
                        </svg>
                        <span>
                            Adelaide, AU // {time ? time : "retrieving time..."}
                        </span>
                    </div>
                </div>
                <ul className="w-1/3 nav-list">
                    <li
                        className={
                            "nav-list-item " +
                            (activeItem === "about" &&
                                "text-white underline underline-offset-4")
                        }
                    >
                        <a href="#about">ABOUT</a>
                    </li>
                    <li
                        className={
                            "nav-list-item " +
                            (activeItem === "projects" &&
                                "text-white underline underline-offset-4")
                        }
                    >
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li
                        className={
                            "nav-list-item " +
                            (activeItem === "skills" &&
                                "text-white underline underline-offset-4")
                        }
                    >
                        <a href="#skills">SKILLS</a>
                    </li>
                </ul>
                <div className="w-1/3 flex items-center justify-end">
                    <ExternalLinkButton
                        href={resume}
                        textToDisplay={"view my resume"}
                    />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

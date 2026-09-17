import { useEffect } from "react";
import { useState } from "react";
import resume from "/files/Resume_Toby_Tran_Software_Developer.pdf";

// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

import GitHubIcon from "../assets/icons/github.svg?react";
import { ExternalLink } from "lucide-react";

import ExternalLinkButton from "../components/ExternalLinkButton";

const Navbar = ({ onNavigate, sectionRefs }) => {
    const initialWidth = window.innerWidth;
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const onWindowScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", onWindowScroll);

        return () => {
            window.removeEventListener("scroll", onWindowScroll);
        };
    }, [initialWidth]);

    const [activeItem, setActiveItem] = useState();
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const matchedKey = Object.keys(sectionRefs).find(
                        (key) => sectionRefs[key].current === entry.target,
                    );
                    if (matchedKey) setActiveItem(matchedKey);
                }
            });
        }, options);

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => observer.disconnect();
    }, [sectionRefs]);

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

    const navItems = [
        { label: "About", key: "about" },
        { label: "Projects", key: "projects" },
        { label: "Skills", key: "skills" },
        { label: "Contact", key: "contact" },
    ];

    return (
        <>
            <header className="w-full py-10 px-30">
                <div className="w-full inline-flex justify-between items-center">
                    <div className="w-1/3 space-y-1">
                        <div className="text-white font-bold">
                            TOBY TRAN, PORTFOLIO.
                        </div>
                        <div className="inline-flex items-center space-x-2 text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                            >
                                <title>map-pin-sharp</title>
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17.9628 15.3333L12 22L6.0372 15.3333C4.7253 13.8666 4 11.9678 4 10C4 5.5817 7.5817 2 12 2C16.4183 2 20 5.5817 20 10C20 11.9678 19.2747 13.8666 17.9628 15.3333ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.3431 10.3431 7 12 7C13.6569 7 15 8.3431 15 10Z"
                                />
                            </svg>
                            <span>
                                Adelaide, AU // {time || "retrieving time..."}
                            </span>
                        </div>
                    </div>

                    <ul className="w-1/3 nav-list">
                        {navItems.map((item) => (
                            <li key={item.key}>
                                <button
                                    type="button"
                                    onClick={() => onNavigate(item.key)}
                                    className={
                                        "nav-list-item " +
                                        (activeItem === item.key &&
                                            "text-white")
                                    }
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="w-1/3 flex items-center justify-end">
                        <ExternalLinkButton
                            href={resume}
                            textToDisplay="view my resume"
                        />
                    </div>
                </div>
            </header>

            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <AnimatePresence>
                    {isScrolled && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto flex items-center gap-4"
                        >
                            <div className="py-2 px-3 bg-border-sub rounded-md border border-border-main shadow-xl">
                                <nav className="w-full">
                                    <ul className="flex items-center justify-between gap-4">
                                        {navItems.map((item) => (
                                            <li key={item.key}>
                                                <button
                                                    onClick={() =>
                                                        onNavigate(item.key)
                                                    }
                                                    className={
                                                        "py-2 px-5 font-semibold hover:text-white hover:cursor-pointer hover:-translate-y-0.5 transition-all " +
                                                        (activeItem ===
                                                            item.key &&
                                                            "text-white")
                                                    }
                                                >
                                                    {item.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            <a
                                href="https://github.com/ngtong1406"
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 aspect-square p-2 bg-white rounded-md shadow-xl hover:cursor-pointer hover:-translate-y-1 transition-all"
                            >
                                <GitHubIcon className="w-9 h-9 text-primary" />
                            </a>

                            <a
                                href={resume}
                                target="_blank"
                                rel="noreferrer"
                                className="shrink-0 py-4 px-5 text-primary bg-white rounded-md shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:underline hover:underline-offset-4 transition-all flex items-center gap-2"
                            >
                                <span>View resume</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;

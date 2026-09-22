import { useEffect, useState } from "react";
import resume from "/files/Resume_Toby_Tran_Software_Developer.pdf";
import GitHubIcon from "../assets/icons/github.svg?react";
import { ExternalLink } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";

const Navbar = ({ onNavigate, sectionRefs }) => {
    const initialWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const [navBarShown, setNavBarShown] = useState(false);
    const [scrollPromptShown, setScrollPromptShown] = useState(true);
    useEffect(() => {
        const onWindowScroll = () => {
            setNavBarShown(window.scrollY > (4 / 5) * windowHeight);
            setScrollPromptShown(window.scrollY < 20);
        };

        window.addEventListener("scroll", onWindowScroll);

        return () => {
            window.removeEventListener("scroll", onWindowScroll);
        };
    }, [initialWidth, windowHeight]);

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

    const navItems = [
        { label: "About", key: "about" },
        { label: "Projects", key: "projects" },
        { label: "Skills", key: "skills" },
        { label: "Contact", key: "contact" },
    ];

    return (
        <>
            <header className="fixed top-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 pointer-events-auto">
                <AnimatePresence>
                    {navBarShown && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="pointer-events-auto flex items-center gap-4"
                        >
                            <div className="py-2 px-3 bg-border-sub/80 backdrop-blur-md rounded-md border border-border-main shadow-xl">
                                <nav className="w-full">
                                    <ul className="flex items-center justify-between gap-4">
                                        {navItems.map((item) => (
                                            <li key={item.key}>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onNavigate(item.key)
                                                    }
                                                    className={
                                                        "py-2 px-5 font-semibold hover:text-white hover:cursor-pointer hover:-translate-y-0.5 transition-all " +
                                                        (activeItem === item.key
                                                            ? "text-white"
                                                            : "text-secondary")
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
                                className="shrink-0 py-4 px-5 text-primary bg-white rounded-md shadow-xl hover:cursor-pointer hover:-translate-y-1 hover:underline hover:underline-offset-4 transition-all flex items-center gap-2 font-medium"
                            >
                                <span>View resume</span>
                                <ExternalLink className="w-5 h-5" />
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <AnimatePresence>
                {scrollPromptShown && (
                    <motion.div
                        initial={{ opacity: 1, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.1 }}
                        className="fixed bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-bounce inline-flex items-center gap-2"
                    >
                        <span>Scroll for more!</span>
                        <ArrowDown className="w-5 h-5" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

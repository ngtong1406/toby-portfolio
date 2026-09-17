import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingSection from "./pages/LandingSection.jsx";
import EducationSection from "./pages/EducationSection.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import SkillsSection from "./pages/SkillsSection.jsx";
import ContactSection from "./pages/ContactSection.jsx";
import { useState } from "react";
import ProjectDetailsModal from "./components/ProjectDetailsModal.jsx";
// import ScrollUp from "./pages/ScrollUp.jsx";
import { useRef } from "react";

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const sectionRefs = {
        about: aboutRef,
        projects: projectsRef,
        skills: skillsRef,
        contact: contactRef,
    };

    const scrollToSection = (key) => {
        sectionRefs[key]?.current?.scrollIntoView();
    };

    return (
        <>
            {/* <ScrollUp /> */}
            <Navbar onNavigate={scrollToSection} sectionRefs={sectionRefs} />
            <div className="min-h-screen mx-30">
                <main>
                    <section ref={aboutRef} className="section-container">
                        <LandingSection />
                        <EducationSection />
                    </section>

                    <section ref={projectsRef} className="section-container">
                        <ProjectsSection onSelectProject={setSelectedProject} />
                    </section>

                    <section ref={skillsRef} className="section-container">
                        <SkillsSection />
                    </section>

                    <section ref={contactRef}>
                        <ContactSection />
                    </section>
                </main>

                <Footer />

                <ProjectDetailsModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
        </>
    );
};

export default App;

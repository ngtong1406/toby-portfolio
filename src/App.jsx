import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingSection from "./pages/LandingSection.jsx";
import EducationSection from "./pages/EducationSection.jsx";
import ProjectsSection from "./pages/ProjectsSection.jsx";
import SkillsSection from "./pages/SkillsSection.jsx";
import ContactSection from "./pages/ContactSection.jsx";
import { useState } from "react";
import ProjectDetailsModal from "./components/ProjectDetailsModal.jsx";

const App = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div className="min-h-screen mx-30">
            <Navbar />

            <main>
                <LandingSection />
                <EducationSection />
                <ProjectsSection onSelectProject={setSelectedProject} />
                <SkillsSection />
                <ContactSection />
            </main>

            <Footer />

            <ProjectDetailsModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default App;

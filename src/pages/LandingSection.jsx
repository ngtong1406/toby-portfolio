import EducationCard from "../components/EducationCard";

const LandingSection = () => {
    return (
        <>
            <div className="w-full grid grid-cols-2 gap-10">
                <div className="col-span-1">
                    <h1 className="section-heading">about-me</h1>
                    <hr className="section-break" />
                    <div className="section-text mb-4">
                        <p>
                            Hey there 👋, my name is Toby Tran. I’m a software
                            developer recently graduated from{" "}
                            <span className="section-text-highlight">
                                the University of South Australia (UniSA)
                            </span>{" "}
                            with{" "}
                            <span className="section-text-highlight">
                                a GPA of 6.17 / 7.00
                            </span>
                            , majoring in Software Development. Currently based
                            in{" "}
                            <span className="section-text-highlight">
                                Adelaide, SA
                            </span>
                            , I am{" "}
                            <span className="section-text-highlight">
                                actively looking for opportunities
                            </span>{" "}
                            to contribute to real-world projects.
                        </p>
                        <p>
                            I take great pride in building solutions that are
                            <span className="section-text-highlight">
                                {" "}
                                not only functional but are also underpinned by
                                clean, robust architecture
                            </span>
                            . My serious commitment to applying best practices
                            through SOLID Principles and System Design ensures
                            scalability, prevents technical debts, and
                            contributes to timely, high-quality deliverables.
                        </p>
                    </div>
                </div>

                <div className="col-span-1">
                    <h1 className="section-heading">
                        educational-background-🇦🇺
                    </h1>
                    <hr className="section-break" />
                    <EducationCard />
                </div>
            </div>
        </>
    );
};

export default LandingSection;

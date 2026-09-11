import landingPhoto from "../assets/photos/photo_3.jpg";
import ContactLinkSmall from "../components/ContactLinkSmall";

import AtIcon from "../assets/icons/at.svg?react";
import LinkedInIcon from "../assets/icons/linkedin.svg?react";
import GitHubIcon from "../assets/icons/github.svg?react";
import InstagramIcon from "../assets/icons/instagram.svg?react";
import { useState } from "react";

const LandingSection = () => {
    const TOBY_BIRTH_YEAR = 2004;
    const [age, setAge] = useState("");

    useState(() => {
        const updateAge = () => {
            const currentYear = new Date().getFullYear();
            setAge(currentYear - TOBY_BIRTH_YEAR);
        };

        updateAge();
    }, []);

    return (
        <div className="w-full mt-5 grid grid-cols-7 gap-17">
            <div className="col-span-4 flex flex-col justify-between">
                <div>
                    <h1 className="section-heading">about-me</h1>
                    <hr className="section-break" />
                    <div className="section-text mb-4">
                        <p>
                            I’m a <b>software developer</b> recently graduated
                            from{" "}
                            <b>the University of South Australia (UniSA)</b>{" "}
                            with <b>a GPA of 6.17 / 7.00</b>, majoring in
                            Software Development.
                        </p>
                        <p>
                            Currently based in <b>Adelaide, SA</b>, I am{" "}
                            <b>actively looking for opportunities</b> to
                            contribute to real-world projects.
                        </p>
                        <p>
                            I take great pride in building solutions that are
                            not only functional but are also underpinned by
                            clean, robust architecture. My serious commitment to
                            applying best practices through SOLID Principles and
                            System Design ensures scalability, prevents
                            technical debts, and contributes to timely,
                            high-quality deliverables.
                        </p>
                    </div>
                    <hr className="section-break" />
                    <div className="w-full flex flex-wrap gap-3">
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
                <div className="flex flex-col items-end">
                    <div className="text-2xl">
                        GRAD. SOFTWARE DEV // {age} YEARS OLD
                    </div>
                    <a
                        href="https://www.instagram.com/knchrls/"
                        target="_blank"
                        className="font-serif text-white font-bold text-9xl hover:underline"
                    >
                        @knchrls
                    </a>
                </div>
            </div>
            <img className="col-span-3" src={landingPhoto} alt="" />
        </div>
    );
};

export default LandingSection;

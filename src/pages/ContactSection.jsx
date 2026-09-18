import { ExternalLink } from "lucide-react";
import contacts from "../data/contacts.json";
import ContactLinkLarge from "../components/ContactLinkLarge";

const ContactSection = () => {
    const getGridColsClass = (length) => {
        if (length % 2 === 0) return "grid-cols-2";
        if (length % 3 === 0) return "grid-cols-3";
        return "grid-cols-2";
    };

    return (
        <>
            <h1 className="section-heading">contact-details</h1>
            <hr className="section-break" />
            <div className="w-full my-20 flex flex-col items-center gap-4">
                <div className="text-2xl text-white font-semibold font-serif">
                    Let's build something{" "}
                    <span className="underline underline-offset-4">
                        together
                    </span>
                    .
                </div>
                <div>
                    Whether you have a specific role in mind or just want to
                    discuss a project,{" "}
                    <a
                        className="inline-flex items-center gap-2 text-white hover:underline hover:underline-offset-4"
                        target="_blank"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ngtong1406@gmail.com&su=Inquiry+from+Portfolio"
                    >
                        <span>drop me an email</span>
                        <ExternalLink className="w-4 h-4 shrink-0 -translate-y-0.5" />
                    </a>
                    — I'm always open to new ideas. 👍
                </div>
                <div className="w-full grid grid-cols-5 gap-4 my-10">
                    <hr className="col-span-2 section-break" />
                    <div className="col-span-1 text-center">
                        Otherwise, you can easily find me on...
                    </div>
                    <hr className="col-span-2 section-break" />
                </div>
                <div
                    className={
                        "w-1/4 grid gap-4 " + getGridColsClass(contacts.length)
                    }
                >
                    {contacts.map((contact) => (
                        <div key={contact.type} className="col-span-1">
                            <ContactLinkLarge
                                icon={contact.icon}
                                type={contact.type}
                                username={contact.username}
                                link={contact.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ContactSection;

import { ExternalLink } from "lucide-react";
import contacts from "../data/contacts.json";
import ContactLinkLarge from "../components/ContactLinkLarge";

const ContactSection = () => {
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
                <div className="text-center mt-10 mb-3">
                    Otherwise, you can easily find me on:
                </div>
                <div
                    className={
                        "w-120 grid gap-4 " +
                        (contacts.length <= 4 ? "grid-cols-2" : "grid-cols-3")
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

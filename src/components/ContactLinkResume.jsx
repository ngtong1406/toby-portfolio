import { Paperclip } from "lucide-react";

const ContactLinkResume = ({ label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="rounded-md inline-flex gap-2.5 items-center px-3 h-10 text-primary bg-white border border-border-main hover:underline hover:underline-offset-4 duration-100"
        >
            <Paperclip className="w-6 h-6" />
            {label}
        </a>
    );
};

export default ContactLinkResume;

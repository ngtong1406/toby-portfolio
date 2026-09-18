const ContactLinkSmall = ({ SvgIcon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="inline-flex gap-2.5 text-sm items-center border border-border-main hover:border-secondary hover:underline hover:underline-offset-4 px-3 h-10 text-white duration-100"
        >
            <SvgIcon className="w-5 h-5" />
            {label}
        </a>
    );
};

export default ContactLinkSmall;

// eslint-disable-next-line no-unused-vars
const ContactLinkSmall = ({ SvgIcon, label, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="inline-flex gap-2.5 text-sm items-center border border-border-main hover:border-secondary hover:underline hover:underline-offset-4 px-3 h-10 text-white duration-100"
        >
            <SvgIcon className="w-7 h-7" />
            {label}
        </a>
    );
};

export default ContactLinkSmall;

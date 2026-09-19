const ContactLinkLarge = ({ icon, type, username, link }) => {
    return (
        <a
            href={link}
            target="_blank"
            className="rounded-md w-auto max-h-50 overflow-hidden px-1 py-3 text-white bg-border-subbody border border-border-main hover:border-secondary hover:bg-border-sub hover:-translate-y-1 transition-all duration-100 grid grid-cols-5 items-center gap-2"
        >
            <img
                src={`https://api.iconify.design/${icon}.svg`}
                alt={type + " " + username}
                className="col-span-2 w-11 h-11 shrink-0 mx-auto"
                loading="lazy"
            />
            <div className="col-span-3 flex flex-col">
                <div className="font-semibold">{type}</div>
                <div>{username}</div>
            </div>
        </a>
    );
};

export default ContactLinkLarge;

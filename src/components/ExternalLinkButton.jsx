const ExternalLinkButton = ({ textToDisplay, href }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="py-1.75 px-6 text-primary bg-white flex items-center gap-2 border border-white hover:bg-primary hover:text-white hover:underline hover:underline-offset-4 duration-100"
        >
            <span>{textToDisplay.toUpperCase()}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
            >
                <title>external</title>
                <path
                    fill="currentColor"
                    d="M19.5 4.5h-7V6h4.44l-5.97 5.97l1.06 1.06L18 7.06v4.44h1.5zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5z"
                />
            </svg>
        </a>
    );
};

export default ExternalLinkButton;

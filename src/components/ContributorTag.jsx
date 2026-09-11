const ContributorTag = ({ contributor }) => {
    return (
        <a
            href={contributor.link ? contributor.link : "#"}
            target="_blank"
            className={
                "w-full flex items-center justify-start gap-4 bg-border-subbody py-2 px-6 border border-border-sub duration-100 " +
                (contributor.link
                    ? "hover:bg-border-sub-light hover:border-border-main"
                    : "pointer-events-none")
            }
        >
            <div className="w-10 h-10 rounded-full bg-white shrink-0"></div>
            <div className="flex-1 min-w-0 flex flex-col">
                <div className="text-white">{contributor.name}</div>
                <hr className="h-px my-px border-0 bg-border-main" />
                <div className="text-secondary">{contributor.role}</div>
            </div>
        </a>
    );
};

export default ContributorTag;

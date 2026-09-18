import React from "react";

const TechTagLarge = ({ icon = null, text }) => {
    return (
        <div className="flex items-center gap-2.5 px-3 py-1.5 border border-border-main bg-border-subbody text-white hover:cursor-default hover:-translate-y-1 transition-all">
            {icon && (
                <img
                    src={`https://api.iconify.design/${icon}.svg`}
                    alt={text}
                    className="w-6 h-6 shrink-0"
                    loading="lazy"
                />
            )}
            <span>{text}</span>
        </div>
    );
};

export default TechTagLarge;

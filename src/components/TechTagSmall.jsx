import React from "react";

const TechTagSmall = ({ text }) => {
    return (
        <div className="rounded-md py-px px-2 bg-border-subbody border border-border-main text-white hover:cursor-pointer hover:underline underline-offset-4">
            #{text}
        </div>
    );
};

export default TechTagSmall;

import React from "react";

const StatusBadgeSmall = ({ text, disabled }) => {
    return (
        <div className="py-px px-2 rounded-md inline-flex items-center gap-2 bg-border-subbody border border-border-main text-white">
            <span className={!disabled ? "text-green-500" : "text-red-500"}>●</span>
            <span>{text}</span>
        </div>
    );
};

export default StatusBadgeSmall;

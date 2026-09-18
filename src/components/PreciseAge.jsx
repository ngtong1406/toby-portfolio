import { useEffect, useState } from "react";

const PreciseAge = () => {
    const BIRTH_TIMESTAMP = new Date("2004-06-14T00:00:00Z").getTime();
    const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.2425;

    const [fractionalAge, setFractionalAge] = useState("");

    useEffect(() => {
        const updateAge = () => {
            const now = Date.now();
            const age = ((now - BIRTH_TIMESTAMP) / MS_PER_YEAR).toFixed(14);
            setFractionalAge(age);
        };

        const timerId = setInterval(updateAge, 50);

        return () => clearInterval(timerId);
    }, [BIRTH_TIMESTAMP, MS_PER_YEAR]);

    return (
        <span className="tabular-nums text-sm text-border-main">
            {fractionalAge}
        </span>
    );
};

export default PreciseAge;

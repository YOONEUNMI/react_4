import moment from "moment";
import React, { useEffect, useState } from "react";

export const Footer = (): JSX.Element => {
    const [date, setDate] = useState<number>();

    useEffect(() => {
        const changeDate = new Date();
        const timeEv = setInterval(() => {
            changeDate.setSeconds(changeDate.getSeconds() + 1);
            setDate(changeDate.getTime());
        }, 1000);

        return () => {
            clearInterval(timeEv);
        };
    }, [date]);

    return <div className="footer">⏰{moment(date).format("YYYY-MM-DD HH:mm:ss")}</div>;
};

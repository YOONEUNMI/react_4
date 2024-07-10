import React, { useEffect } from "react";
import ThemeContext from "../theme";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { ThemeState } from "../store/theme/themeSlice";

export const Theme = ({ children }: { children: React.ReactNode }) => {
    const { themeInfo } = useSelector(
        (state: RootState) =>
            ({
                themeInfo: state.themeInfo,
            } as { themeInfo: ThemeState })
    );

    return <ThemeContext.Provider value={{ theme: themeInfo.theme }}>{children}</ThemeContext.Provider>;
};

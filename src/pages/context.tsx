import React, { useContext, useState } from "react";
import ThemeContext from "../theme";
import { useDispatch } from "react-redux";
import { setTheme } from "../store/theme/themeSlice";

export const ContextEx = (): JSX.Element => {
    const { theme } = useContext(ThemeContext);
    const dispath = useDispatch();
    return (
        <div>
            <h2>테마 바꾸기 </h2>
            <h3>적용된 테마 : {theme} (default: dark)</h3>
            <div className="wrapper">
                <input
                    type="checkbox"
                    id="switch"
                    checked={theme === "dark"}
                    onChange={(e) => {
                        console.log(e.target.checked);
                        dispath(setTheme(e.target.checked ? "dark" : "light"));
                    }}
                />
                <label htmlFor="switch" className="switch_label">
                    <span className="onf_btn"></span>
                </label>
            </div>
        </div>
    );
};

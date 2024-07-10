import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
    theme: "dark" | "light";
}

const initialState: ThemeState = {
    theme: "dark",
};

export const ThemeSlice = createSlice({
    name: "ThemeInfo",
    initialState: initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<"dark" | "light">) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;

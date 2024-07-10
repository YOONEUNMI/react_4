/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable  @typescript-eslint/no-explicit-any */
import { applyMiddleware, combineReducers, compose, createStore, Store } from "redux";

import userReducer, { UserState } from "./user/userSlice";
import themeReducer, { ThemeState } from "./theme/themeSlice";

export interface ApplicationState {
    userInfo: UserState | undefined;
    ThemeSlice: ThemeState | undefined;
}
export const reducers = {
    userInfo: userReducer,
    themeInfo: themeReducer,
};

const configureStore = (initialState?: ApplicationState): Store => {
    const rootReducer = combineReducers({
        ...reducers,
    });

    const enhancers = [];
    const windowIfDefined = typeof window === "undefined" ? null : (window as any);
    if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
    }

    return createStore(rootReducer, initialState, compose(applyMiddleware()));
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

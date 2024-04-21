import { combineReducers, configureStore } from "@reduxjs/toolkit/react"
import {qouteReducer} from "./slice.ts";

const rootReducer = combineReducers({
    quote: qouteReducer
})

export const store = configureStore(
    {
        reducer: rootReducer
    }
)

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

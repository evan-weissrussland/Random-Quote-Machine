import {AppRootStateType} from "./store.ts";

export const quoteItems = (state:AppRootStateType) => state.quote.items
export const currentQuote = (state:AppRootStateType) => state.quote.currentQuote
export const colorsState = (state:AppRootStateType) => state.quote.colors
export const currentColor = (state:AppRootStateType) => state.quote.currentColor
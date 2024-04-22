import { createSlice, PayloadAction } from "@reduxjs/toolkit/react"

const initialState = {
    items: [
        {id:1, text:'one text', author:'me author', color:'green'},
        {id:2, text:'two text', author:'dick', color:'yellowgreen'},
        {id:3, text:'tree text', author:'card', color:'orange'},
        {id:4, text:'four text', author:'bilbo', color:'gray'},
        {id:5, text:'five text', author:'gicci', color:'red'},
    ],
    currentQuote:1
}

export type InitialStateType = typeof initialState

export const slice = createSlice({
    name:'quote',
    initialState: initialState,
    reducers: {
        setQuote(state, action:PayloadAction<{idQuote:number}>) {
            state.currentQuote = action.payload.idQuote
        }
    },
})

export const qouteReducer = slice.reducer
export const {setQuote} = slice.actions
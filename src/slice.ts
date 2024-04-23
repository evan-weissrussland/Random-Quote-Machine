import {createSlice, PayloadAction} from "@reduxjs/toolkit/react"

const initialState = {
    items: [
        {
            id: 1,
            text: 'Our lives begin to end the day we become silent about things that matter.',
            author: 'Martin Luther King Jr.',
            color: 'green'
        },
        {id: 2, text: 'Fall seven times and stand up eight.', author: 'Japanese Proverb', color: 'yellowgreen'},
        {
            id: 3,
            text: 'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
            author: 'Aristotle',
            color: 'orange'
        },
        {id: 4, text: 'Life shrinks or expands in proportion to one’s courage.', author: 'Anais Nin', color: 'gray'},
        {
            id: 5,
            text: 'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
            author: 'Plato',
            color: 'red'
        },
    ],
    currentQuote: 1,
    colors: [
        {id: 1, color: 'green'},
        {id: 2, color: 'yellowgreen'},
        {id: 3, color: 'orange'},
        {id: 4, color: 'gray'},
        {id: 5, color: 'red'}
    ],
    currentColor: 1,
}

export type InitialStateType = typeof initialState

export const slice = createSlice({
    name: 'quote',
    initialState: initialState,
    reducers: {
        setQuote(state, action: PayloadAction<{ idQuote: number }>) {
            state.currentQuote = action.payload.idQuote
        },
        setColor(state, action: PayloadAction<{ idColor: number }>) {
            state.currentColor = action.payload.idColor
        }
    },
})

export const qouteReducer = slice.reducer
export const {setQuote, setColor} = slice.actions
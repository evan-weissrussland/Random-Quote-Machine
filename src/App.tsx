import {IconsTelegram, IconsTwitter} from './Icons.tsx'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store.ts";
import {InitialStateType, setQuote} from "./slice.ts";


export const App = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.quote)
    const quote = state.items.find(i => i.id === state.currentQuote)
const changeQuoteHandler = () => {
        const id = state.items.length - state.currentQuote !== 0 ? state.currentQuote + 1 : 1
    dispatch(setQuote({idQuote:id}))
}

    return (
        <main style={{backgroundColor:`${quote!.color}`, color:`${quote!.color}`}}>
            <section>
                <h1>
                    {quote!.text}
                </h1>
                <p>-{quote!.author}</p>
                <footer>
                    <div className={'icons'}>
                        <a title={'aaaaaaaaaaaa'} style={{backgroundColor:`${quote!.color}`}} href="#">
                            <IconsTwitter/>
                        </a>
                        <a title={'ssssssssss'} style={{backgroundColor:`${quote!.color}`}} href="#">
                            <IconsTelegram/>
                        </a>
                    </div>
                    <button style={{backgroundColor:`${quote!.color}`}} onClick={changeQuoteHandler}>New quote</button>
                </footer>
            </section>
        </main>
    )
}

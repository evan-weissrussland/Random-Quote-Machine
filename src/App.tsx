import {IconsTelegram, IconsTwitter} from './Icons.tsx'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store.ts";
import {InitialStateType, setQuote} from "./slice.ts";
import {useSpring, animated} from '@react-spring/web'

export const App = () => {

    const dispatch = useDispatch()
    const state = useSelector<AppRootStateType, InitialStateType>(state => state.quote)
    const quote = state.items.find(i => i.id === state.currentQuote)

    const [props, api] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 1000}
    }),[quote]);

    const changeQuoteHandler = () => {
        api.start({
            from: {opacity: 1},
            to: {opacity: 0},
            }
        )
        const id = state.items.length - state.currentQuote !== 0 ? state.currentQuote + 1 : 1
        setTimeout(()=>{dispatch(setQuote({idQuote: id}))},1000)
    }

    return (
        <main style={{backgroundColor: `${quote!.color}`, color: `${quote!.color}`}}>
            <section>
                <animated.div style={props}>
                    <h1>{quote!.text}</h1>
                    <p>-{quote!.author}</p>
                </animated.div>

                <footer>
                    <div className={'icons'}>
                        <a title={'aaaaaaaaaaaa'} style={{backgroundColor: `${quote!.color}`}} href="#">
                            <IconsTwitter/>
                        </a>
                        <a title={'ssssssssss'} style={{backgroundColor: `${quote!.color}`}} href="#">
                            <IconsTelegram/>
                        </a>
                    </div>
                    <button style={{backgroundColor: `${quote!.color}`}} onClick={changeQuoteHandler}>New quote</button>
                </footer>
            </section>
        </main>
    )
}

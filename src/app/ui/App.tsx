import {IconsTelegram, IconsTwitter} from '../../common/components/Icons.tsx'
import {useDispatch, useSelector} from "react-redux";
import {setColor, setQuote} from "../model/slice.ts";
import {animated, useSpring} from '@react-spring/web'
import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons/faQuoteLeft";
import {colorsState, currentColor, currentQuote, quoteItems} from "../model/app-selectors.ts";
import {getItemFromState} from "../../common/utils/function.ts";

export const App = () => {
    const dispatch = useDispatch()


    const items = useSelector(quoteItems)
    const currentQuoteId = useSelector(currentQuote)
    const stateColor = useSelector(colorsState)
    const currentColorId = useSelector(currentColor)

    const quote = getItemFromState(items, currentQuoteId)

    const colorItem = getItemFromState(stateColor, currentColorId)

    const refT = useRef({col: 'black', dur: 500})

    const [propsText, apiText] = useSpring(() => ({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: 500}
    }), [currentQuoteId]);

    const [propsBackgroundColor] = useSpring(() => ({
        from: {backgroundColor: refT.current.col},
        to: {backgroundColor: colorItem!.color},
        config: {duration: refT.current.dur}
    }), [currentColorId]);

    const changeQuoteHandler = () => {
        apiText.start({
                from: {opacity: 1},
                to: {opacity: 0},
            }
        )
        const id = items.length - currentQuoteId !== 0 ? currentQuoteId + 1 : 1
        const idColor = stateColor.length - currentColorId !== 0 ? currentColorId + 1 : 1
        setTimeout(() => {
            dispatch(setQuote({idQuote: id}))
        }, 500)
        dispatch(setColor({idColor: idColor}))
    }

    useEffect(() => {
        refT.current.col = colorItem!.color
        refT.current.dur = 1000
    }, [currentColorId])

    return (
        <animated.main style={{...propsBackgroundColor, color: `${quote!.color}`}}>
            <section>
                <animated.div style={propsText}>
                    <h1>
                        <FontAwesomeIcon size={'xl'} className={'iconQuote'} icon={faQuoteLeft}/>
                        <span>{quote!.text}</span>
                    </h1>
                    <p>-{quote!.author}</p>
                </animated.div>

                <footer>
                    <div className={'icons'}>
                        <animated.a title={'aaaaaaaaaaaa'} style={propsBackgroundColor} href="#">
                            <IconsTwitter/>
                        </animated.a>
                        <animated.a title={'ssssssssss'} style={propsBackgroundColor} href="#">
                            <IconsTelegram/>
                        </animated.a>
                    </div>
                    <animated.button style={propsBackgroundColor} onClick={changeQuoteHandler}>New quote {import.meta.env.VITE_APP_KEY}
                    </animated.button>
                </footer>
            </section>
        </animated.main>
    )
}

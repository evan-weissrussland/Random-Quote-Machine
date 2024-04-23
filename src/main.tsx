import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/ui/index.scss'
import {App} from "./app/ui/App.tsx";
import {Provider} from "react-redux";
import {store} from "./app/model/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)

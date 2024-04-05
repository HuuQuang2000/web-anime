import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import router from './routes';
import {Provider} from 'react-redux'
import './index.css'
import {store} from './stores';
import Notify from "./components/Notify";

const NotifyContext = createContext<any>(null);

export default NotifyContext;

const App = ({children}: any) => {
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(600);
    const [type, setType] = useState("success");
    return <>
        <NotifyContext.Provider value={{
            time, setTime ,show, setShow, type, setType
        }}>
            <Notify/>
        </NotifyContext.Provider>
        {children}
    </>
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <React.StrictMode>
            <App>
                <RouterProvider router={router}/>
            </App>
        </React.StrictMode>
    </Provider>
)

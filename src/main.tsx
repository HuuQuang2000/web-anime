import React, {createContext, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import {
    RouterProvider,
} from "react-router-dom";
import router from './routes';
import {Provider} from 'react-redux'
import './index.css'
import {store} from './stores';
import Notify from "./components/Notify";



const NotifyContext = createContext<NotifyProps>({
    show: false,
    message: "",
    type: "",
    time: 0,
    setTime: () => {},
    setShow: () => {},
    setType: () => {},
    setMessage: () => {},
});

interface NotifyProps {
    show: boolean;
    message: string;
    type: string;
    time: number;
    setTime: (time: number) => void;
    setShow: (show: boolean) => void;
    setType: (type: string) => void;
    setMessage: (message: string) => void;
}


// const NotifyContext = createContext<any>(null);
// const UserContext = createContext<any>(null);

export {NotifyContext};
const App = ({children}: any) => {
    const [show, setShow] = useState(false);
    const [time, setTime] = useState(600);
    const [type, setType] = useState("success");
    const [message, setMessage] = useState("success");

    let [username, setUsername] = useState("");
    const [uuID, setUuID] = useState(0);
    const [pathAvatar, setPathAvatar] = useState("");

    return (
        <div className="h-screen w-screen overflow-hidden ">
                <NotifyContext.Provider value={{
                    time, setTime ,show, setShow, type, setType , message, setMessage
                }}>
                        <Notify/>
                        {children}
                </NotifyContext.Provider>
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
            <App>
                <RouterProvider router={router}/>
            </App>
    </Provider>
)

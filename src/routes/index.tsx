import {createBrowserRouter} from "react-router-dom";
import LayoutMain from "../layouts/LayoutMain";
import CounterPage from "../pages/counter/CounterPage";
import RegisterLogin from "../pages/register-login/RegisterLogin";
import RegisterStep01 from "../pages/register-login/register/RegisterStep01";
import RegisterStep02 from "../pages/register-login/register/RegisterStep02";
import Login from "../pages/register-login/login/Login";
import Discover from "../pages/discover/Discover";
import LayoutFooter from "../layouts/LayoutFooter";
import Photo from "../pages/photo/Photo";
import DefaultLayout from "../layouts/LayoutDefaut";
import Search from "../pages/search/Search";
import Profile from "../pages/profile/Profile";
import Chat from "../pages/chat/Chat";
import LayoutFooter2 from "../layouts/LayoutFooter2";
import Room from "../pages/chat/room/Room";
import Profile2 from "../pages/profile/Profile2";
const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain/>, // app load layer
        children: [
            {
                path: "/contacts",
                element: <div>Hello world!</div>,
            },
            {
                path: "/counter",
                element: <CounterPage/>
            },

            {
                path: "/",
                element: <RegisterLogin/>
            }
            ,
            {
                path: "/register/register-step-01",
                element: <RegisterStep01/>
            }
            ,
            {
                path: "/register/register-step-2",
                element: <RegisterStep02/>
            },
            {
                path: "/login",
                element: <Login/>
            }
        ],
    },
    {
        path: "/main",
        element: <LayoutFooter/>,
        children: [
            {
                path: "",
                element: <Discover/> // homepage
            },
            {
                path: "search",
                element: <Search/> //
            },
            {
                path: "profile/:id",
                element: <Profile/> // user profile
            },
            {
                path: "profile",
                element: <Profile2/> // user profile
            }
        ]
    },
    {
        path: "/view",
        element: <DefaultLayout/>,
        children: [
            {
                path: "photo/:id",
                element: <Photo/>
            },
            {
                path: "room/:id",
                element: <Room/>
            },
        ]
    }
    ,
    {
        path: "/message",
        element: <LayoutFooter/>, //
        children: [
            {
                path: "chat",
                element: <Chat/>
            },

        ]

    }
]);

export default router;
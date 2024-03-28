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

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain/>,
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
                path: "/register-login",
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
                path: "discover",
                element: <Discover/>
            },
            {
                path: "search",
                element: <Search/>
            },
            {
                path: "profile",
                element: <Profile/>
            }
        ]
    },
    {
        path: "/section",
        element: <DefaultLayout/>,
        children: [
            {
                path: "photo",
                element: <Photo/>
            }
        ]
    }
    ,
    {
        path: "/main-section",
        element: <LayoutFooter2/>,
        children: [
            {
                path: "chat",
                element: <Chat/>
            },
            {
                path: "room",
                element: <Room/>
            }
        ]
    }
]);

export default router;
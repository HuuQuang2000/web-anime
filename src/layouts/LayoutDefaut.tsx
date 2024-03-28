import { Outlet, useRoutes } from "react-router-dom";
export default function DefaultLayout({ }: any) {
    return (
        <div>
            <Outlet />
        </div>
    )
}
import { Outlet, useRoutes } from "react-router-dom";
export default function DefaultLayout({ }: any) {
    return (
        <div className="h-100vh w-[375px] mx-auto max-h-[800px] overflow-auto overflow-x-hidden border relative">
            <Outlet />
        </div>
    )
}
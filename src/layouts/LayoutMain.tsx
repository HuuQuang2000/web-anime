import { Outlet, useRoutes } from "react-router-dom";

export default function LayoutMain({ }: any) {
    return (
        <div className="h-100vh w-[375px] mx-auto overflow-hidden border">
            <div className="h-screen max-h-screen">
                <Outlet />
            </div>
        </div>
    )
}
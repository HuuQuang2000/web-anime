import { Outlet, useRoutes } from "react-router-dom";

export default function LayoutMain({ }: any) {
    return (
        <div className="h-100vh w-[375px] overflow-x-hidden p-[16px]">
            <Outlet />
        </div>
    )
}
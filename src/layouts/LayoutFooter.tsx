import { Outlet, useRoutes } from "react-router-dom";
import Footer from "../pages/footer/Footer";
export default function LayoutFooter({ }: any) {
    return (
        <div className="h-100vh w-[375px] mx-auto overflow-auto overflow-x-hidden p-[16px] pb-[100px] border relative max-h-[750px] min-h-[750px]" >
            <Outlet />
            <Footer />
        </div>
    )
}
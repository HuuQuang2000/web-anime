import { Outlet, useRoutes } from "react-router-dom";
import Footer from "../pages/footer/Footer";
export default function LayoutFooter({ }: any) {
    return (
        <div>
            <div className="h-100vh w-[375px] overflow-x-hidden p-[16px] pb-[100px] ">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
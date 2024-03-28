import { Outlet, useRoutes } from "react-router-dom";
import Footer from "../pages/footer/Footer";
export default function LayoutFooter2({ }: any) {
    return (
        <div>
            <div className="h-100vh w-[375px] overflow-x-hidden pb-[100px] ">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
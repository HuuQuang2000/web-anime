import { Outlet, useRoutes } from "react-router-dom";
import Footer from "../pages/footer/Footer";
export default function LayoutFooter2({ }: any) {
    return (
        <div className="h-100vh w-[375px] mx-auto max-h-[800px] overflow-auto overflow-x-hidden p-[16px] pb-[100px] border relative">
            <Outlet />
            <Footer />
        </div>
    )
}
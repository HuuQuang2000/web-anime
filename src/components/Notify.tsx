import {useContext, useEffect, useState} from "react";
import {NotifyContext} from "../main";

export default function Notify() {
    const notifyContext = useContext(NotifyContext);
    let notifyClass = notifyContext.show ? " top-0 right-0 z-50 p-4 transition-all absolute" : "hidden";
    let notifyTypeClass = notifyContext.type == "success" ? "shadow-md rounded-md p-[8px] bg-[#67ECEC] text-[#ffffff]" : "shadow-md rounded-md p-[8px] bg-red-900 text-[#ffffff]";
    useEffect(() => {
        setTimeout(function () {
            notifyContext.setShow(false);
        }, 2000);
    }, [notifyContext.show])

    return (
        <div className={notifyClass}>
            <div className={notifyTypeClass}>
                <div className="flex items-center  justify-between">
                    <div className="flex items-center ">
                        <div >
                            <p className="text-sm font-medium">{notifyContext.message}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
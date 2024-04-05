import {useContext} from "react";
import NotifyContext from "../main";
    export default function Notify() {
    const notify = useContext(NotifyContext);

    const handleNotify  = (type : string , message : string) =>{
        if (type === "success") {
            notify.setType("success");
            notify.setShow(true);
            notify.setTime(600);
        }
    }

    setTimeout(function (){

    }, notify.time);


    const className = notify.show ? "fixed top-0 right-0 z-50 p-4" : "hidden";



    return (
        <div className="fixed top-0 right-0 z-50 p-4" >
            <div className="bg-white shadow-md rounded-md p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Successfully saved!</p>
                        </div>
                    </div>
                    <div className="ml-4">
                        <div className="-mx-1.5 -my-1.5">
                            <button className="inline-flex rounded-md p-1.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="sr-only">Dismiss</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 8a1 1 0 00-1 1v5a1 1 0 102 0V9a1 1 0 00-1-1zm0 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
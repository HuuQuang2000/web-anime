import plus from '../../assets/images/discover/new.png';
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <div className={"fixed left-0 bottom-0 w-full"}>
            <div className="pt-[9px] pb-[25px] px-[11px] border-t-[1px] border-t-[#b2b2b2] mt-[16px]  bg-[#ffffff]">
                <div className="flex justify-center items-center gap-x-[31px] flex-shrink-0">
                    <Link to={"/main"}>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                            <svg className="w-[24px] h-[24px]" data-slot="icon" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path   d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link to={"/main/search"}>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                            <svg className="w-[24px] h-[24px]" data-slot="icon" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
                            </svg>
                        </div>
                    </Link>
                    <div className="flex flex-col justify-center items-center w-[70px] h-[40px]">
                        <img className={"w-full h-full"} src={plus} alt="plus"/>
                    </div>
                    <Link to={"/message/chat"}>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                            <svg className="w-[24px] h-[24px]" data-slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"></path>
                            </svg>
                        </div>
                    </Link>
                    <Link to={"/main/profile"}>
                        <div className="w-[40px] h-[40px] flex flex-col justify-center items-center">
                            <svg className="w-[24px] h-[24px]" data-slot="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    )
}
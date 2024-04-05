import slider from "../../assets/images/discover/slider.png";
import React from "react";
import avatar from "../../assets/images/discover/avatar.svg";


export default function Photo() {
    return (
        <div className={"w-full h-screen"}>
            <img className={"w-full h-full"} src={slider}/>
            <div className="absolute top-[46px] px-[16px]  z-10 text-[#ffffff]   ">
                <div className="w-[129px] h-[38px] flex ">
                    <div className="w-[28px] h-[28px] mr-[8px]  justify-center items-center">
                        <img className="w-full h-full object-fill" src={avatar}/>
                    </div>
                    <div className="mt-[-2px]">
                        <div className="text-[#FFF] text-[13px] font-[700] leading-normal w-[40px] h-[15px]">
                            Yukiko
                        </div>
                        <div className="text-[#ffffffcc] text-[11px] font-[400] leading-normal w-[48px] h-[13px]">
                            @yukiko1
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-[46px] px-[16px] right-[-8px] z-10 text-[#ffffff]   ">
                <div className="h-[40px] w-[40px] ">
                    <svg className="h-[24px] w-[24px]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}
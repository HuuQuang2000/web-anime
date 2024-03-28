import slider from "../../../assets/images/discover/slider.png";
import React, {useState} from "react";

export default function Room() {
    interface Data {
        id : number,
        path : string,
        message : string,
    }
    const [data , setData] = useState<Data[]>([
        {
            path: slider,
            id: 1,
            message: "hau ga vkl hau ga vkl hau ga vkl hau ga vklhau ga vkl hau ga vkl hau ga vkl hau ga vkl"
        },
        {
            path: slider,
            id: 2,
            message: "hau ga vkl hau ga vkl hau ga vkl hau ga vklhau ga vkl hau ga vkl hau ga vkl hau ga vkl"
        }
        ,{
            path: slider,
            id: 1,
            message: "hau ga vk "
        }
    ])

    function HandleRoom() {
        const rooms = data?.map((value, index) => {
            let className = "";
            if (value.id === 1)
                {
                    className  = "flex  pb-[16px] px-[16px] gap-x-[16px]  justify-start ";
                }else {
                    className =  "flex pb-[16px] px-[16px] gap-x-[16px] flex-row-reverse justify-end";
                }
            return (
                <div className={className}>
                    <div className={"w-[28px] h-[28px] rounded rounded-[100%] overflow-hidden"}>
                        <img src={value.path} className={"w-full h-full"} alt="avatar" />
                    </div>
                    <div className={"text-[#000] text-[11px] font-[300] leading-[18px] h-auto w-[90%] bg-[#F7F7F7] px-[14px] py-[16px]  rounded  rounded-[6px] "}>
                        {value.message}
                    </div>
                </div>
            )
        })
        return (
            <>
                {rooms}
            </>
        )
    }

    return (
        <div>
            <div className={"w-full"}>
                <div className="text-[#000] text-[17px]  font-[600] leading-[22px] tracking-[-0.408px] text-center capitalize py-[11px] border-b-[1px]  border-[rgba(0, 0, 0, 0.30)]">
                    chats
                </div>
                <div className={"absolute left-[9px] w-[24px] h-[24px] top-[11px]"}>
                    <svg className={"w-full h-full"} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                    </svg>
                </div>
            </div>
            <div className={"pt-[34px]"}>
                <HandleRoom />
            </div>
        </div>
    )
}
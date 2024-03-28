import React, {useState} from "react";
import slider from "../../assets/images/discover/slider.png";

export default function Chat() {

    interface Data {
        path : string,
        name : string,
        message : string,
    }

    const [data , setData] = useState<Data[]>([
        {
            path: slider,
            name: "haunv",
            message: "hau ga vkl"
        },
        {
            path: slider,
            name: "haunv",
            message: "hau ga vkl"
        }
        ,{
            path: slider,
            name: "haunv",
            message: "hau ga vk "
        }

    ])
    function HandleChats () {
        const chats = data?.map((value, index) => (
            <div className={"flex py-[16px] px-[16px] gap-x-[16px] border-[rgba(0, 0, 0, 0.30)] border-b-[1px] "}  >
                <div className={"w-[64px] h-[64px] rounded rounded-[100%] overflow-hidden"}>
                    <img src={value.path} className={"w-full h-full"} alt="avatar" />
                </div>
                <div className={"w-[90%]"}>
                    <div className={"text-[#000] text-[13px] font-[700] leading-[18px]"}>
                        {value.name}
                    </div>
                    <div className={"text-[#000] text-[11px] font-[300] leading-[18px] h-[36px] w-full"}>
                        {value.message}
                    </div>
                </div>
            </div>
        ))
        return (
            <>
                {chats}
            </>
        )
    }
    return (
        <div>
            <div className=" text-[#000] text-[17px]  font-[600] leading-[22px] tracking-[-0.408px] text-center capitalize py-[11px] border-b-[1px]  border-[rgba(0, 0, 0, 0.30)]">
                chats
            </div>
            <HandleChats />
        </div>
    )
}
import React, {useEffect, useState} from "react";
import slider from "../../assets/images/discover/slider.png";
import RoomService from "../../services/RoomService";
export default function Chat() {

    interface Data {
        path : string,
        name : string,
        id :string,
        messages : any
    }
    const  [data,setData] = useState<Data[]>([]);
    const [pageSize,setPageSize] = useState(10);
    useEffect(()=>{
        getData();
    },[])
    async function getData() {
        try {
            const rooms = await RoomService.getRooms({
                textSearch: "",
                page: 0,
                size: pageSize
            })
            setData(rooms?.data?.content);
            console.log(rooms?.data?.content)
        } catch (e) {
            console.log(e);
        }
    }
    function HandleChats () {
        const chats = data?.map((value, index) => (
            <a href={"/view/room/"+value.id} key={index}>
                <div className={"flex py-[16px] px-[16px] gap-x-[16px] border-[rgba(0, 0, 0, 0.30)] border-b-[1px] "}  >
                    <div className={"w-[64px] h-[64px] rounded rounded-[100%] overflow-hidden"}>
                        <img src={value.path} className={"w-full h-full"} alt="avatar" />
                    </div>
                    <div className={"w-[90%]"}>
                        <div className={"text-[#000] text-[13px] font-[700] leading-[18px]"}>
                            {value.name}
                        </div>
                        <div className={"text-[#000] text-[11px] font-[300] leading-[18px] h-[36px] w-full"}>
                            {value.messages[value.messages.length-1]?.content}
                        </div>
                    </div>
                </div>
            </a>
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
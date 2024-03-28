import React, {useState} from "react";
import slider from "../../assets/images/discover/slider.png";
import {Link} from "react-router-dom";

export default function Search({ }: any) {
    interface Data {
        path : string
    }

    const [search, setSearch] = useState<string>("");
    const [data, setData] = useState<Data[]>([
        {
            path: slider
        },
        {
            path: slider
        },
        {
            path: slider
        },
        {
            path: slider
        },
        {
            path: slider
        },
        {
            path: slider
        }
    ]);

    function HandleSearch(){

        const images = data.map((x,index) => (
            <div className={"col-span-1"} key={index}>
                <img className={"w-full h-full"} src={x.path} alt="image" />
            </div>
        ))

        if (data.length > 0){
            return (
                <>
                    <div className="my-[32px]">
                        <p className="text-[#23BABA] text-[13px] font-[900] uppercase tracking-[0.52px] leading-normal" >
                            all results
                        </p>
                    </div>
                    <div className={"grid grid-cols-3 gap-x-[11px] gap-y-[11px] "}>
                        {images}
                    </div>
                </>
            )
        }else {
            return (<> </>)
        }

    }

    return (
        <div className="w-full">
            <div className="text-[#999] text-[36px] font-[400] leading-normal tracking-[-0.54px]">
                Search
            </div>
            <div className="pt-[16px]">
                <input className="border-[#72C4C4] border-[2px] w-full p-[17px] text-[#000] text-[15px] font-[400]" placeholder="Search all photos"/>
            </div>
            <HandleSearch />
            <div className="text-[13px] font-[900] mt-[32px] px-[32px] py-[8px] rounded w-full text-center rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] uppercase cursor-pointer">
                see more
            </div>
        </div>
    )
}
import React, {useState} from "react";
import slider from '../../assets/images/discover/slider.png';
import avatar from '../../assets/images/discover/avatar.svg';
import {Link} from "react-router-dom";
import Footer from "../footer/Footer";
export default function  Discover(){
    interface Data {
        path : string,
    }
    const [data , setData] = useState<Data[]>([
        {
            path: slider,
        },
        {
            path: slider,
        }
        ,{
            path: slider
        }
    ])

    function Images(){
        const images = data.map((x,index) => (
            <div className="col-span-1">
                <div className="w-full h-auto">
                    <img src={slider} className="w-full h-full" />
                </div>
            </div>
        ))
        return (
            <div className="mt-[36px]">
                <p className="text-[#23BABA] text-[13px] font-[900] uppercase tracking-[0.52px] leading-normal" >
                    Browse all
                </p>
                <div className="mt-[24px]">
                    <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px] ">
                        {images}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div>
            <div className="w-full">
                <div className="text-[#999] text-[36px] font-[400] leading-normal tracking-[-0.54px]">
                    Discover
                </div>
                <div className="my-[32px]">
                    <p className="text-[#23BABA] text-[13px] font-[900] uppercase tracking-[0.52px] leading-normal" >
                        What’s new today
                    </p>
                </div>
                <div>
                    <div className="w-[343px] h-[343px]">
                        <img className="w-full h-full" src={slider}/>
                    </div>
                    <div className="mt-[16px] w-[129px] h-[38px] flex ">
                        <div className="w-[28px] h-[28px] mr-[8px]  justify-center items-center">
                            <img className="w-full h-full" src={avatar}/>
                        </div>
                        <div className="mt-[-2px]">
                            <div className="text-[#000] text-[13px] font-[700] leading-normal w-[40px] h-[15px]">
                                Yukiko
                            </div>
                            <div className="text-[rgba(0, 0, 0, 0.80)] text-[11px] font-[400] leading-normal w-[48px] h-[13px]">
                                @yukiko1
                            </div>
                        </div>
                    </div>
                </div>
               <Images />
                <Link to="/login">
                    <div className="mt-[32px] w-full text-center py-[8px] rounded  rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] capitalize cursor-pointer">
                        log in
                    </div>
                </Link>
            </div>
        </div>
    )
}
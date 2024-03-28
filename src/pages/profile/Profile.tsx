import slider from "../../assets/images/discover/slider.png";
import React from "react";

export default function Profile() {
    return (
       <div>
           <div className={"pt-[32px] flex flex-col justify-center items-center"}>
               <div className={"w-[128px] h-[128px] overflow-hidden rounded rounded-full"}>
                   <img className={"w-full h-full"} src={slider}/>
               </div>
               <div className={"grip gap-x-[16px]"}>
                   <div className={"text-center text-[#000] text-[36px] font-[400] tracking-[-0.54px] leading-normal pt-[32px] capitalize"}>
                       Jiaran
                   </div>
                   <div className={"text-center text-[#000] text-[13px] font-[900] tracking-[-0.54px] leading-normal uppercase"}>
                       Kim Lang, TQ
                   </div>
               </div>
           </div>
           <div className="bg-[#67ECEC] text-[13px] font-[900] mt-[32px] px-[32px] py-[8px] rounded w-full text-center rounded-[6px] border-[2px] border-[#43B0B0] text-[#ffffff] uppercase cursor-pointer">
               follow jane
           </div>
           <div className="text-[13px] font-[900] mt-[16px] px-[32px] py-[8px] rounded w-full text-center rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] uppercase cursor-pointer">
               see more
           </div>

           <div className="mt-[24px]">
               <div className="grid grid-cols-2 gap-x-[12px] gap-y-[12px] ">
                   <div className="col-span-1">
                       <div className="w-full h-auto">
                           <img src={slider} className="w-full h-full" />
                       </div>
                   </div>
                   <div className="col-span-1">
                       <div className="w-full h-auto">
                           <img src={slider} className="w-full h-full" />
                       </div>
                   </div>
                   <div className="col-span-1">
                       <div className="w-full h-auto">
                           <img src={slider} className="w-full h-full" />
                       </div>
                   </div>
                   <div className="col-span-1">
                       <div className="w-full h-auto">
                           <img src={slider} className="w-full h-full" />
                       </div>
                   </div>
               </div>
           </div>
           <div className="text-[13px] font-[900] mt-[16px] px-[32px] py-[8px] rounded w-full text-center rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] uppercase cursor-pointer">
               see more
           </div>
       </div>
    )
}
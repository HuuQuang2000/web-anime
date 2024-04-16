import React, {useEffect, useState} from "react";
import slider from '../../assets/images/discover/slider.png';
import avatar from '../../assets/images/discover/avatar.svg';

import UserFileService from "../../services/UserFileService";
import {Link} from "react-router-dom";
export default function  Discover(){
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(false);
    const [buttonClass,setButtonClass] = useState("hidden");
    interface userFile {
        path : string,
        userId: number,
        id : number
    }
    const [userFiles, setUserFiles] = useState<userFile[]>([])
    async function getDataUserFile() {
        setLoading(true);
        try {
            const data = await UserFileService.getAllUserFiles({
                page: 0,
                size: pageSize,
                textSearch: "",
            })
            if (data.data.totalElements > pageSize){
                setButtonClass("mt-[32px] w-full text-center py-[8px] rounded  rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] capitalize cursor-pointer");
            }else {
                setButtonClass("hidden");
            }

            setLoading(false);
            setUserFiles(data.data.content);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getDataUserFile();
    }, [pageSize])

    function handleSeeMore() {
        setPageSize(pageSize + 10);
    }
     function UserFilesRender() {
        const images = userFiles.map(function (x, index) {
                if (index % 2 == 0) {
                    return (
                        <Link to={"/view/photo/" + x.id} key={index}>
                            <div className="w-full">
                                <img src={x.path} className=" w-full h-full" alt="Description of the first image"/>
                            </div>
                        </Link>
                    )
                }
            }
        )
        const images2 = userFiles.map(function (x, index) {
                if (index % 2 != 0) {
                    return (
                        <Link to={"/view/photo/" + x.id} key={index}>
                            <div className="w-full">
                                <img src={x.path} className="w-full h-full" alt="Description of the first image"/>
                            </div>
                        </Link>
                    )
                }
            }
        )
        return (
            <div className="mt-[36px] ">
                <p className="text-[#23BABA] text-[13px] font-[900] uppercase tracking-[0.52px] leading-normal">
                    Browse all
                </p>
                <div className="mt-[24px]">
                    <div className="grid grid-cols-2 items-start gap-[12px]">
                        <div>
                            {images}
                        </div>
                        <div>
                            {images2}
                        </div>
                    </div>
                </div>
                <button disabled={loading} onClick={handleSeeMore} className={buttonClass}>
                    see more
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="w-full h-full overflow-auto overflow-x-hidden">
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
                    <UserFilesRender />
            </div>
        </>
    )
}
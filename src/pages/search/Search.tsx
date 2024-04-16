import React, {useEffect, useState} from "react";
import slider from "../../assets/images/discover/slider.png";
import {Link} from "react-router-dom";
import UserFileService from "../../services/UserFileService";
export default function Search({ }: any) {
    interface Data {
        path : string,
        id : number
    }

    const [search, setSearch] = useState<string>("");
    const [pageSize, setPageSize] = useState(10);
    const [userFiles, setUserFiles] = useState<Data[]>([]);

    useEffect(() => {
        getDataUserFile();
    }, [pageSize, search]);

    async function getDataUserFile() {
        try {
            const data = await UserFileService.getAllUserFiles({
                page: 0,
                size: pageSize,
                textSearch: search,
            })
            setUserFiles(data?.data?.content);
        } catch (e) {
            console.log(e)
        }
    }

    function handleChangeTextSearch(e: any){
        setTimeout(() => {
            setSearch(e.target.value);
        }, 2000);
    }

    function handleChangePageSize(){
        setPageSize(pageSize + 10);
    }
    function HandleSearch(){
        const images = userFiles?.map((x,index) => (
            <a href={"/view/photo/"+x.id}>
                <div className={"col-span-1 h-[100px]"} key={index}>
                    <img className={"w-full h-full"} src={x.path} alt="image" />
                </div>
            </a>
        ))
        if (userFiles?.length > 0){
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
                    <div hidden={userFiles.length < pageSize} onClick={handleChangePageSize} className="text-[13px] font-[900] mt-[32px] px-[32px] py-[8px] rounded w-full text-center rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] uppercase cursor-pointer">
                        see more
                    </div>
                </>
            )
        }else {
            return (<>
                <div className="my-[32px]">
                    <p className="text-[#23BABA] text-[13px] font-[900] uppercase tracking-[0.52px] leading-normal" >
                        No results
                    </p>
                </div>
            </>)
        }

    }

    return (
        <div className="w-full">
            <div className="text-[#999] text-[36px] font-[400] leading-normal tracking-[-0.54px]">
                Search
            </div>
            <div className="pt-[16px]">
                <input onChange={handleChangeTextSearch} className="border-[#72C4C4] border-[2px] w-full p-[17px] text-[#000] text-[15px] font-[400]" placeholder="Search all photos"/>
            </div>
            <HandleSearch />
        </div>
    )
}
import slider from "../../assets/images/discover/slider.png";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import UserService from "../../services/UserService";
import {data} from "autoprefixer";
import UserFileService from "../../services/UserFileService";
import {AuthService} from "../../services/AuthService";

export default function Profile() {
    const [user, setUser] = useState<User>();
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [pageSize, setPageSize] = useState(10);
    const [buttonClass,setButtonClass] = useState("hidden");
    interface User {
        id : number,
        path : string,
        pathAvatar? : string,
        name?: string,
        username?: string,
    }
    function handleSeeMore() {
        setPageSize(pageSize + 10);
    }
    useEffect( () => {
        getUser();

    }, [ pageSize])
    useEffect( () => {
        getDataUserFile();
    }, [user?.id, pageSize])
    async function getUser() {
        try {
            const data = await AuthService.getProfile();
            setUser({
                id: data?.data?.sub,
                path: data?.data?.path,
                pathAvatar: data?.data?.pathAvatar,
                username: data?.data?.username,
                name: data?.data?.name,
            });
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    }
    interface userFile {
        path : string,
        userId: number,
        id : number
    }
    const [userFiles, setUserFiles] = useState<userFile[]>([])

    async function getDataUserFile() {
        setLoading(true);
        try {
            console.log(user?.id);
            const data = await UserFileService.getAllUserFiles({
                page: 0,
                size: pageSize,
                textSearch: "",
                userId: user?.id,
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
    function UserFilesRender() {
        const images = userFiles.map(function (x, index) {
                if (index % 2 == 0) {
                    return (
                            <div className="w-full">
                                <img src={x.path} className=" w-full h-full" alt="Description of the first image"/>
                            </div>
                    )
                }
            }
        )
        const images2 = userFiles.map(function (x, index) {
                if (index % 2 != 0) {
                    return (
                            <div className="w-full">
                                <img src={x.path} className="w-full h-full" alt="Description of the first image"/>
                            </div>
                    )
                }
            }
        )
        return (
            <div className="mt-[36px]">
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

    return (user && (
            <div>
                <div className={"pt-[32px] flex flex-col justify-center items-center"}>
                    <div className={"w-[128px] h-[128px] overflow-hidden rounded rounded-full"}>
                        <img className={"w-full h-full"} src={user.pathAvatar}/>
                    </div>
                    <div className={"grip gap-x-[16px]"}>
                        <div className={"text-center text-[#000] text-[36px] font-[400] tracking-[-0.54px] leading-normal pt-[32px] capitalize"}>
                            {user.username}
                        </div>
                        <div className={"text-center text-[#000] text-[13px] font-[900] tracking-[-0.54px] leading-normal uppercase"}>
                            {user.name}
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
                   <UserFilesRender />
                </div>
            </div>
        )

    )
}
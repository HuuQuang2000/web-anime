import slider from "../../assets/images/discover/slider.png";
import React, {useEffect, useState} from "react";
import avatar from "../../assets/images/discover/avatar.svg";
import {PhotoService} from "../../services/PhotoService";
import {Link, useNavigate, useParams} from "react-router-dom";
import {data} from "autoprefixer";


export default function Photo() {

    const navigate = useNavigate();

    const [photo, setPhoto] = useState<Photo>();
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    interface Photo {
        id : number,
        path : string,
        userId: number,
        pathAvatar? : string,
        name?: string,
        username?: string,
    }
    useEffect(() => {
        getPhoto();
    }, [])
    async function getPhoto() {
        try {
            const data = await PhotoService.getOneById(id as string);
            setPhoto({
                id: data.data.id,
                path: data.data.path,
                userId: data.data.user.id,
                pathAvatar: data.data.user.pathAvatar,
                username: data.data.user.username,
                name: data.data.user.name
            });
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    }
    return (photo &&
        ( <div className={"w-full h-screen"} >
            <img className={"w-full h-full bg-[#ccc7c7]"} src={photo.path}/>
            <div className="absolute top-[46px] px-[16px]  z-10 text-[#ffffff] " >
                <Link to={"/main/profile/"+photo.userId}>

                <div className="w-[129px] h-[38px] flex ">
                        <div className="w-[28px] h-[28px] mr-[8px]  justify-center items-center">
                            <img className="w-full h-full object-fill" src={photo.pathAvatar}/>
                        </div>
                    <div className="mt-[-2px]">
                        <div className="text-[#FFF] text-[13px] font-[700] leading-normal w-[40px] h-[15px]">
                            {photo.name}
                        </div>
                        <div className="text-[#ffffffcc] text-[11px] font-[400] leading-normal w-[48px] h-[13px]">
                            @{photo.username}
                        </div>
                    </div>
                </div>
                </Link>
            </div>
            <div className="absolute top-[46px] px-[16px] right-[-8px] z-10 text-[#ffffff]   " onClick={() => navigate(-1)}>
                <div className="h-[40px] w-[40px] ">
                    <svg className="h-[24px] w-[24px]" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </div>)
    )
}
import slider from "../../../assets/images/discover/slider.png";
import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import RoomService from "../../../services/RoomService";
import MessageService from "../../../services/MessageService";

import io,{Socket} from "socket.io-client";
import {Message} from "postcss";
const host = "http://localhost:8001";
export default function Room() {
    const navigate = useNavigate();

    interface User {
        id : number;
        pathAvatar : string;
        name : string;
    }
    interface Data {
        id : number,
        pathFile : string,
        content : string,
        senderId : number
    }
    const [roomName,setRoomName] = useState("");
    const [dataInput, setDataInput] = useState("");
    const [data , setData] = useState<Data[]>([])
    const {id} = useParams<{id : string}>();
    var [user , setUser] = useState<User>();
    const [socket, setSocket] = useState<Socket>();
    const [messages, setMessages] = useState<string[]>([]);
    const [files, setFiles] = useState<File[]>([]);
    // const send = (val : string)=>{
    //     socket?.emit("message", val);
    // }
    useEffect(() => {
        const newSocket = io(host);
        newSocket.on('connect', () => {
            console.log('Connected to the server');
        });
        newSocket.emit("message", {
            id : id,
            page : 0,
            size : 9999,
            textSearch : ""
        });

        newSocket.on("message", async (data) => {
            try {
                const {data: res} = await RoomService.getOneById({
                    id: data.id,
                    page: data.page,
                    size: data.size,
                    textSearch: data.textSearch,
                });
                setUser(res.users[1]);
                setData(res.messages.content);
                setRoomName(res.name);
                console.log(res)
            } catch (e) {
                console.log(e);
            }
        });
        newSocket.on('disconnect', () => {
            console.log('Disconnected from the server');
            newSocket.connect();
        });

        return () => {
            newSocket.off('connect');
            newSocket.off('disconnect');
            newSocket.close();
        };
    },[setSocket,dataInput])

    // useEffect(() => {
    //
    // }, [])


    async function handleSendMessage (){
        const formData = new FormData();
        formData.append("content", dataInput);
        formData.append("idRoom", id + "");
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
        try {
            const message = await MessageService.sendMessage(formData);
            setDataInput("");
        }catch (e){
            console.log(e);
        }
    }

    async function getRoom() {
        try {
            const {data : res} = await RoomService.getOneById({
                id : id,
                page : 0,
                size : 9999,
                textSearch : ""
            });
            setUser(res.users[1]);
            setData(res.messages.content);
            setRoomName(res.name);
        } catch (e) {
            console.log(e);
        }
    }
    const [styleInput, setStyleInput] = useState({
        height : "40px"
    })

    useEffect(() => {
        if (dataInput.length > 32 && dataInput.length % 32 > 0) {
            if(dataInput.length < 96){
                let style = Math.floor(dataInput.length / 32) * 16 + 24 + "px";
                setStyleInput({
                    height: style
                })
            }
        }
    }, [dataInput]);


    // useEffect(() => {
    //     getRoom();
    // },[])

    const handleFile = async (event : any) => {
        await setFiles(Array.from(event.target.files));
    }

    const contentChat = (value : string , path : string) =>{
        if (path !=null && path.length > 0){
            return (
                <div className={"w-[90%] h-[120px] rounded  rounded-[6px] overflow-hidden"}>
                    <img src={path} className={"w-full h-full"}/>
                </div>
            )
        }else {
            return (
                <div className={"text-[#000] text-[11px] font-[300] leading-[18px] h-auto w-[90%] bg-[#F7F7F7] px-[14px] py-[16px]  rounded  rounded-[6px] "}>
                    {value}
                </div>
            )
        }
    }

    function HandleRoom() {
        const rooms = data?.map(function (value, index){
                let className = value?.senderId == Number(localStorage.getItem("uuID"))
                    ? "flex pb-[16px] px-[16px] gap-x-[16px]  justify-start"
                    : "flex pb-[16px] px-[16px] gap-x-[16px] flex-row-reverse justify-end" ;
            // @ts-ignore
            let src = value.senderId == Number(localStorage.getItem("uuID"))  ? localStorage.getItem("pathAvatar") as string : user.pathAvatar;
            let href = value.senderId == Number(localStorage.getItem("uuID"))  ? `#` : `/main/profile/${user?.id}`;
               return (
                        <div className={className} key={index}>
                            <a href={href}>
                                <div className={"w-[28px] h-[28px] rounded rounded-[100%] overflow-hidden"}>
                                    <img src={src} className={"w-full h-full"} alt="avatar" />
                                </div>
                            </a>
                            {contentChat(value.content , value.pathFile)}
                        </div>
               )
            })
        return (
            <>
                {rooms}
            </>
        )
    }


    function handleRemoveFile(indexToRemove: number) {
        setFiles(prevFiles => prevFiles.filter((_, index) => index !== indexToRemove));
    }

    function HandleFileShow() {
        const baseClass = "bg-cyan-500 shadow-lg shadow-cyan-500/50 w-[60px] h-[60px] rounded rounded-[6px] p-[6px]";

        const elementShow = files.map((value, index) => {
            const className = `${baseClass} relative`;
            const imageUrl = URL.createObjectURL(value);
            return (
                <div className={className} key={index}>
                    <img src={imageUrl} className={"w-full h-full"} />
                    <svg onClick={() => handleRemoveFile(index)} className={" absolute top-[-10px] bg-[#333333] rounded-[100%] rounded text-[#ffffff] right-[-10px] w-[24px] h-[24px]"} data-slot="icon"  fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                </div>
            );
        });

        return (
               <div className={"absolute bottom-[125px]  z-1000 w-full overflow-auto bg-[#edf1f1] "}>
                   <div className={"w-auto h-[80px] pt-[20px]"}>
                       <div className={"absolute left-[10px] flex  gap-x-[30px] pr-[30px]"}>
                           {elementShow}
                       </div>
                   </div>
               </div>
        );
    }


    return (
       user  && (
           <div className={"overflow-hidden relative "}>
               <div className={"w-full"}>
                   <Link to={`/main/profile/${user?.id}`}>
                       <div className="text-[#000] text-[17px]  font-[600] leading-[22px] tracking-[-0.408px] text-center capitalize py-[11px] border-b-[1px]  border-[rgba(0, 0, 0, 0.30)]">
                           {roomName}
                       </div>
                   </Link>
                   <div className={"absolute left-[9px] w-[24px] h-[24px] top-[11px]"} onClick={() => navigate(-1)}>
                       <svg className={"w-full h-full"} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                       </svg>
                   </div>
               </div>
               <div className={"pt-[34px] h-[750px] overflow-auto pb-[140px]"}>
                   <HandleRoom />
               </div>
               {files.length > 0 ? <HandleFileShow /> : null}
               <div className={"p-[16px] flex border-t-[1px] border-[#eeeeee] absolute bottom-[45px] w-full bg-[#edf1f1] justify-center items-start"}>
                    <label className={"p-[8px]"} htmlFor="fileInput" >
                        <svg className={"text-[#333333]  w-[24px] h-[24px]"} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                        </svg>
                    </label>
                   <input id="fileInput" type="file" className={"hidden"} onChange={handleFile} multiple />
                   <div className={"w-[80%] "}>
                       <textarea value={dataInput}  style={styleInput} onChange={(event)=>setDataInput(event.target.value)} className={"border-[1px] rounded-[16px] rounded py-[4px] px-[16px] w-full"}/>
                   </div>
                   <div className={"p-[8px]"} onClick={handleSendMessage}>
                       <svg className={"text-[#333333] w-[24px] h-[24px]"}  data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"></path>
                       </svg>
                   </div>
               </div>
           </div>
       )
    )
}
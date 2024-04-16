import React, {useContext, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthService} from "../../../services/AuthService";
import {NotifyContext} from "../../../main";
export default function Login() {
    const notifyContext = useContext(NotifyContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleLogin(event: any) {
        event.preventDefault();
        try {
            const data = await AuthService.login({username, password});
            notifyContext.setShow(true);
            notifyContext.setMessage("Login success!");
            notifyContext.setType("success");
            localStorage.setItem("token", data.data.access_token);
            try{
                const DataUser = await AuthService.getProfile();
                localStorage.setItem("username", DataUser.data.username);
                localStorage.setItem("name", DataUser.data.name);
                localStorage.setItem("pathAvatar", DataUser.data.pathAvatar);
                localStorage.setItem("uuID", DataUser.data.sub);
                console.log(DataUser.data);
            }catch (e){
                console.log(e);
            }
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                navigate("/main");
            }, 2000);
        } catch (Exception) {
            notifyContext.setShow(true);
            notifyContext.setMessage("Login fail!");
            notifyContext.setType("error");
            setLoading(false);
        }
    }

    return (
        <div className="w-full p-4">
            <form onSubmit={handleLogin}>
                <div onClick={() => navigate(-1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="black" fill-opacity="0.8" />
                    </svg>
                </div>
                <div className="text-[#999] text-[36px] font-[400] leading-normal tracking-[-0.54px] my-[32px]">
                    Log in
                </div>
                <div>
                    <input  value={username} onChange={e=> setUsername(e.target.value)}  className="border-[#72C4C4] border-[2px] w-full p-[17px] text-[#72C4C4] text-[15px] font-[400]" placeholder="1234@fpt.edu.vn" />
                </div>
                <div className="pt-[16px]">
                    <input value={password} onChange={e=> setPassword(e.target.value)} className="border-[#72C4C4] border-[2px] w-full p-[17px] text-[#72C4C4] text-[15px] font-[400]" placeholder="1234@fpt.edu.vn" type="password" />
                </div>
                <div className="pt-[16px]">
                    <button type={"submit"} disabled={loading} onClick={handleLogin} className="bg-[#67ECEC] w-full py-[19px] text-[13px] text-center border-[#72C4C4] border-[2px] font-[900] tracking-[0.52px] uppercase text-[#FFF]">
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}
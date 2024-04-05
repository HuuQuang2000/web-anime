import background from "../../../assets/images/background_register_login.png";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from 'react-router-dom';
export default function RegisterStep01() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState('cv_canyuko');

    return (
        <div className="w-full p-4">
            <div onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91421 4.35355L4.56066 7L3.85355 7.70711L0.353553 4.20711L0 3.85355L0.353553 3.5L3.85355 0L4.56066 0.707107L1.91421 3.35355L5.70711 3.35355C9.28325 3.35355 12.2071 6.27741 12.2071 9.85355L12.2071 11.3536H11.2071L11.2071 9.85355C11.2071 6.8297 8.73096 4.35355 5.70711 4.35355H1.91421Z" fill="black" fill-opacity="0.8" />
                </svg>
            </div>
            <div className="text-[#999] text-[36px] font-[400] leading-normal tracking-[-0.54px] my-8">
                Register
            </div>
            <div>
                <input value={username} className="border-[#72C4C4] border-[2px] w-full p-[17px] text-[#72C4C4] text-[15px] font-[400]" placeholder="1234@fpt.edu.vn" />
            </div>
            <Link to="/register/register-step-2">
                <div className="pt-[16px]">
                    <button className="bg-[#67ECEC] w-full py-[19px] text-[13px] text-center border-[#72C4C4] border-[2px] font-[900] tracking-[0.52px] uppercase text-[#FFF]">
                        Next
                    </button>
                </div>
            </Link>
            <p className="text-[#000] text-[13px] font-[400] leading-[18px] pt-[32px]">
                By signing up, you agree to Photo’s <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">
                    Privacy Policy.</a>
            </p>
        </div>
    )
}
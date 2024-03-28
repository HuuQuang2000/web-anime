import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background_register_login.png';

export default function RegisterLogin() {
    return (
        <div className="w-full">
            <div className="h-[707px]">
                <img className="w-full h-full" src={background} alt="background" />
            </div>
            <div className="p-[16px]">
                <div className="flex justify-center justify-items-center gap-x-[8px]">
                    <Link to="/login">
                        <div className="px-[32px] py-[8px] rounded  rounded-[6px] border-[2px] border-[#43B0B0] text-[#43B0B0] capitalize cursor-pointer">
                            log in
                        </div>
                    </Link>
                    <Link to="/register/register-step-2">
                        <div className="px-[32px] py-[8px] rounded  rounded-[6px] border-[2px] border-[#43B0B0] text-[#ffffff] bg-[#43B0B0] uppercase cursor-pointer">
                            register
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
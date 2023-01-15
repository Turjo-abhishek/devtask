import React from 'react';
import image from '../Assets/kisspng-react-javascript-library-github-backbone-5af0ed69aa7f13.5301570215257388576984.png';
import google from "../Assets/color+google+media+network+social+icon-1320086080668511532.ico";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Login = () => {
    return (
        <div className='w-428px mx-auto border my-20'>
            <img src={image} alt="" className='w-[198px] h-[198px] mt-[45px] ml-[116px] mb-[15px]'/>
            <p className='w-[318px] h-[52px] ml-[56px] text-[14px] text-center text-[#1A1A1A] font-medium mb-[52px]'>SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</p>
            <div className='flex justify-between items-start mb-[44px]'>
                <div>
                    <p className='text-[16px] font-bold ml-[92px]'>Login</p>
                    <hr className='w-[188px] h-[3px] bg-[#E70B89] p-[1.5px] ml-[27px] mt-[10px]'/>
                </div>
                <div>
                    <p className='text-[16px] mr-[96px] text-[#1D2226]'>Signup</p>
                </div>
            </div>
            <form className='mb-[15px]'>
                <input type="email" placeholder='Email Address' className='ml-[65px] border w-[300px] h-[50px] border-[#1A1A1A] rounded-[26px] pl-[25px] text-[#1A1A1A] font-[16px] mb-[20px]'/>
                <input type="password" placeholder='Password' className='ml-[65px] border w-[300px] h-[50px] border-[#1A1A1A] rounded-[26px] pl-[25px] text-[#1A1A1A] font-[16px] mb-[35px]'/>
                <input type="submit" value="LOGIN" className='ml-[65px] w-[300px] h-[50px] rounded-[26px] text-[#FFFFFF] font-[16px] bg-[#E70B89]'/>
            </form>
            <p className='text-[#E70B89] text-right mr-[62px] mb-[23px] text-[14px]'>Forgot Password?</p>
            <p className='text-[#9D9D9D] text-[12px] text-center font-medium mb-[21px]'>or login with</p>
            <div className='flex justify-center items-center gap-[25px] mb-[23px]'>
                <div className='w-[50px] h-[50px] rounded-[25px] border border-[#E6E6E6] p-2'><img src={google} alt="" className=''/></div>
                <FaFacebookF className='text-[#3B5998] w-[50px] h-[50px] rounded-[25px] p-3 border border-[#E6E6E6]'></FaFacebookF>
                <FaTwitter className='text-[#38A1F3] w-[50px] h-[50px] rounded-[25px] p-3 border border-[#E6E6E6]'></FaTwitter>
            </div>
            <p className='text-center text-[12px] font-medium mb-[24px]'>Don’t have an account? <span className='text-[#E70B89]'>Create new now!</span></p>
            <p className='text-center text-[12px] font-medium mb-[58px]'>By signing up, you are agree with our <span className='text-[#E70B89]'>Terms & Conditions</span></p>
        </div>
    );
};

export default Login;
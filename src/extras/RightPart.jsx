import React from 'react'
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
const LeftPart = () => {
  return (
    <div className='text-white border rounded-2xl p-15 bg-[#111827] max-h-[500px] '>
        <div className='flex flex-col justify-between content-center '>
            {/* top */}
            <div className='mt-3'>
                <div className='flex flex-row items-center space-x-3'>
                    <span className='text-[30px]'><HiOutlineChatBubbleLeftRight /></span>
                    <span className='text-lg font-medium'>Chat on us</span>
                </div>
                <div className='flex flex-col text-[#D3D3D3]'>
                <span>Our friendly team is here to help.</span>
                <span>info@studynotion.com</span>
                </div>
            </div>
            {/* middle */}
                <div className='mt-10'>
                <div className='flex flex-row items-center space-x-3'>
                    <span className='text-[30px]'><FaEarthAmericas/></span>
                    <span className='text-lg font-medium'>Visit us</span>
                </div>
                <div className='flex flex-col text-[#D3D3D3]'>
                <span>Come and say hello at our office HQ.</span>
                <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,</span>
                <span>Bangalore-560016</span>
                </div>
            </div>
            {/* last */}
                <div className='mt-10'>
                <div className='flex flex-row items-center space-x-3'>
                    <span className='text-[30px]'><IoCall/></span>
                    <span className='font-medium text-lg'>Call us</span>
                </div>
                <div className='flex flex-col text-[#D3D3D3]'>
                <span>Mon - Fri From 8am to 5pm</span>
                <span>+123 456 7869</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftPart
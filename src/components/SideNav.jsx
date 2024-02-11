import React from 'react'
import { FiHome } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { GrNotes } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { LuJoystick } from "react-icons/lu";
import { PiTelegramLogoFill } from "react-icons/pi";
import { TbMailOpened } from "react-icons/tb";
import { PiBookBookmarkLight } from "react-icons/pi";
import Img from './img/img.png'
function SideNav() {
  return (
    <div className='h-screen relative bg-[#040e2d] w-10 text-slate-300' id='sidenav'>
    <img src={Img} alt="logo" />
<div className='flex flex-col pb-8 space-y-6 mt-8 ml-2'>
    <a href="#" ><FiHome className='ml-[2px] w-[15px] hover:text-blue-900' /></a>
    <a href="#" className='mr-2'><GoArrowUpRight className='h-6 w-[17px] hover:text-blue-900' /></a>
    <a href="#"><GrNotes className='ml-[2px] w-[15px] hover:text-blue-900' /></a>
    <a href="#"><BsPerson  className='ml-[2px] w-[15px] hover:text-blue-900'/></a>
    <a href="#"><CgNotes  className='ml-[2px] w-[15px] mt-5 hover:text-blue-900'/></a>
    <a href="#"><LuJoystick  className='ml-[2px] w-[15px] hover:text-blue-900'/></a>
    <a href="#"><PiTelegramLogoFill  className='ml-[2px] w-[15px] hover:text-blue-900'/></a>
    <a href="#"><TbMailOpened  className='ml-[2px] w-[15px] hover:text-blue-900'/></a>
    <a href="#"><PiBookBookmarkLight  className='ml-[2px] w-[15px] hover:text-blue-900'/></a>
</div>
    </div>
  )
}

export default SideNav
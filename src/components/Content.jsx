import React from "react";
import { GoDotFill, GoDownload } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { RxDividerVertical } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { GoHorizontalRule } from "react-icons/go";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";

function Content() {
  return (
    <div
      className="h-screen relative ml-[2.5em] flex flex-col bg-[#152242] text-slate-300"
      id="Content"
    >
      <div className="flex flex-row bg-[#253a72] m-6 rounded-sm text-sm">
        <label className="text-[10px] ml-4 mb-4 mt-4 p-[1px] bg-green-600 px-1 rounded-sm font-sans font-medium bg-yellow-700 text-black">
          TEST
        </label>
        <p className="ml-[0.5em] mt-4">
          These are test payouts and do not affect the actual balance. They are
          used only for the purpose of integrating events.
          <span className="ml-5">
            <a href="#" className="text-blue-300">
              Learn more
            </a>
          </span>
        </p>
      </div>
      <div className="flex flex-row space-x-2 text-sm text-semibold">
        <input type="checkbox" className="ml-8 w-4 h-4 border border-slate-700 appearance-none checked:bg-blue-500 checked:text-white" />
        <label className="mb-5">Showing 1-5 payouts </label>
        <GoDotFill className="mt-1" />
        <span className="">
          Sort by{" "}
          <label className="text-blue-300"> latest creation date </label>{" "}
        </span>
        <a href="#">
          <FaAngleDown className="text-blue-300" />
        </a>
      </div>
      <div className="flex flex-end justify-end mr-8 mb-10 space-x-4">
        <a href="#" className="mt-2">
          <IoReload className="w-8 h-5" />
        </a>
        <a href="#" className="mt-2">
          <IoEllipsisVerticalOutline className="w-8 h-5" />
        </a>
        <a
          href="#"
          className="flex flex-row rounded-sm py-0.5 mb-3 px-2 border-blue-400 border-2 text-blue-300"
        >
          <GoDownload className="mt-1" />
          Export
        </a>
        <a
          className="flex flex-row rounded-sm py-0.5 mb-3 px-2 border-blue-400 border-2 bg-blue-500"
          href="#"
        >
          <FaPlus className="mt-2 h-2" />
          <span className="mt-1 text-[12px] font-sans font-medium">PAYOUT</span>
          <span className="mt-1">
            <RxDividerVertical className="text-sky-800" />
          </span>
          <span className="mt-1">
            <FaAngleDown className="h-3" />
          </span>
        </a>
      </div>



        <div className="flex flex-col">
        <hr className="w-[37.5cm] ml-7 border-gray-600" />

<div className="flex flex-row">
        <div className="flex flex-col ml-12 mt-5 font-semibold space-y-7">
            <span className="">CREATED AT</span>
            <span className="text-xs ">Fri 9 Feb, 2:32 PM</span>
            <span className="text-xs ">Fri 9 Feb, 1:25 PM</span>
            <span className="text-xs ">Fri 9 Feb, 12:04 PM</span>
            <span className="text-xs ">Fri 8 Feb, 3:52 PM</span>
            <span className="text-xs ">Fri 6 Feb, 4:09 PM</span>
        </div>
        <div className="flex flex-col ml-[20em] mt-5 font-semibold space-y-7">
            <span className="">AMOUNT</span>
            <span className="text-xs flex "><LiaRupeeSignSolid className="mt-1" />10,000<label className="text-[10px] text-slate-500 mt-[1px]">.00</label></span>
            <span className="text-xs flex "><LiaRupeeSignSolid className="mt-1" />10,000<label className="text-[10px] text-slate-500 mt-[1px]">.00</label></span>
            <span className="text-xs flex "><LiaRupeeSignSolid className="mt-1" />10,000<label className="text-[10px] text-slate-500 mt-[1px]">.00</label></span>
            <span className="text-xs flex "><LiaRupeeSignSolid className="mt-1" />10,000<label className="text-[10px] text-slate-500 mt-[1px]">.00</label></span>
            <span className="text-xs flex "><LiaRupeeSignSolid className="mt-1" />10,000<label className="text-[10px] text-slate-500 mt-[1px]">.00</label></span>
        </div>

        <div className="flex flex-col ml-[8em] mt-5 font-semibold space-y-6">
            <span className="">STATUS</span>
            <span className="text-[10px]  rounded-2xl mr-12 h-5 p-[3px] bg-yellow-900 text-yellow-400">Queued</span>
            <span className="text-[10px]  rounded-2xl mr-12 h-5 p-[3px] bg-yellow-900 text-yellow-400">Queued</span>
            <span className="text-[10px]  rounded-2xl mr-12 h-5 p-[3px] bg-yellow-900 text-yellow-400">Queued</span>
            <span className="text-[10px]  rounded-2xl mr-12 h-5 p-[3px] bg-yellow-900 text-yellow-400">Queued</span>
            <span className="text-[10px]  rounded-2xl mr-12 h-5 p-[3px] bg-yellow-900 text-yellow-400">Queued</span>
        </div>


        <div className="flex flex-col ml-12 mt-5 font-semibold space-y-6">
            <span className="">CONTACT</span>
            <span className="text-sm ">Shivam Arora</span>
            <span className="text-sm ">Ujjwal</span>
            <span className="text-sm ">Amit Kumar</span>
            <span className="text-sm ">Harsh</span>
            <span className="text-sm ">Random Verma</span>
        </div>



        <div className="flex flex-col ml-[7em] mt-5 font-semibold space-y-6">
            <span className="">CREATED BY</span>
            <span className="text-sm text-slate-500">Aditya Sharma</span>
            <span className="text-sm text-slate-500">Aditya Sharma</span>
            <span className="text-sm text-slate-500">Aditya Sharma</span>
            <span className="text-sm text-slate-500">Aditya Sharma</span>
            <span className="text-sm text-slate-500">Aditya Sharma</span>
        </div>


        <div className="flex flex-col ml-[10em] mt-5 font-semibold space-y-6">
            <span className="flex">UTR<FaCircleQuestion className="w-3 m-1" /></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
            <span className="text-xs text-slate-400 flex flex-row"><GoHorizontalRule className="w-2"/><GoHorizontalRule className="w-2"/></span>
        </div>

        
        </div>
        <hr className="w-[37.5cm] mt-5 ml-7 border-gray-600" />
        </div>
        <div className="flex flex-end justify-end text-end">
<span className="flex bg-[#06133c]  px-3 py-1 mt-2 text-xs">10<a href="#" className="ml-2"><FaCaretDown className="w-2" /></a></span>
<span className="flex mr-[8em] px-3 py-1 mt-2 text-xs">rows/page</span>
        </div>


    </div>
  );
}

export default Content;

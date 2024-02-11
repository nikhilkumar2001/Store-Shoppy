import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { GrSatellite } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
function Nav() {
  return (
    <div className="ml-[2.5em]">
      <div className="flex flex-row h-[4em] text-slate-300 space-x-3  bg-[#040e2d]">
        <GoArrowUpRight className="mt-5 ml-8 h-6 w-5 bg-blue-950" />
        <a className="text-lg font-medium mt-[1em] text-slate-200" href="#">
          Payouts
        </a>
        <span className="mt-5">/</span>
        <a className="text-xs font-medium mt-4 hover:bg-sky-950 hover:text-blue-300 mb-4 p-2 hover:rounded-md">
          Single
        </a>
        <a className="text-xs font-medium mt-4 hover:bg-sky-950 hover:text-blue-300 mb-4 p-2 hover:rounded-md">
          Bulk
          <span className="text-[10px] ml-2 bg-green-600 px-1 rounded-md font-sans font-medium bg-[#002244]">
            NEW
          </span>
        </a>
        <a className="text-xs font-medium mt-4 hover:bg-sky-950 hover:text-blue-300 mb-4 p-2 hover:rounded-md">
          Tally
        </a>
        <a className="text-xs font-medium mt-4 hover:bg-sky-950 hover:text-blue-300 mb-4 p-2 hover:rounded-md">
          Payout Links
        </a>
        <div className="pl-[5cm]">
          <a href="#" className="flex text-[10px] bg-yellow-500 px-5 py-2 rounded-md text-black">GO BACK TO ONBOARDING<span><CiShare1 className="ml-2"/></span></a>
        </div>
        <div className="mt-5 pl-[10.5cm] flex flex-row space-x-3">
          <a
            className="flex flex-row space-x-1 rounded-sm py-0.5 mb-3 px-2 border-blue-400 border-2 text-blue-400"
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
          <a href="#"><IoSearch className="mt-2 text-blue-300 w-5"/></a>
          <a href="#"><GrSatellite className="mt-2 w-4 text-orange-400"/></a>
          <a href="#"><BsPerson className="mt-2 text-blue-300 w-7 "/></a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

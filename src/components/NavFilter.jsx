import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
function NavFilter() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const handleCheckboxChange3 = (event) => {
    setIsChecked3(event.target.checked);
  };

  return (
    <div
      className="bg-[#06133c] relative flex flex-row mt-8 text-slate-300 ml-10 h-[4em] space-x-5"
      id="navfilter"
    >
      <span className="ml-9 mt-5">Quick Filter:</span>
      <span className="flex mt-5 hover:bg-sky-950 hover:text-blue-300 mb-4 hover:rounded-md space-x-2 ">
        <input
          type="checkbox"
          id="checkbox"
          className="pl-1 ml-2 mt-1 w-4 h-4 border rounded-full appearance-none checked:bg-blue-600 full border-blue-400"
          checked={isChecked1}
          onChange={handleCheckboxChange1}
        />
        <label htmlFor="checkbox1" className="">
          All Payouts
        </label>
      </span>
      <span className="flex mt-5 hover:bg-blue-950 hover:text-blue-300 mb-4 hover:rounded-md space-x-2">
        <input
          type="checkbox"
          className="pl-1 ml-2 mt-1 w-4 h-4 border rounded-full appearance-none checked:bg-blue-600 full border-blue-400"
          checked={isChecked2}
          onChange={handleCheckboxChange2}
        />
        <label htmlFor="checkbox2" className="">
          Scheduled for next 2 days
        </label>
      </span>
      <span className="flex mt-5 hover:bg-sky-950 hover:text-blue-300 mb-4 hover:rounded-md space-x-2">
        <input
          type="checkbox"
          className="pl-1 ml-2 mt-1 w-4 h-4 border rounded-full appearance-none checked:bg-blue-600 full border-blue-400"
          checked={isChecked3}
          onChange={handleCheckboxChange3}
        />
        <label htmlFor="checkbox3" className="">
          Queued (RazorpayX A/c) 1
        </label>
      </span>


      <div className="flex flex-row justify-end ml-[8em] mt-5 text-sm text-blue-300 text-semibold">
        <span className="flex ml-[43em]">View More Filters<a href="#"><FaAngleDown className="mt-1 ml-1" /></a></span>
      </div>

    </div>
  );
}

export default NavFilter;

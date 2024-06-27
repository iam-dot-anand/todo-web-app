import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLayoutList } from "react-icons/tb";
import { MdFilterList } from "react-icons/md";
import { LiaFilterSolid } from "react-icons/lia";
import { IoMdAdd } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="border-bottom shadow w-100">
      <div class="d-flex mx-4 ">
        <div class="w-25 flex-grow-1 mt-3 ">
          <div className="w-25 border border-1 ps-3 pb-2 rounded-1 border-secondary">
            <CiSearch className="mb-1 me-1" />
            <input
              type="text"
              placeholder="Search"
              className="mt-2 h-5"
              style={{ border: "none", outline: "none" }}
            />
          </div>
        </div>
        <div class="p-2 mt-3">
          <FaRegQuestionCircle />
          Help Center
        </div>
        <div class="p-2 mt-3">
          <FaRegUserCircle />
          Anand
        </div>
      </div>
      <hr className="text-dark"></hr>
      <div class="d-flex mx-3">
        <div class="p-2 h2 fs-4 "> Task</div>
        <div class="p-2 h2 fs-6 flex-grow-1">
          <span className="border-bottom border-2 border-dark pb-1">
            <TbLayoutList />
            List
          </span>
        </div>
        <div class="p-2">
          <button className="px-2 py-1 rounded-1 bg-light">
            <MdFilterList />
            Sort By
          </button>
        </div>
        <div class="p-2">
          <button className="px-2 py-1 rounded-1 bg-light">
            <LiaFilterSolid />
            Filter
          </button>
        </div>
        <span className="fs-4 mt-1">|</span>
        <div class="p-2">
          <button className="px-2 py-1 rounded-1 text-white bg-dark">
            <IoMdAdd />
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { PiChartPieLight } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";
import { PiNotepad } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuContact2 } from "react-icons/lu";
import { IoBagRemoveOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { CgArrowsScrollV } from "react-icons/cg";

const Sidebar = (props) => {
  return (
    <>
      {props.show && (
        <div className="">
          <div
            class="flex-column border-end-full bg-light"
            style={{ height: "100%" }}
          >
            <div class="justify-content m-4  align-items-center">
              <p className="h1 fs-4 mx-1">To-Do</p>
            </div>
            <hr className=""></hr>
            <div class="p-2  ms-2 ">
              <ul
                className="list-unstyled align-items-center text-secondary"
                style={{ cursor: "pointer" }}
              >
                <li className="mb-1 align-items-center">
                  <PiChartPieLight className="me-2" />
                  Dashboard
                </li>
                <li className="mb-1">
                  <IoNotificationsOutline className="me-2" />
                  Notifications
                </li>
                <li className="mb-1">
                  <FaRegNoteSticky className="me-2" />
                  Nots
                </li>
                <li className="mb-1">
                  <PiNotepad className="me-2" />
                  Tasks
                </li>
                <li className="mb-1">
                  <TfiEmail className="me-2" />
                  Emails
                </li>
                <li className="mb-1 ">
                  <IoCalendarNumberOutline className="me-2" />
                  Calenders
                </li>
              </ul>
            </div>
            <hr className=""></hr>
            <div class="p-2  ms-2">
              <ul
                className="list-unstyled text-secondary"
                style={{ cursor: "pointer" }}
              >
                Database
                <li className="mb-1">
                  <BsGraphUpArrow className="me-2" />
                  Analytics
                </li>
                <li className="mb-1">
                  <LuContact2 className="me-2" />
                  Contacts
                </li>
                <li className="mb-1">
                  <IoBagRemoveOutline className="me-2" />
                  Companies
                </li>
              </ul>
            </div>

            <hr className=""></hr>
            <div class="p-2  ms-2">
              <ul
                className="list-unstyled text-secondary"
                style={{ cursor: "pointer" }}
              >
                <li className="mb-1">
                  <HiOutlineSquares2X2 className="me-2" />
                  Intigrations
                </li>
                <li className="mb-1">
                  <CiSettings className="me-2" />
                  Settings
                </li>
              </ul>
            </div>
            <hr className=""></hr>
            <div className="bottom-0">
              <div className="position-fixed text-secondary text-dark">
                <div className="mb-1 px-2">
                  <span className="bg-light me-1">M</span>Marketing Teams's
                  <CgArrowsScrollV />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

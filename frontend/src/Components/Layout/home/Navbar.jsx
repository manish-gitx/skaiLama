import React from "react";
import { ReactSVG } from "react-svg";
import QuesLogo from "../../../assets/QuesLogoPurple.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";


function Navbar() {
  return (
    <div className="flex justify-between items-center px-16 pt-12">
      <div>
        <ReactSVG src={QuesLogo} className="" />
      </div>
      <div className="flex justify-center items-center gap-8">
        <IoSettingsOutline className="w-10 h-10" />
        <IoMdNotificationsOutline className="w-10 h-10" />
      </div>
    </div>
  );
}

export default Navbar;
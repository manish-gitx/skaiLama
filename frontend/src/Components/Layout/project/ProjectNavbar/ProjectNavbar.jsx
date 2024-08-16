import React from "react";
import IconButton from "./IconButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function ProjectNavbar() {
  const navigate = useNavigate();
  

  return (
    <div className=" h-full flex justify-between items-center px-16">
      <div className="text-xl">Breadcrumb</div>
      <div className="flex justify-center items-center gap-4">
        <IconButton
          icon={<IoMdNotificationsOutline />}
          hoverColor="bg-gray-700"
        />
        <IconButton
          icon={<TbLogout className="text-red-500 ml-1" />}
          hoverColor="bg-red-500"
          onClick={() => {
            console.log("Logout clicked");
            navigate("/login");
          }}
        />
      </div>
    </div>
  );
}

export default ProjectNavbar;

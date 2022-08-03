import React, { useState } from "react";
import "../../assets/custom.css";
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from "../Common/Drawer";

export default function Header(noBackground) {
  return (
    <div className="flex pt-4 pb-4 xl:px-20 lg:px-24 md:px-10 px-4 relative items-center justify-between 2md:h-20.5 h-18 bg-white">
      <GiHamburgerMenu className="place-content-center ml-3 md:ml-60 mt-2 " />
    </div>
  );
}

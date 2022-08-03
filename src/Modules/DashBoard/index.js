import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../Common/Header";
import SideBar from "../Common/Drawer";
import DashBoard from "./dashBoard";

export default function ButtonAppBar() {
  return (
    <Box>
      <Header />
      <SideBar />
      <DashBoard />
    </Box>
  );
}

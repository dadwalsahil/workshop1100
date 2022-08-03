import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../Common/Header";
import SideBar from "../Common/Drawer";
import Events from "./events";

export default function ButtonAppBar() {
  return (
    <Box>
      <Header />
      <SideBar />
      <Events />
    </Box>
  );
}

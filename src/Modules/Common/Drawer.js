// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "../../assets/custom.css";

import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

export default function SideBar() {
  const pathName = window.location.pathname?.split("/");
  const currSection = pathName?.length ? pathName[pathName.length - 1] : "";

  return (
    <div>
      <Box>
        <Drawer
          className="hidden md:block w-254"
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <div className="px-16.5">
            <img
              src="/images/ticketyn-logo.svg"
              alt="Ticket Sold"
              className=" text-center w-29.5 h-16.5  "
            />
          </div>
          <List className="css-h4y409-MuiList-root">
            <ListItem button component={Link} to="/dashBoard">
              <ListItemIcon>
                {" "}
                <img
                  src="/images/dash-icon.svg"
                  alt="Ticket Sold"
                  className=" text-center ml-5"
                />
              </ListItemIcon>
              <ListItemText
                className={
                  currSection === "dashBoard"
                    ? "text-darkblack-50 font-OpenSansSemiBold"
                    : "text-grey-50"
                }
              >
                Dashboard
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/events">
              <ListItemIcon>
                {" "}
                <img
                  src="/images/events-icon.svg"
                  alt="Ticket Sold"
                  className=" text-center ml-5"
                />
              </ListItemIcon>
              <ListItemText
                className={
                  currSection === "events"
                    ? "text-darkblack-50 font-OpenSansSemiBold"
                    : "text-grey-50"
                }
              >
                Events
              </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/whiteList">
              <ListItemIcon>
                <img
                  src="/images/dash-icon.svg"
                  alt="Ticket Sold"
                  className=" text-center ml-5"
                />
              </ListItemIcon>
              <ListItemText
                className={
                  currSection === "whiteList"
                    ? "text-darkblack-50 font-OpenSansSemiBold"
                    : "text-grey-50"
                }
              >
                WhiteList
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </div>
  );
}

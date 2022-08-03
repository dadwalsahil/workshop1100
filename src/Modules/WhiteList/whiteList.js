//Importing the libraries
import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Badge, Tab } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function createData(organizer, event, eventType, revenue, ticketSold, status) {
  return { organizer, event, eventType, revenue, ticketSold, status };
}
//Main function
export default function WhiteList(onSubmit, handleChange, value) {
  const data = [
    {
      emailId: "jack@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:30 PM",
      duration: "1 hour",
    },
    {
      emailId: "john@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:00 PM",
      duration: "30 mins",
    },
    {
      emailId: "jack@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:30 PM",
      duration: "1 hour",
    },
    {
      emailId: "john@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:00 PM",
      duration: "30 mins",
    },
    {
      emailId: "jack@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:30 PM",
      duration: "1 hour",
    },
    {
      emailId: "john@gmail.com",
      firstEntry: "11:30 AM",
      lastEntry: "12:00 PM",
      duration: "30 mins",
    },
  ];
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  const rows = [
    createData(
      "John Doe",
      "Johndoe@gmail.com",
      "09958693963",
      "Community, Homepage",
      "200 / 500",
      " Published"
    ),
    createData(
      "Juan Dela Cruz",
      "Jdelacruz@gmail.com",
      "09958693963t",
      "Community, Homepage",
      "200 / 500",
      " Published"
    ),
    createData(
      "Samsung",
      "Buku 2022",
      "Venue",
      "Community, Homepage",
      "200 / 500",
      " Published"
    ),
    createData(
      "Maine Jaspeih",
      "Mainejaspeih@gmail.com",
      "Venue",
      "Community, Homepage",
      "200 / 500",
      " Published"
    ),
    createData(
      "Melanie moore",
      "Melaniemoore@gmail.com",
      "09958693963",
      "Community, Homepage",
      "200 / 500",
      " Published"
    ),
  ];

  return (
    <>
      <div className="bg-grey-100  font-OpenSansSemiBold text-ft22 p-12.5 ml-60">
        WhiteList
        <div className=" h-11.5 flex justify-between rounded-3xl  items-center w-100 bg-white border border-grey-200 mt-11">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className=" focus:outline-none w-100 ml-4"
              placeholder="Search"
              value={value}
              onChange={(ev) => handleChange("searchQuery", ev.target.value)}
            />
          </form>
          <img
            onClick={onSubmit}
            alt=""
            src="/images/ic-search.svg"
            className=" h-4 w-4 cursor-pointer"
          ></img>
        </div>
        <div className=" w-full mt-7.5">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Mobile Number</TableCell>
                  <TableCell>Features</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.organizer}
                    </TableCell>
                    <TableCell className="text-right">{row.event}</TableCell>
                    <TableCell>{row.eventType}</TableCell>
                    <TableCell>{row.revenue}</TableCell>
                    <TableCell>{row.ticketSold}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      );
    </>
  );
}

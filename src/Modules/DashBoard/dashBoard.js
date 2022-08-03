//Importing the libraries
import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import { TableData } from "../../common/constant";
import Chart from "../PieChart";

//Main function
export default function DashBoard() {
  const Event = ["Venue", "Online Event"];
  const options = Event.map((Event) => {
    return <option value={Event}>{Event}</option>;
  });
  const Published = ["Published", "Online Event"];
  const option = Published.map((Event) => {
    return <option value={Event}>{Event}</option>;
  });
  const Time = ["All Time", "Online Event"];
  const timeoption = Time.map((Event) => {
    return <option value={Event}>{Event}</option>;
  });

  return (
    <Row className=" overflow-hidden flex ml-0 md:ml-60 bg-grey-100 ">
      <Column className="w-full">
        <Column className="overflow-y-hidden h-full">
          <div className="p-2.5 md:p-12.5 ">
            <div className="flex text-ft22 font-OpenSansSemiBold text-left text-darkblack-50 justify-between items-center">
              Dashboard
              <div className="flex gap-4 ml-auto justify-between">
                <div className="bg-white h-11.25 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 px-1.75 py font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                  <select className="bg-white h-11.25 ml-5 text-ft1 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 lg:w-20 px-1.75  font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                    {options}
                  </select>
                </div>
                <div className="bg-white h-11.25 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 lg:w-20 px-1.75  font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                  <select className="bg-white h-11.25 ml-5 text-ft1 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 lg:w-20 px-1.75  text-sm font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                    {" "}
                    {option}
                  </select>
                </div>
                <div className="bg-white h-11.25 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 lg:w-20 px-1.75  font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                  <select className="bg-white h-11.25 ml-5 text-ft1 2xl:w-42.75 3xl:w-42.75 4xl:w-42.75 w-20 lg:w-20 px-1.75   font-OpenSansRegular text-darkblack-50 flex flex-row justify-between rounded-lg cursor-pointer">
                    {timeoption}
                  </select>
                </div>
              </div>
            </div>
            <div className="3xl:flex-row 4xl:flex-row flex-col mt-10  flex justify-between gap-7">
              <div className="bg-white w-full h-40 rounded-lg py-3 px-5">
                <div className="flex pt-6">
                  <div className="rounded-full  w-17.5 h-17.5">
                    <img src="/images/revenue-icon.png" alt="revenue" />
                  </div>
                  <div className="ml-7.5 pt-2">
                    <h1 className="text-ft18 text-darkblack-50 font-OpenSansRegular">
                      Revenue
                    </h1>
                    <p className="mt-1 text-ft24 font-OpenSansSemiBold text-darkBlue-50 ">
                      $400,642
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full h-40 rounded-lg py-3 px-5">
                <div className="flex pt-6">
                  <div className="rounded-full  w-17.5 h-17.5">
                    <img src="/images/attendees-icon.png" alt="revenue" />
                  </div>
                  <div className="ml-7.5 pt-2">
                    <h1 className="text-ft18 text-darkblack-50 font-OpenSansRegular">
                      Total Attendees
                    </h1>
                    <p className="mt-1 text-ft24 font-OpenSansSemiBold text-darkblack-50 ">
                      2,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-full h-40 rounded-lg py-3 px-5">
                <div className="flex pt-6">
                  <div className="rounded-full bg-blue-395FF1 w-17.5 h-17.5">
                    <img src="/images/tickets-icon.png" alt="revenue" />
                  </div>
                  <div className="ml-7.5 pt-2">
                    <h1 className="text-ft18 text-darkblack-50 font-OpenSansRegular">
                      Tickets Sold
                    </h1>
                    <p className="mt-1 text-ft24 text-2xl font-OpenSansSemiBold text-darkblack-50 ">
                      2,023
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row  mt-12.5 justify-between gap-7 overflow-hidden">
              <div className="">
                <h1 className="font-OpenSansSemiBold text-darkblack-50 ">
                  Splits per contributors
                </h1>
                <div className=" h-100.25 bg-white rounded-lg mt-10 py-10 flex justify-center pr-19.75 items-center w-123.75 overflow-hidden">
                  <div className="flex">
                    <Chart className="" />
                    <div className="ml-10 my-auto items-center">
                      <div className="flex items-center mb-1.5">
                        <div className="rounded-full w-2.5 h-2.5 mr-1 bg-darkBlue-50"></div>
                        <h1 className="text-ft10  font-OpenSansRegular">
                          Organizer
                        </h1>
                      </div>
                      <h1 className="text-base text-darkblack-50 font-OpenSansSemiBold mb-5">
                        $200,321
                      </h1>
                      <div className="flex items-center mb-1.5">
                        <div className="rounded-full w-2.5 h-2.5 mr-1 bg-grey-150"></div>
                        <h1 className="text-ft10  font-OpenSansRegular">
                          Artist
                        </h1>
                      </div>
                      <h1 className="text-base text-darkblack-50 font-OpenSansSemiBold mb-5">
                        $120,192
                      </h1>
                      <div className="flex items-center mb-1.5">
                        <div className="rounded-full w-2.5 h-2.5 mr-1 bg-grey-150"></div>
                        <h1 className="text-ft10 text-gray-949CAE font-OpenSansRegular">
                          Promoter
                        </h1>
                      </div>
                      <h1 className="text-base text-darkblack-50 font-OpenSansSemiBold mb-5">
                        $80,092
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-auto 4xl:w-50">
                <h1 className="ft-OpenSansSemibold text-darkblack-50 text-lg">
                  Sales by Event
                </h1>
                <div className=" h-100.25 bg-white rounded-lg mt-10  overflow-y-hidden ">
                  <table className="table min-w-full whitespace-nowrap">
                    <thead className=" border-1 bg-white border-grey-150 sticky top-0">
                      <tr className="flex ">
                        <th className="flex w-2/5 py-5 pl-10 font-OpenSansSemiBold  text-darkblack-50 whitespace-nowrap	">
                          Event Name
                          <img
                            src="/images/sort.png"
                            alt="sort"
                            className="ml-3 inline w-6 h-8 cursor-pointer"
                          />
                        </th>
                        <th className="flex w-2/5 py-5 pl-5 ft-OpenSansSemibold text-sm text-darkblack-50 ml-10 whitespace-nowrap	">
                          Ticket Sold
                          <img
                            src="/images/sort.png"
                            alt="sort"
                            className="ml-3 inline w-6 h-8 cursor-pointer"
                          />
                        </th>
                        <th className="flex w-2/5 py-5 pl-5 pr-5 ft-OpenSansSemibold text-sm text-darkblack-50 whitespace-nowrap	">
                          Revenue
                          <img
                            src="/images/sort.png"
                            alt="sort"
                            className="ml-3 inline w-6 h-8 cursor-pointer"
                          />
                        </th>
                      </tr>
                    </thead>
                    <div>
                      <tbody className="table min-w-full ">
                        <tr className="border-b flex border-2 border-grey-150 gap-10">
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            Hard Summer Music Festival
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            250/500
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            $200,321
                          </td>
                        </tr>
                        <tr className="border-b flex border-1 border-grey-150 gap-10">
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            When we were you
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            370/500
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            $120,192
                          </td>
                        </tr>
                        <tr className="border-b flex border-1 border-grey-150 gap-10">
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            Buku 2022
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            400/500
                          </td>
                          <td className="py-5 pl-10 w-3/1 text-sm ft-OpenSansRegular text-darkblack-50 truncate">
                            $80,092
                          </td>
                        </tr>
                      </tbody>
                      ​
                    </div>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Column>
      </Column>
    </Row>
  );
}

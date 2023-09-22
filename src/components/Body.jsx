import React, { useState } from "react";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import profile from "../assets/profile.jpg";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import data from "../assets/data.json";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";

function Body() {
  var rootElement = document.documentElement
  
  const [mappedData, setMappedData] = useState(() => {
    return data.map((item) => {
      item.matches = true;
      return item;
    });
  });
  const [rightData, setRightData] = useState(data[0]);
  const [specials, setSpecials] = useState("popular");
  const [selectedDate, setSelectedDate] = useState(1);
  const [currentDay, setCurrentDay] = useState(rightData.day01);

  return (
    <div className="mx-24 max-lg:mx-2">
      {/* Search Categories and Event Filters */}
      <div className="flex mt-7 mb-5 justify-between max-lg:hidden">
        <div className="flex text-sm items-center p-1 border-2 border-gray-200 rounded-md space-x-2.5 px-2 bg-white text-gray-500">
          <TuneOutlinedIcon />
        </div>
        <div>
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <SearchIcon className="text-gray-500" />
              </div>
              <input
                className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white"
                placeholder="search events..."
                onChange={(e) => {
                  setMappedData(() => {
                    return data.map((item) => {
                      if (
                        !item.title.toLocaleLowerCase().includes(e.target.value)
                      ) {
                        item.matches = false;
                      } else {
                        item.matches = true;
                      }
                      return item;
                    });
                  });
                }}
              />
            </div>
          </form>
        </div>
        <div className="flex text-sm items-center p-1 border-2 border-gray-200 bg-gray-100 rounded-md">
          <p
            className={`p-2 mx-1 rounded cursor-pointer ${
              specials === "popular" ? "bg-white" : ""
            }`}
            onClick={() => {
              setSpecials("popular");
            }}
          >
            Popular
          </p>
          <p
            className={`p-2 mx-1 rounded cursor-pointer ${
              specials === "recent" ? "bg-white" : ""
            }`}
            onClick={() => {
              setSpecials("recent");
            }}
          >
            Recent
          </p>
          <p
            className={`p-2 mx-1 rounded cursor-pointer ${
              specials === "eventdeadline" ? "bg-white" : ""
            }`}
            onClick={() => {
              setSpecials("eventdeadline");
            }}
          >
            Event deadline
          </p>
        </div>
        <div className="flex text-sm items-center p-1 border-2 border-gray-200 rounded-md space-x-2.5 px-2 bg-white">
          <CalendarMonthOutlinedIcon className="p-0.5" />
          <p className="text-base font-medium">Jan 6 - Jan 13</p>
          <KeyboardArrowDownOutlinedIcon className="cursor-pointer" />
        </div>
        <div className="flex text-sm items-center p-1 border-2 border-gray-200 rounded-md space-x-2.5 px-2 bg-white">
          <AttachMoneyOutlinedIcon />
          <p className="text-base font-medium">Fee</p>
          <KeyboardArrowDownOutlinedIcon className="cursor-pointer" />
        </div>
        <div className="flex text-sm items-center p-1 border-2 border-gray-200 rounded-md space-x-2.5 px-2 bg-white">
          <PodcastsOutlinedIcon />
          <p className="text-base font-medium">Event Mode</p>
          <KeyboardArrowDownOutlinedIcon className="cursor-pointer" />
        </div>
      </div>
      {/* Event Card Info */}
      <div className="max-lg:mt-4 lg:grid lg:grid-cols-3 flex flex-col-reverse">
        {/* Left Part Card */}
        <div>
          {mappedData.map((item) => {
            if (item.matches) {
              return (
                <div
                  key={item.id}
                  onClick={() => setRightData(item)}
                  className="p-1 bg-white mr-5 border-2 border-gray-200 rounded-lg px-4 py-5 mb-2 cursor-pointer max-lg:mt-5 max-lg:mr-0 max-lg:text-sm"
                >
                  <h2 className="text-xl font-bold mb-3">
                    {item.title} {item.matches}
                  </h2>
                  <div className="flex text-sm text-gray-600 space-x-3 max-sm:text-xs">
                    <div className="flex">
                      <PinDropOutlinedIcon className="p-0.5" />
                      <p className="pt-0.5">{item.place}</p>
                    </div>
                    <div className="flex">
                      <CalendarTodayOutlinedIcon className="p-0.5" />
                      <p className="pt-0.5">{item.date}</p>
                    </div>
                    <div className="flex">
                      <AccessTimeOutlinedIcon className="p-0.5" />
                      <p className="pt-0.5">{item.time}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2">
                    <div className="flex">
                      <img
                        src={profile}
                        className="rounded-full w-10 m-1 mr-3"
                        alt="profile"
                      />
                      <div>
                        <h4 className="font-semibold">{item.author}</h4>
                        <p className="text-xs font-semibold text-green-500">
                          Publication
                        </p>
                      </div>
                    </div>
                    <div className="flex text-xs text-gray-600 ml-auto mr-4">
                      <AccessTimeOutlinedIcon className="p-0.5" />
                      <p className="pt-1">{item.period}</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* Right Part Card */}
        <div className="col-span-2 p-1 pl-5 bg-white border-2 border-gray-200 rounded-lg px-4 py-5">
          <div className="p-1 flex justify-between">
            <h1 className="text-3xl font-semibold"
            onClick={rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })} 
            >{rightData.title}</h1>
            <div className="flex text-right w-100 space-x-6 max-sm:space-x-2 px-5">
              <BookmarkBorderOutlinedIcon
                className="border-2 border-gray-300 text-gray-500 rounded-md p-1 cursor-pointer"
                sx={{ width: 35, height: 35 }}
              />
              <ShareOutlinedIcon
                className="border-2 border-gray-300 text-gray-500 rounded-md p-1 cursor-pointer"
                sx={{ width: 35, height: 35 }}
              />
              <MoreVertOutlinedIcon
                className="border-2 border-gray-300 text-gray-500 rounded-md p-1 cursor-pointer"
                sx={{ width: 35, height: 35 }}
              />
            </div>
          </div>
          <img
            src={rightData.banner}
            className="w-[97%] rounded-lg mt-8"
            alt="banner"
          />
          <div className="flex mt-5 space-x-3 max-sm:hidden">
            <div className="flex text-gray-600 py-1 pl-1 pr-10 rounded-full bg-gray-100">
              <FiberManualRecordIcon className="p-1" />
              <p className="text-sm font-medium pt-0.5">Technology</p>
            </div>
            <div className="flex text-gray-600 py-1 pl-1 pr-10 rounded-full bg-gray-100">
              <FiberManualRecordIcon className="p-1" />
              <p className="text-sm font-medium pt-0.5">Movies</p>
            </div>
            <div className="flex text-gray-600 py-1 pl-1 pr-10 rounded-full bg-gray-100">
              <FiberManualRecordIcon className="p-1" />
              <p className="text-sm font-medium pt-0.5">Games</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-2 max-sm:grid-cols-1 max-sm:gap-x-1">
            <div className="flex mt-8">
              <CalendarMonthOutlinedIcon
                sx={{ width: 30, height: 30 }}
                className="m-5 max-sm:m-2"
              />
              <div>
                <p className="text-sm font-semibold mb-3">Date and time</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.dateandtime}
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <HeadsetMicOutlinedIcon
                sx={{ width: 30, height: 30 }}
                className="m-5 max-sm:m-2"
              />
              <div>
                <p className="text-sm font-semibold mb-3">Speaker</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.speaker}
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <PodcastsOutlinedIcon
                sx={{ width: 30, height: 30 }}
                className="m-5 max-sm:m-2"
              />
              <div>
                <p className="text-sm font-semibold mb-3">Event mode</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.event_mode}
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <MapOutlinedIcon sx={{ width: 30, height: 30 }} className="m-5 max-sm:m-2" />
              <div>
                <p className="text-sm font-semibold mb-3">Location</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.location}
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <TranslateOutlinedIcon
                sx={{ width: 30, height: 30 }}
                className="m-5 max-sm:m-2"
              />
              <div>
                <p className="text-sm font-semibold mb-3">Language</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.language}
                </p>
              </div>
            </div>
            <div className="flex mt-8">
              <AttachMoneyOutlinedIcon
                sx={{ width: 30, height: 30 }}
                className="m-5 max-sm:m-2"
              />
              <div>
                <p className="text-sm font-semibold mb-3">Fee</p>
                <p className="text-xs text-gray-500 font-medium">
                  {rightData.fee}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-3 mb-5 max-sm:my-7">
            <button className="bg-orange-500 py-2 px-5 text-white rounded-md text-sm hover:bg-red-600">
              Register Event
            </button>
          </div>
          <pre className="mr-5 text-sm whitespace-pre-wrap">
            {rightData.summary}
          </pre>
          <div className="grid grid-cols-2 mt-10 mx-5 mb-5 items-center max-sm:grid-cols-1 max-sm:mx-1 max-sm:mt-5">
            <div className="flex max-sm:mx-auto items-center">
              <img
                src={require('../assets/university.png')}
                className="w-[80px] mr-5 max-sm:w-[50px] max-sm:mr-2"
                alt="university"
              />
              <div className="">
                <p className="text-gray-800">Harvard University</p>
                <p className="text-gray-700">Computer science </p>
              </div>
            </div>
            <div className="text-right max-sm:my-3 max-sm:text-center">
              <button className="bg-orange-500 py-1 px-10 text-white rounded-md text-xs hover:bg-red-600">
                Follow
              </button>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-5">Event Schedule</h2>
          <div className="grid grid-cols-3 gap-x-6 max-sm:gap-x-2">
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedDate(1);
                setCurrentDay(rightData.day01);
              }}
            >
              <h4
                className={`text-lg font-semibold ${
                  selectedDate === 1 ? "text-orange-600" : "text-gray-400"
                }`}
              >
                Day 01
              </h4>
              <p
                className={`text-lg font-semibold text-xs ${
                  selectedDate === 1 ? "text-orange-300" : "text-gray-300"
                }`}
              >
                {rightData.day01date}
              </p>
              <hr
                className={`mt-3 border-y-2 ${
                  selectedDate === 1 ? "border-orange-600" : "border-red-200"
                }`}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedDate(2);
                setCurrentDay(rightData.day02);
              }}
            >
              <h4
                className={`text-lg font-semibold ${
                  selectedDate === 2 ? "text-orange-600" : "text-gray-400"
                }`}
              >
                Day 02
              </h4>
              <p
                className={`text-lg font-semibold text-xs ${
                  selectedDate === 2 ? "text-orange-300" : "text-gray-300"
                }`}
              >
                {rightData.day02date}
              </p>
              <hr
                className={`mt-3 border-y-2 ${
                  selectedDate === 2 ? "border-orange-600" : "border-red-200"
                }`}
              />
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                setSelectedDate(3);
                setCurrentDay(rightData.day03);
              }}
            >
              <h4
                className={`text-lg font-semibold ${
                  selectedDate === 3 ? "text-orange-600" : "text-gray-400"
                }`}
              >
                Day 03
              </h4>
              <p
                className={`text-lg font-semibold text-xs ${
                  selectedDate === 3 ? "text-orange-300" : "text-gray-300"
                }`}
              >
                {rightData.day03date}
              </p>
              <hr
                className={`mt-3 border-y-2 ${
                  selectedDate === 3 ? "border-orange-600" : "border-red-200"
                }`}
              />
            </div>
          </div>
          <div className="mt-5 border-2 border-gray-200 rounded-lg">
            <table className="table w-full">
              <thead className="text-left bg-red-100">
                <tr className="border-b">
                  <th className="py-5 pl-3">Time</th>
                  <th className="py-5 pl-3">Content</th>
                  <th className="py-5 pl-3 max-xl:pr-3">Speakers</th>
                </tr>
              </thead>
              <tbody>
                {currentDay.map((item) => (
                  <tr className="border-b" key={item.id}>
                    <td className="text-xs py-5 pl-3 text-x">{item.time}</td>
                    <td className="py-5 pl-3 text-sm whitespace-pre-wrap max-w-sm">{item.content}</td>
                    <td className="py-5 pl-3">
                      <div className="flex pr-3 max-xl:flex-col max-xl:pr-1">
                        <img src={item.speakerimage} className="w-10 rounded-full mr-3 max-xl:mb-2 max-xl:mx-auto max-xl:w-8" />
                        <div className="text-xs">
                          <p className="font-bold">{item.speakername}</p>
                          <p className="text-gray-500 max-xl:text-xs">@{item.speakername}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;

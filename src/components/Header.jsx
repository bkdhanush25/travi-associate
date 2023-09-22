import React, { useState } from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import profile from "../assets/profile.jpg";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [nav, setNav] = useState("event");
  const [hidden,setHidden]=useState(1);
  return (
    <>
      <div className="grid grid-cols-3 px-6 py-4 rounded-md border-b-2 shadow-lg bg-white justify-between">
        <div class="sm:hidden"
         onClick={() => {
          if(hidden===1){
            setHidden(0);
          }else{
            setHidden(1);
          }
            }}
        >
          <div>
            <MenuIcon />
          </div>
        </div>
        <div>
          <p className="tracking-widest font-semibold font-bold text-orange-600 text-2xl">
            LOGO
          </p>
        </div>
        <div className="flex mx-auto space-x-6 text-sm font-semibold text-gray-500 pt-2 max-sm:hidden">
          <p
            className={`cursor-pointer ${
              nav === "event"
                ? "underline decoration-2 decoration-orange-600 underline-offset-4"
                : ""
            }`}
            onClick={() => {
              setNav("event");
            }}
          >
            Events
          </p>
          <p
            className={`cursor-pointer ${
              nav === "organization"
                ? "underline decoration-2 decoration-orange-600 underline-offset-4"
                : ""
            }`}
            onClick={() => {
              setNav("organization");
            }}
          >
            Organization
          </p>
          <p
            className={`cursor-pointer ${
              nav === "about"
                ? "underline decoration-2 decoration-orange-600 underline-offset-4"
                : ""
            }`}
            onClick={() => {
              setNav("about");
            }}
          >
            About
          </p>
        </div>
        <div className="flex ml-auto space-x-3 font-light text-gray-500">
          <WbSunnyOutlinedIcon className="pt-1" />
          <NotificationsOutlinedIcon className="pt-1" />
          <img src={profile} className="rounded-full w-7" alt="profile" />
        </div>
      </div>

      <div className={`block bg-white sm:hidden cursor-pointer ${hidden === 1 ? "hidden" : ""}`}>
        <p
          className={`cursor-pointer text-sm pl-[6vw] py-2 border-b-2 border-gray-200 ${
            nav === "event"
              ? "underline decoration-2 decoration-orange-600 underline-offset-4"
              : ""
          }`}
          onClick={() => {
            setNav("event");
          }}
        >
          Events
        </p>
        <p
          className={`cursor-pointer text-sm pl-[6vw] py-2 border-b-2 border-gray-200 ${
            nav === "organization"
              ? "underline decoration-2 decoration-orange-600 underline-offset-4"
              : ""
          }`}
          onClick={() => {
            setNav("organization");
          }}
        >
          Organization
        </p>
        <p
          className={`cursor-pointer text-sm pl-[6vw] py-2 border-b-2 border-gray-200 ${
            nav === "about"
              ? "underline decoration-2 decoration-orange-600 underline-offset-4"
              : ""
          }`}
          onClick={() => {
            setNav("about");
          }}
        >
          About
        </p>
      </div>
    </>
  );
}

export default Header;

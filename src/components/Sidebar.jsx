import React from "react";
import "./SlideBar.css";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdHistory } from "react-icons/md";
import { PiUserSquareThin } from "react-icons/pi";
import { IoGameControllerOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio, SiYoutubekids, SiYoutubemusic, SiTrendmicro, SiStylelint } from "react-icons/si";
import { MdOutlineWatchLater, MdPodcasts } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { BiVideo } from "react-icons/bi";

function Sidebar() {
  const sidebarItems = [
    { id: 1, name: "Home", icon: <GoHome /> },
    { id: 2, name: "Shorts", icon: <SiYoutubeshorts /> },
    { id: 3, name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  ];
  const sidebarItems2 = [
    { id: 1, name: "Your Channel", icon: <PiUserSquareThin /> },
    { id: 2, name: "History", icon: <MdHistory /> },
    { id: 3, name: "Playlists", icon: <MdOutlineSubscriptions /> },
    { id: 4, name: "Your Videos", icon: <BiVideo /> },
    { id: 5, name: "Watch later", icon: <MdOutlineWatchLater /> },
    { id: 6, name: "Liked videos", icon: <AiOutlineLike /> },
  ];
  const sidebarItems3 = [
    { id: 1, name: "Trending", icon: <SiTrendmicro /> },
    { id: 2, name: "Shopping", icon: <HiOutlineShoppingBag /> },
    { id: 3, name: "Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "Films", icon: <PiFilmSlateLight /> },
    { id: 5, name: "Live", icon: <CgMediaLive /> },
    { id: 6, name: "Gaming", icon: <IoGameControllerOutline /> },
    { id: 7, name: "News", icon: <FaRegNewspaper /> },
    { id: 8, name: "Sport", icon: <TfiCup /> },
    { id: 9, name: "Courses", icon: <SiStylelint /> },
    { id: 10, name: "Fashion & beauty", icon: <PiLightbulbLight /> },
    { id: 11, name: "Podcasts", icon: <MdPodcasts /> },
  ];
  const sidebarItems4 = [
    { id: 1, name: "YouTube Premium", icon: <FaYoutube /> },
    { id: 2, name: "YouTube Studio", icon: <SiYoutubestudio /> },
    { id: 3, name: "YouTube Music", icon: <SiYoutubemusic /> },
    { id: 4, name: "YouTube Kids", icon: <SiYoutubekids /> },
  ];

  return (
    <div className="sidebar px-6 overflow-y-scroll overflow-x-hidden">
      {/* Home Section */}
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <div key={item.id} className="sidebar-item">
            <div className="sidebar-icon">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr className="divider" />
      {/* You Section */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center space-x-2">
          <h1>You</h1>
          <FaChevronRight />
        </div>
        {sidebarItems2.map((item) => (
          <div key={item.id} className="sidebar-item">
            <div className="sidebar-icon">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr className="divider" />
      {/* Explore Section */}
      <div className="mt-4 space-y-3">
        <h1 className="font-semibold">Explore</h1>
        {sidebarItems3.map((item) => (
          <div key={item.id} className="sidebar-item">
            <div className="sidebar-icon">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <br />
      <hr className="divider" />
      {/* More Section */}
      <div className="mt-4 space-y-3">
        <h1 className="font-semibold">More From YouTube</h1>
        {sidebarItems4.map((item) => (
          <div key={item.id} className="sidebar-item">
            <div className="sidebar-icon text-red-500">{item.icon}</div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <hr className="divider" />
      <br />
      <span className="text-xs text-gray-600 font-semibold">
        About Press Copyright <br /> Contact us Creators <br /> Advertise
        Developers <br />
        <p className="mt-3">Terms Privacy Policy & Safety</p> How YouTube works{" "}
        <br /> Test new features
      </span>
      <br />
      <p className="text-xs text-gray-500 mt-3">
        <a href="https://www.linkedin.com/in/sujoy-ghosal-739928222" className="hover:underline">
        © 2024 Sujoy Ghosal - "Coding is not just about what you know; it's about what you can create."
        </a>
      </p>

    </div>
  );
}

export default Sidebar;

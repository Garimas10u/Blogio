import {React, useState} from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data.js";
import Auth from "./Auth/Auth.jsx";
import logo from "../../assets/logo.png"

const DemoHeader = () => {
   const[modal, setModal]=useState(false);

  return (
    <header
      className="border-b border-black sticky top-0 z-50 bg-white">
      <div className="size h-[70px] flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="h-[2.5rem]"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((link, i) => (
              <Link key={i} to={link.path}>
                {link.title}
              </Link>
            ))}
          </div>
          <div className="relative">
            <button
            onClick={()=>setModal(true)}
              className="hidden text-sm sm:flex items-center gap-5">
              Sign In
              <Auth modal={modal} setModal={setModal} />
            </button>
            
          </div>
          <button
          onClick={()=>setModal(true)}
            className="text-white rounded-full px-3 p-2 text-sm font-medium bg-purple-950">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
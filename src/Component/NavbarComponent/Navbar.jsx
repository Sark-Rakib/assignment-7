import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar max-w-[1310px] mx-auto flex justify-between items-center p-4">
        <a className="font-bold text-xl">CS — Ticket System</a>

        <div className="hidden md:flex items-center gap-6">
          <span>Home</span>
          <span>FAQ</span>
          <span>Changelog</span>
          <span>Blog</span>
          <span>Download</span>
          <span>Contact</span>

          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-[12px] px-[16px] rounded text-white font-bold">
            + New Ticket
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="text-3xl focus:outline-none"
            >
              &#9776;
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded shadow-lg flex flex-col z-50">
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  Home
                </span>
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  FAQ
                </span>
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  Changelog
                </span>
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  Blog
                </span>
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  Download
                </span>
                <span className="p-2 hover:bg-gray-200 cursor-pointer">
                  Contact
                </span>
              </div>
            )}
          </div>

          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-3 rounded text-white font-bold text-sm">
            + New Ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

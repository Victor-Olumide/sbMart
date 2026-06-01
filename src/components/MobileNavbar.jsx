import React from 'react'
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function MobileNavbar() {
      const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
        <div className="md:hidden flex p-4 bg-white text-black items-center justify-between border-b border-gray-200">
          <a href="#" className="p-4">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </a>

            {openMenu? (
              <button onClick={() => setOpenMenu(false)} className="p-4">
                <IoMdClose className="w-10 h-10 text-[#f47c31]" />
              </button>
            ) : (
          <button onClick={() => setOpenMenu(true)} className="p-4">
            <GiHamburgerMenu className="w-10 h-10 text-[#f47c31]" />
          </button>
            )}
        </div>

        {/* Mobile navbar menu */}
        {openMenu && (
          <div className="bg-[#f47c31] p-8 text-xl font-semibold text-white  flex flex-col gap-4 min-h-screen justify-">
            

            <a className="hover:bg-white/60 hover:text-black py-2" href="#">Home</a>
            <a className="hover:bg-white/60 hover:text-black py-2" href="#">Products</a>
            <a className="hover:bg-white/60 hover:text-black py-2" href="#">About</a>
            <a className="hover:bg-white/60 hover:text-black py-2" href="#">Contact</a>

          </div>
        )}
    </div>
  )
}

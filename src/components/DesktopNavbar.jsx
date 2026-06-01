import React from 'react'

export default function DesktopNavbar() {
  return (
    <div>
        <div className="hidden md:flex bg-white text-black p-4 flex-row items-center justify-evenly border-b border border-gray-200">
           <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
          </a>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
    </div>
  )
}

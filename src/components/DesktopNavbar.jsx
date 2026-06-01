import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

export default function DesktopNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname;

  return (

    <div>
        <div className="hidden md:flex bg-white text-black p-4 flex-row items-center justify-evenly border-b border border-gray-200">
           <a href="/">
          <img src="/logo.png" alt="Logo" className="h-10" />
          </a>

          <button onClick={() => navigate('/')} className={path === '/' ? 'text-[#f47c31] font-semibold' : 'text-black'}>
            Home
          </button>
          <button onClick={() => navigate('/products')} className={path === '/products' ? 'text-[#f47c31] font-semibold' : 'text-black'}>
            Products
          </button>
          <button onClick={() => navigate('/about')} className={path === '/about' ? 'text-[#f47c31] font-semibold' : 'text-black'}>
            About
          </button>
          <button onClick={() => navigate('/contact')} className={path === '/contact' ? 'text-[#f47c31] font-semibold' : 'text-black'}>
            Contact
          </button>
        </div>
    </div>
  )
}

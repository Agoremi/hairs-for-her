import { NavLink, Link } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import Logo from "../assets/Logo.png";


export default function Header(){

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled down more than 10 pixels
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach listener on mount
    window.addEventListener('scroll', handleScroll);

    // Clean up listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <header className={`sticky top-0 z-50 w-full bg-white shadow-xs text-black py-1 px-5 flex items-center justify-between lg:px-15 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-lg border-b border-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
>
          <img
            src={Logo}
            alt="Hairs For Her"
            className="w-18 h-auto object-contain"
          />

            <ul className="hidden text-sm tracking-wide font-outfit space-x-4 text-gray-800 lg:flex">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <button className="border border-black font-montserrat px-4 text-[11px] font-semibold tracking-widest py-2 hidden items-center gap-2 shadow-md lg:flex">
                ORDER ON WHATSAPP
                <i class="fa-brands fa-whatsapp"></i>
            </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            >
            <span
            className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${
            isMenuOpen ? "rotate-45" : "-translate-y-1.5"
           }`}
           />

           <span
          className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
          />

           <span
           className={`absolute h-0.5 w-5 bg-black transition-all duration-300 ${
           isMenuOpen ? "-rotate-45" : "translate-y-1.5"
           }`}
          />
          </button>

        {isMenuOpen && (                                          
        <div className="fixed inset-0 z-40 h-screen w-full bg-white"> {/* Mobile menu overlay */}
          <div className="flex h-full flex-col items-center justify-center">

            <img
            src={Logo}
            alt="Hairs For Her"
            className="w-30 h-auto object-contain"
            />

            <nav className="flex flex-col items-center gap-5 px-2.5 w-full text-[15px] montserrat tracking-wide text-gray-900 mt-10">
              <NavLink to="/" className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] items-center border py-2 px-4 flex justify-between rounded font-semibold w-full text-[12px] font-cormorant" : "flex text-gray-900 py-2 px-4 justify-between w-full rounded font-cormorant text-[12px] font-semibold hover:bg-gray-100"} onClick={() => setIsMenuOpen(false)}>
                HOME
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </NavLink>
              <NavLink to="/shop" className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] items-center border py-2 px-4 flex justify-between rounded font-semibold w-full text-[12px] font-cormorant" : "flex text-gray-900 py-2 px-4 justify-between w-full rounded font-cormorant text-[12px] font-semibold hover:bg-gray-100"} onClick={() => setIsMenuOpen(false)}>
                SHOP
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] items-center border py-2 px-4 flex justify-between rounded font-semibold w-full text-[12px] font-cormorant" : "flex text-gray-900 py-2 px-4 justify-between w-full rounded font-cormorant text-[12px] font-semibold hover:bg-gray-100"} onClick={() => setIsMenuOpen(false)}>
                ABOUT
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] items-center border py-2 px-4 flex justify-between rounded font-semibold w-full text-[12px] font-cormorant" : "flex text-gray-900 py-2 px-4 justify-between w-full rounded font-cormorant text-[12px] font-semibold hover:bg-gray-100"} onClick={() => setIsMenuOpen(false)}>
                CONTACT
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
              </NavLink>
            </nav>

            <button 
            className="border mt-8 border-black font-montserrat px-4 text-[11px] font-semibold tracking-widest py-2 items-center gap-2 shadow-md"
            >
                ORDER ON WHATSAPP
                <i class="fa-brands fa-whatsapp pl-2"></i>
            </button>

            <div className="flex mt-7.5 items-center space-x-10"> {/* Icons container */}
                            <div className="flex items-center justify-center shadow-xs text-[13px] p-3 rounded-full text-white">
                               <a href="https://www.instagram.com/hairsforher" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram text-black"></i>
                                </a>
                            </div>
                            <div className="flex items-center justify-center shadow-xs text-[13px] p-3 rounded-full text-white">
                            <a href="https://www.tiktok.com/@hairsforher" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-tiktok text-black"></i>
                            </a>
                            </div>
                            <div className="flex items-center justify-center shadow-xs text-[13px] p-3 rounded-full text-white">
                            <a href="https://wa.me/2349130422775" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-whatsapp text-black"></i>
                            </a>
                            </div>
                        </div>

          </div>
       </div>
)}
        </header>

        
    )
}
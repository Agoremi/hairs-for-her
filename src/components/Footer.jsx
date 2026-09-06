import { Link } from "react-router-dom";
import BlackLogo from "../assets/black-img.png";

export default function Footer(){
    return(
        <footer className="bg-black pt-5 text-white relative overflow-x-hidden lg:pt-2.5">
          <div className="relative z-20 px-5 pb-5 pt-4 flex flex-col lg:px-15 lg:pt-8">
            <div className="flex flex-col gap-10 items-stretch justify-between w-full lg:flex-row">
            <div className="flex-1 bg-black w-full self-stretch lg:border-r lg:border-b-0">
                <img src={BlackLogo} alt="Hairs for her logo" className="w-18 h-auto" />
            </div>

            <div className="flex-1 bg-black w-full self-stretch text-white lg:border-r lg:border-b-0">
                <h1 className="text-sm font-semibold font-montserrat text-gray-200 mb-2 tracking-widest">DISCOVER</h1>
                <ul className="space-y-3 text-gray-300">
                    <li><Link to="/" className="text-sm font-outfit">Home</Link></li>
                    <li><Link to="/shop" className="text-sm font-outfit">Shop</Link></li>
                    <li><Link to="/about" className="text-sm font-outfit">About</Link></li>
                    <li><Link to="/contact" className="text-sm font-outfit">Contact</Link></li>
                </ul>
            </div>
            <div className="flex-1 bg-black w-full self-stretch text-white">
                <h1 className="text-sm font-semibold font-montserrat text-gray-200 mb-2 tracking-widest">LET'S CONNECT</h1>
                <ul className="space-y-5 pt-1 text-gray-300">
                    <li>
                        <div className="flex items-center space-x-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg></span> <p className="text-sm font-outfit">Port Harcourt, Nigeria</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center space-x-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg></span> <p className="text-sm font-outfit">+234 801 234 5678</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center space-x-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></span> <p className="text-sm font-outfit">info@hairsforher.com</p>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center space-x-7.5 lg:space-x-10">
                            <div className="flex items-center bg-black py-2 px-1.5 rounded-full text-black">
                               <a href="https://www.instagram.com/hairsforher" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-instagram text-white text-lg"></i>
                                </a>
                            </div>
                            <div className="flex items-center bg-black py-2 px-1.5 rounded-full text-black">
                            <a href="https://www.tiktok.com/@hairsforher" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-tiktok text-white text-lg"></i>
                            </a>
                            </div>
                            <div className="flex items-center bg-black py-2 px-1.5 rounded-full text-black">
                            <a href="https://wa.me/2349130422775" target="_blank" rel="noopener noreferrer">
                                <i class="fa-brands fa-whatsapp text-white text-lg"></i>
                            </a>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
          </div>

            <div className="flex gap-4 flex-col items-center justify-center mt-5 lg:mt-8">
              <hr className="w-full" />
              <p className="text-xs text-gray-200">© 2026 Hairs For Her. All rights reserved.</p>
            </div>
          </div>
        </footer>
    )
}
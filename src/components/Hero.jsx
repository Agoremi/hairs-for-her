import Img from "../assets/hero5.png";
import { useNavigate } from "react-router-dom";

export default function Hero(){

   const navigate = useNavigate();

    return (
    <div className="flex-1 flex-col flex items-center w-full border border-gray-500 lg:flex-row lg:border-gray-600">
        <div className="flex-1 font-outfit w-full flex flex-col items-center justify-center h-full"> {/*First info div start*/}
            <div className="gap-3 py-5 flex items-center justify-center flex-col lg:text-left lg:gap-7.5 lg:py-0 lg:items-start lg:justify-start lg:flex-1 lg:px-10"> {/*text div*/}
            <div className="flex gap-2 items-center animate-heroFadeUp [animation-delay:100ms]"> {/*title div*/}
                <span className="h-px w-3 bg-black lg:w-7"></span>
                <p className="text-[9px] font-montserrat tracking-widest font-semibold lg:text-xs">OUR COLLECTION</p>
                <span className="h-px w-3 bg-black lg:w-7"></span>
            </div>

            <h1 className="text-[27px] text-gray-800 font-playfair [animation-delay:250ms] animate-heroFadeUp tracking-wide lg:text-5xl">Beautiful hair, <br></br>made for you.</h1>

            <p className="text-[11.5px] max-w-62 text-center [animation-delay:400ms] animate-heroFadeUp text-gray-700 lg:text-sm lg:text-left lg:max-w-sm">Premium hair extensions crafted to give you effortless style, confidence and a look you'll love.</p>

            <button
            onClick={() => navigate("/shop")} 
            className="border border-black [animation-delay:550ms] animate-heroFadeUp font-montserrat px-4 text-[10px] font-semibold tracking-widest py-1.5 flex items-center gap-2 shadow-md lg:self-start lg:py-2 lg:text-[11px]">
                SHOP COLLECTION
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </button>
            </div>
        </div> 

        <div className="flex-1 w-full h-full animate-heroImageReveal"> {/*Second image div start*/}
            <img src={Img} alt="About" className="w-full max-h-80 object-cover lg:max-h-full" />
        </div>
    </div>
    )
}
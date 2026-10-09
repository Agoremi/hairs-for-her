import Refund from "../assets/Refund.png";

export default function RefundHero() {
    return(
        <div className="flex-1 flex-col flex items-center w-full border border-gray-300 lg:flex-row lg:border-gray-500"> {/*Main div start*/}
                <div className="flex-1 font-outfit w-full flex flex-col items-center px-5 justify-center h-full"> {/*First info div start*/}
                 <div className="gap-2 py-5 flex items-center justify-center flex-col lg:text-left lg:gap-5 lg:py-0 lg:items-start lg:justify-start lg:flex-1 lg:px-10">
                    <div className="flex gap-2 items-center"> {/*title div*/}
                        <span className="h-px w-3 bg-black lg:w-7"></span>
                        <p className="text-[9px] font-montserrat tracking-widest font-semibold lg:text-xs">OUR POLICY</p>
                        <span className="h-px w-3 bg-black lg:w-7"></span>
                    </div>
                    <h1 className="text-[27px] text-gray-900 font-playfair tracking-wide lg:text-5xl">Refund <span className="block">Policy</span></h1>
                    <p className="text-[11.5px] max-w-62 text-center text-gray-800 lg:text-sm lg:text-left lg:max-w-sm">When we can refund your order, when we cannot and how to ask.</p>
                    <p className="text-[11px] text-gray-800 font-montserrat lg:text-xs">Last updated: October 4, 2026</p>
                 </div>
                </div>
                <div className="flex-1 w-full min-h-full lg:flex-1">
                    <img src={Refund} alt="Refund" className="w-full h-full object-contain" />
                </div>
            </div>
    )
}
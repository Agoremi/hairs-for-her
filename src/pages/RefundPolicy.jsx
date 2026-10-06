import RefundHero from "../components/RefundHero";

export default function RefundPolicy(){
return(
<section className="animate-heroFadeUp text-black flex flex-col items-center justify-center px-2 py-5 gap-5 overflow-hidden lg:px-15">

  <RefundHero />
  <div className="w-full h-full flex items-center justify-center py-5"> {/*Container div start*/}
    <div className="self-start w-full flex flex-col gap-3 flex-1 h-full p-4 lg:p-5"> {/*First info div start*/}
        <p className="text-[7px] tracking-widest font-montserrat font-semibold lg:text-[10px]">ON THIS PAGE</p>
        <ol className="list-decimal list-inside flex flex-col gap-3">
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">When we refund</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Used hair</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">How to request a refund</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">How refunds are paid</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Need help?</li>
        </ol>
    </div>
    <div className="w-full h-full p-3 flex flex-col flex-3 gap-10 lg:p-5">
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">1. When we refund</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">We will refund you in these situations:</p>
            <table className="w-full text-[8px] text-gray-700 font-outfit border border-gray-300 lg:text-xs">
                <thead className="bg-[#FBB6BC]">
                    <tr>
                        <th className="text-gray-800 text-[8px] font-outfit tracking-wider border border-gray-300 p-2 lg:text-[11px]">SITUATION</th>
                        <th className="text-gray-800 text-[8px] font-outfit tracking-wider border border-gray-300 p-2 lg:text-[11px]">REFUND ELIGIBILITY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 p-2">Product is damaged or defective</td>
                        <td className="border border-gray-300 p-2">Eligible</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">We packed the wrong order</td>
                        <td className="border border-gray-300 p-2">Eligible</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">Hair that has been opened and used</td>
                        <td className="border border-gray-300 p-2">Not Eligible</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 p-2">You paid for an item that is out of stock</td>
                        <td className="border border-gray-300 p-2">Eligible</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">2. Used hair</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">Please check your order carefully before opening, as we cannot accept returns or refunds on hair that has been opened or used.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">3. How to request a refund</h1>
            <ol className="list-decimal list-inside flex flex-col gap-3">
            <li className="text-[8px] text-gray-700 font-outfit lg:text-xs">Message us on whatsapp within 48 hours of receiving your order.</li>
            <li className="text-[8px] text-gray-700 font-outfit lg:text-xs">Send your reference number or any other proof of payment and a photo of the item.</li>
            <li className="text-[8px] text-gray-700 font-outfit lg:text-xs">We will review the item and process your refund if eligible.</li>
        </ol>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">4. How refunds are paid</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">Approved refunds are paid via bank transfer within 24 hours of approval.</p>
        </div>
        <div className="bg-gray-100 py-8 px-5 gap-3 flex flex-col">
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">5. Need help?</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">If you have any questions or concerns about your order, please contact our us and we will sort it out.</p>
            <a href="https://wa.me/+2349130422775" target="_blank" rel="noopener noreferrer">
                <button
                    className="border border-black bg-gray-100 text-black font-montserrat px-4 text-[8px] font-semibold tracking-widest py-2 flex items-center gap-2 shadow-xs lg:self-start lg:py-2 lg:text-[11px]">
                    CHAT ON WHATSAPP
                    <i class="fa-brands fa-whatsapp"></i>
                </button>
            </a>
        </div>
    </div>
  </div>
</section>      
)
}
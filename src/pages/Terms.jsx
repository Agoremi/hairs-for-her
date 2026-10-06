import TermsHero from "../components/TermsHero";
import { useNavigate } from "react-router-dom";

export default function Terms(){
    
const navigate = useNavigate();

return(
<section className="animate-heroFadeUp text-black flex flex-col items-center justify-center px-2 py-5 gap-5 overflow-hidden lg:px-15">

  <TermsHero />
  <div className="w-full h-full flex items-center justify-center py-5"> {/*Container div start*/}
    <div className="self-start w-full flex flex-col gap-3 flex-1 h-full py-5 px-2 lg:px-0"> {/*First info div start*/}
        <p className="text-[7px] tracking-widest font-montserrat font-semibold lg:text-[10px]">ON THIS PAGE</p>
        <ol className="list-decimal list-inside flex flex-col gap-3">
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Introduction</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Products and pricing</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Orders and payments</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Use of the website</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Intellectual property</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Limitations of liability</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Our other policies</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Changes to these terms</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Contact</li>
        </ol>
    </div>
    <div className="w-full h-full p-3 flex flex-col flex-3 gap-10 lg:p-5">
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">1. Introduction</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">By using hairsforher.com or placing an order with us, you agree to these terms. If you do not agree, please do not use the website.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">2. Products and pricing</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">We describe our products as accurately as we can, but colors and textures may look slightly different on your screen. Products are subject to availability. Prices are in Naira and may change without notice.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">3. Orders and payments</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Your order is confirmed once we receive payment confirmation. Payments are processed securely by Paystack, and we do not store your card details. We may cancel an order if a product is unavailable or something is wrong with the payment, and we will refund you where that applies.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">4. Use of the website</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">Please use our website for lawful, personal shopping only. You must not:</p>
            <ul className="flex flex-col gap-3 text-[8.5px] text-gray-700 font-outfit tracking-wide lg:text-xs">
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Provide false information when ordering.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Try to disrupt, hack or misuse the website.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Copy or reuse our content without permission.</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">5. Intellectual property</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">All content on this website, including the Hairs for Her name, logo, images and text, belongs to us. You may not copy, reproduce or use it without our written permission.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">6. Limitation of liability</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">To the extent the law allows, Hairs for Her is not liable for indirect or incidental losses arising from the use of our website or products, or from delays outside our control. Our liability is limited to the amount you paid for the order concerned. Nothing here limits your legal rights.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">7. Our other policies</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">These terms should be read together with our other policies:</p>
            <div className="flex flex-col w-full self-start gap-2 lg:gap-4">
                <button
                onClick={() => navigate("/privacy-policy")}
                className="border border-gray-800 text-[8px] w-full flex justify-between items-center p-2 text-gray-800 font-outfit tracking-wide lg:text-xs lg:max-w-3/4 lg:p-3">
                    PRIVACY POLICY
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </button>
                <button
                onClick={() => navigate("/return-policy")}
                className="border border-gray-800 text-[8px] w-full flex justify-between items-center p-2 text-gray-800 font-outfit tracking-wide lg:text-xs lg:max-w-3/4 lg:p-3">
                    RETURN POLICY
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </button>
                <button
                onClick={() => navigate("/delivery-policy")}
                className="border border-gray-800 text-[8px] w-full flex justify-between items-center p-2 text-gray-800 font-outfit tracking-wide lg:text-xs lg:max-w-3/4 lg:p-3">
                    DELIVERY POLICY
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                    </button>
            </div>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">8. Changes to these terms</h1>
            <p className="tracking-wide leading-relaxed text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">We may update these terms from time to time. The latest version will always be on this page, and continuing to use the website means you accept the changes.</p>
        </div>
        <div className="bg-gray-100 py-8 px-5 gap-4 flex flex-col">
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">9. Contact</h1>
            <p className="tracking-wide text-[8px] max-w-175 text-gray-700 font-outfit lg:text-xs">Questions about these terms? Please get in touch and we will be happy to help.</p>
            <button
            onClick={() => navigate("/contact")}
            className="border border-black bg-gray-100 text-black font-montserrat px-4 text-[8px] font-semibold tracking-widest py-1.5 flex items-center gap-2 shadow-xs lg:self-start lg:py-2 lg:text-[11px]">
            GO TO CONTACT PAGE
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </button>
        </div>
    </div>
  </div>
</section>      
)
}
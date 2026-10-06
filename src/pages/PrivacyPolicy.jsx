import PrivacyHero from "../components/PrivacyHero";
import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy(){

const navigate = useNavigate();

return(
<section className="animate-heroFadeUp text-black flex flex-col items-center justify-center px-2 py-5 gap-5 overflow-hidden lg:px-15">

  <PrivacyHero />
  <div className="w-full h-full flex items-center justify-center py-5"> {/*Container div start*/}
    <div className="self-start w-full flex flex-col gap-3 flex-1 h-full py-5 px-2 lg:px-0"> {/*First info div start*/}
        <p className="text-[7px] tracking-widest font-montserrat font-semibold lg:text-[10px]">ON THIS PAGE</p>
        <ol className="list-decimal list-inside flex flex-col gap-3">
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">What we collect</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">How we use it</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Sharing</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Keeping it safe</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Questions and updates</li>
        </ol>
    </div>
    <div className="w-full h-full p-3 flex flex-col flex-3 gap-10 lg:p-5">
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">1. What we collect</h1>
            <ul className="flex flex-col gap-3 text-[8px] text-gray-700 font-outfit tracking-wide lg:text-xs">
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Email address: for payment and order communication.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Order information: product, amount paid, quantity and transaction reference.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Website information: IP address and browser type for security and technical improvements.</li>
              <li className="flex items-center bg-[#FBB6BC] w-full gap-2 py-3 text-gray-900 lg:max-w-2/3"><div className="w-1.25 rounded-full h-1.25"></div>Payments are handled by Paystack. We do not store your payment information.</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">2. How we use it</h1>
            <ul className="flex flex-col gap-3 text-[8px] text-gray-700 font-outfit tracking-wide lg:text-xs">
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Process and verify payments.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Record and manage your orders.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Contact you about your orders.</li>
              <li className="flex items-center gap-2"><div className="w-1.25 rounded-full h-1.25 bg-[#FBB6BC]"></div>Provide customer support.</li>
            </ul>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">3. Sharing</h1>
            <p className="tracking-wide text-[8px] max-w-175 leading-relaxed text-gray-700 font-outfit lg:text-xs">We only share your information with trusted service providers such as Paystack, when it is needed to process your payment and complete your order</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">4. Keeping it safe</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">We take reasonable measures to protect your personal information and keep it safe.</p>
        </div>
        <div className="bg-gray-100 py-8 px-5 gap-4 flex flex-col">
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">5. Questions and updates</h1>
            <p className="tracking-wide text-[8px] max-w-175 leading-relaxed text-gray-700 font-outfit lg:text-xs">If you have any questions about your information and how it is used, please contact us. We may update this policy from time to time, and the latest version will always be on this page.</p>
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
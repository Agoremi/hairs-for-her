import DeliveryHero from "../components/DeliveryHero";

export default function DeliveryPolicy(){
return(
<section className="animate-heroFadeUp text-black flex flex-col items-center justify-center px-2 py-5 gap-5 overflow-hidden lg:px-15">

  <DeliveryHero />
  <div className="w-full h-full flex items-center justify-center p-4 lg:p-5"> {/*Container div start*/}
    <div className="self-start w-full flex flex-col gap-3 flex-1 h-full py-5"> {/*First info div start*/}
        <p className="text-[7px] tracking-widest font-montserrat font-semibold lg:text-[10px]">ON THIS PAGE</p>
        <ol className="list-decimal list-inside flex flex-col gap-3">
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Where we deliver</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Processing time</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Delivery timeframes</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Delivery fees</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Tracking your order</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Delays</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Failed deliveries</li>
            <li className="text-[7px] text-gray-900 font-montserrat lg:text-xs">Need help?</li>
        </ol>
    </div>
    <div className="w-full h-full p-3 flex flex-col flex-3 gap-10 lg:p-5">
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">1. Where we deliver</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">We currently deliver to all states in Nigeria. Our delivery network is constantly expanding to reach more customers across the country.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">2. Processing time</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Orders are confirmed once payment is received and are prepared within 1-2 business days. Orders placed on Sundays and public holidays will be processed on the next business day.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">3. Delivery timeframes</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Delivery timeframes vary depending on the destination and the size of the order. Orders within Port Harcourt are typically delivered on the same day provided the order is placed before 2:00 PM.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">4. Delivery fees</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Delivery fees are calculated based on the destination of the package and are confirmed at the time of payment. For orders above a certain value, we offer free delivery.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">5. Tracking your order</h1>
            <p className="tracking-wide text-[8px] max-w-3xl text-gray-700 font-outfit lg:text-xs">Once dispatched, we will provide you with the rider's contact information so that you can track your order.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">6. Delays</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Weather, courier issues or high-demand periods may occasionally cause delays. If your order is delayed, we will let you know and keep you updated until it arrives.</p>
        </div>
        <div className="flex flex-col gap-3"> {/*Item*/}
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">7. Failed deliveries</h1>
            <p className="tracking-wide text-[8px] max-w-3xl leading-relaxed text-gray-700 font-outfit lg:text-xs">Please make sure your address and contact information are correct and that someone is available to receive the package when it arrives. If a delivery fails because of an incorrect address or unavailable recipient, you may be charged a reshipment fee.</p>
        </div>
        <div className="bg-gray-100 py-8 px-5 gap-3 flex flex-col">
            <h1 className="text-[13px] font-playfair tracking-wide lg:text-2xl">8. Need help?</h1>
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
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function PaymentSuccess({ setPaymentSuccess, email, reference }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [orderAmount, setOrderAmount] = useState(null);

  const currentReference = reference || searchParams.get("reference") || "Processing...";
  const currentEmail = email || searchParams.get("email") || "No email provided";

  useEffect(() => {
    if (!currentReference || currentReference === "Processing...") {
      return;
    }

    const getOrderAmount = async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("amount, payment_reference")
        .eq("payment_reference", currentReference)
        .maybeSingle();

      if (error) {
        console.error("Failed to fetch order details:", error);
        return;
      }

      if (data?.amount != null) {
        setOrderAmount(Number(data.amount));
      }
    };

    getOrderAmount();
  }, [currentReference]);

  const handleContinueShopping = () => {
    if (typeof setPaymentSuccess === "function") {
      setPaymentSuccess(false);
    }
    navigate("/shop");
  };

  const handleWhatsAppOrder = () => {
    const amountText = orderAmount != null ? `₦${Number(orderAmount).toLocaleString()}` : "the order total";
    const message = `Good day, I just purchased an item for ${amountText}. My order reference is ${currentReference}. I'd like to confirm my order.`;

    const whatsappUrl = `https://wa.me/2349130422775?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 animate-heroFadeUp flex flex-col gap-3 items-center justify-center bg-white lg:gap-4">
      <div className="flex items-center animate-bounce justify-center w-22 h-22 rounded-full bg-[#fdf2f8] shadow-sm mb-5 lg:w-24 lg:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check preview-icon">
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
          <path d="m16 9-5.5 5.5L8 12"/>
        </svg>
      </div>

      <h2 className="text-[22px] font-montserrat font-semibold text-gray-800 mb-2 lg:tracking-wide lg:text-2xl">Payment Successful!</h2>
      <p className="text-sm text-gray-600 text-center font-outfit max-w-74 leading-relaxed lg:tracking-wide lg:max-w-xs">
        Thank you for your order. We've received your payment and your order is now being processed.
      </p>

      <div className="self-start max-w-9/10 mx-auto flex items-center justify-center gap-5 py-5 px-10 rounded bg-[#fdf2f8] shadow-sm">
        <div className="w-full flex-1 h-full px-2 flex items-center justify-center">
          <div>
            <p className="text-[11px] text-gray-600 font-outfit tracking-wide lg:text-xs">
              Order reference:
              <span className="pt-0.5 font-semibold text-xs text-gray-700 block">{currentReference}</span>
            </p>
          </div>
        </div>

        <div className="w-full flex-1 h-full px-2 flex gap-2.5 justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
          </svg>
          <p className="text-[11px] text-gray-600 font-outfit tracking-wide lg:text-xs">
            Confirmation sent to
            <span className="pt-0.5 font-semibold text-xs text-gray-700 block">{currentEmail}</span>
          </p>
        </div>
      </div>

      <div className="mt-2 flex gap-2.5 lg:gap-4 lg:mt-0">
        <button
          onClick={handleContinueShopping}
          className="px-6 py-2.5 rounded-full tracking-wide flex items-center justify-center gap-2 font-montserrat bg-[#db6b9a] text-white text-[11px] font-medium"
        >
          Continue Shopping
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
            <path d="M18 8L22 12L18 16"/>
            <path d="M2 12H22"/>
          </svg>
        </button>

        <button
        onClick={() => navigate(`/order?reference=${currentReference}`)}
        className="px-6 py-2.5 rounded-full tracking-wide flex items-center justify-center gap-2 font-montserrat bg-white border-[#db6b9a] outline text-[#db6b9a] text-[11px] font-medium">
          View Order
        </button>
      </div>

      <p className="mt-4 text-xs text-gray-500 font-outfit tracking-wide flex lg:mt-0">
        Need help?
         <button
            type="button" onClick={handleWhatsAppOrder}
            className="text-[#db6b9a] hover:underline flex items-center gap-1 ml-1">
            Chat with us on whatsapp
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right">
            <path d="M18 8L22 12L18 16"/>
            <path d="M2 12H22"/>
            </svg>
          </button>
      </p>
    </div>
  );
}
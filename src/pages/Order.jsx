import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase.js";

export default function Order() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");
  const [order, setOrder] = useState(null);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    const getOrder = async () => {
      if (!reference) return;

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("payment_reference", reference)
        .single();

      if (error) {
        console.error("Failed to fetch order:", error);
        return;
      }

      setOrder(data);

      if (!data?.product_id) {
        return;
      }

      const { data: productData, error: productError } = await supabase
        .from("products")
        .select("image, price, description")
        .eq("id", data.product_id)
        .single();

      if (productError) {
        console.error("Failed to fetch product image:", productError);
        return;
      }

      setProduct(productData);
    };

    getOrder();
  }, [reference]);

  if (!order) {
    return(
      <div className="w-full min-h-screen flex items-center justify-center">
        <i class="fa-solid animate-spin fa-spinner text-[#db6b9a]"></i>
      </div>
    ); {/*Loading state*/}
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-heroFadeUp flex flex-col gap-3 px-4 py-6 sm:px-8 sm:py-8 lg:px-20 lg:py-10 bg-[#fdf2f8]">
    {/*Order header section*/}
      <div className="py-2 sm:py-5 w-full flex flex-col gap-3">
        <button 
          className="self-start items-center flex gap-4 text-xs font-outfit tracking-wide text-gray-600"
          onClick={() => navigate("/shop")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left preview-icon">
            <path d="M6 8L2 12L6 16"/><path d="M2 12H22"/>
          </svg>
          Back to Shop
        </button>
        <p className="text-[11px] text-[#db6b9a] font-montserrat tracking-widest font-semibold">ORDER DETAILS</p>
        <h1 className="text-3xl sm:text-4xl text-gray-800 font-playfair tracking-wide">Your Order</h1>
        <p className="text-xs font-outfit text-gray-600">Here are the details of your order. Thank you for shopping with Hairs for Her!</p>
      </div>

    {/*Order detail section*/}
    <div className="w-full flex flex-col gap-5 lg:flex-row items-stretch"> {/*Order detail container*/}
      <div className="flex-3 min-w-0 w-full flex-col flex gap-5 px-4 py-5 sm:px-6 bg-white rounded-lg">{/*Subdiv1*/}
        <div className="w-full flex items-center justify-between gap-3">{/* Content for Subdiv1 - MORE SUBDIVS LOL */}
                <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-700 font-outfit">Order reference: <span className="text-black text-sm tracking-wider block lg:text-base">{order.payment_reference}</span></p>
                <p className="text-xs font-outfit text-gray-600">Keep this reference for future enquiries.</p>
                </div>

                <button className="px-6 py-1.5 flex items-center gap-1.5 bg-green-100 text-green-800 font-outfit text-xs rounded-full">
                  <div className="w-1.5 h-1.5 bg-green-700 animate-pulse rounded-full lg:h-2 lg:w-2"></div>
                  {order.status}
                </button>
            </div>
            <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-5">{/* Content for Subdiv1 - MORE SUBDIVS LOL */}
              <div className="flex-1 flex min-w-0 w-full gap-3 items-center sm:gap-4 sm:justify-center">{/*Grid items*/}
                    <div className="flex items-center justify-center shadow-xs bg-[#fdf2f8] p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </div>
                    <p className="min-w-0 break-all text-xs text-gray-600 font-outfit">Customer Email <span className="text-black text-[13px] tracking-wide block lg:text-sm">{order.email}</span></p>
                </div>
                <div className="flex-1 flex min-w-0 w-full gap-3 items-center sm:gap-4 sm:justify-center">{/*Grid items*/}
                    <div className="flex items-center justify-center shadow-xs bg-[#fdf2f8] p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar preview-icon"><path d="M8 2v3"/><path d="M16 2v3"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                    </div>
                    <p className="text-xs text-gray-600 font-outfit">Order Date <span className="text-black text-[13px] tracking-wide block lg:text-sm">{currentDate}</span></p>
                </div>
                <div className="flex-1 flex min-w-0 w-full gap-3 items-center sm:gap-4 sm:justify-center">{/*Grid items*/}
                    <div className="flex items-center justify-center shadow-xs bg-[#fdf2f8] p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card preview-icon"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/><path d="M6 14h2"/></svg>
                    </div>
                    <p className="text-xs text-gray-600 font-outfit">Payment Method <span className="text-black text-[13px] tracking-wide block lg:text-sm">Paystack</span></p>
                </div>
            </div>
            <div className="w-full flex gap-2 flex-col">{/* Content for Subdiv1 - MORE SUBDIVS LOL */}
              <p className="text-xs text-gray-900 font-outfit tracking-wide">ITEMS ORDERED</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">{/*Space btw container*/}
                <div className="flex min-w-0 items-center gap-4">{/*Image and text container*/}
                   <div className="p-1 border bg-white border-gray-200 rounded-xl flex items-center justify-center shadow-xs">
                     <img src={product?.image} alt="Product" className="w-14 h-14 object-cover rounded-lg lg:w-16 lg:h-16" />
                   </div>
                   <div className="min-w-0 flex flex-col gap-1">
                     <p className="text-sm text-gray-800 tracking-wide font-outfit">{order.product}</p>
                     <p className="text-[11px] text-gray-600 tracking-wide font-outfit">{product?.description}</p>
                     <p className="text-xs text-gray-600 tracking-wide font-outfit">Quantity: <span className="text-black">{order.quantity}</span></p>
                    </div>
                </div>
                <p className="text-sm tracking-wide font-montserrat font-semibold text-black">₦{order.amount.toLocaleString()}</p>
              </div>
            </div>
        </div>

        <div className="flex-2 min-w-0 w-full gap-5 flex flex-col py-5 px-5 sm:px-10 rounded-lg bg-white">{/*Subdiv2*/}
          <p className="text-base text-black font-outfit tracking-wide">Order Summary</p>
          <div className="w-full rounded-lg flex items-center justify-between">
            <p className="text-sm text-gray-600 tracking-wide font-outfit">Product</p>
            <p className="text-sm text-gray-800 tracking-wide font-outfit">₦{product?.price.toLocaleString()}</p>
          </div>
          <div className="w-full rounded-lg flex items-center justify-between">
            <p className="text-sm text-gray-600 tracking-wide font-outfit">Quantity</p>
            <p className="text-sm text-gray-800 tracking-wide font-outfit">{order.quantity}</p>
          </div>
          <div className="w-full rounded-lg py-5 flex items-center justify-between">
            <p className="text-sm text-black tracking-wide font-outfit">Total Paid</p>
            <p className="text-sm tracking-wide font-montserrat font-semibold text-black">₦{order.amount.toLocaleString()}</p>
          </div>
          <div className="p-4 sm:p-5 rounded-lg flex items-center gap-3 sm:gap-5 bg-[#fdf2f8]">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check preview-icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
            <p className="text-[11px] text-gray-800 tracking-wide font-outfit">Your order has been successfully processed. You will receive an email confirmation shortly.</p>
          </div>
        </div>
    </div>

    </div>
  );
};

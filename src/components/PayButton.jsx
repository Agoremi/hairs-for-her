import Paystack from "@paystack/inline-js";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export default function PayButton({ product, price, quantity, email, onSuccess, productId, onPaymentAttempt }) {
  const paystack = new Paystack();

  const navigate = useNavigate();

  const total = price * quantity; // Calculate total amount based on price and quantity

  const handlePayment = () => {
  if (onPaymentAttempt && !onPaymentAttempt()) return;

  paystack.newTransaction({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: total * 100,
    currency: "NGN",

onSuccess: async (transaction) => {
  console.log("Payment successful:", transaction);

  const { data, error } = await supabase.functions.invoke(
    "verify-payment",
    {
      body: {
        reference: transaction.reference,
      },
    }
  );

  if (error) {
    console.error("Payment verification failed:", error);
    return;
  }

  if (!data.success) {
    console.error("Payment was not verified:", data);
    return;
  }

  const { error: orderError } = await supabase
    .from("orders")
    .insert({
      email,
      product: product.name,
      product_id: productId,
      quantity,
      amount: total,
      payment_reference: transaction.reference,
      status: "success",
    });

  if (orderError) {
    console.error("Failed to save order:", orderError);
    return;
  }

  navigate(`/payment-success?reference=${transaction.reference}&email=${encodeURIComponent(email)}`);
},

    onCancel: () => {
      console.log("Payment cancelled");
    },
  });
};

  return (
    <button 
    onClick={handlePayment} 
    className="bg-[#db6b9a] text-white text-xs font-outfit font-semibold py-2 px-4 rounded lg:text-sm">
        <i class="fa-regular fa-credit-card pr-5"></i>
        Pay Now
    </button>
  );
};
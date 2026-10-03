import OrderRow from "../components/OrderRow.jsx";
import { supabase } from "../lib/supabase.js";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch orders:", error);
      setLoading(false);
      return;
    }

    const ordersWithImages = await Promise.all(
      (data ?? []).map(async (order) => {
        const { data: product, error: productError } = await supabase
          .from("products")
          .select("image")
          .eq("id", order.product_id)
          .single();

        if (productError) {
          console.error("Failed to fetch product image:", productError);
          return order;
        }

        return {
          ...order,
          image: product.image,
        };
      })
    );

    setOrders(ordersWithImages);
    setLoading(false);
  };

  fetchOrders();
}, []);

  return (
    <div className="flex w-full min-h-screen flex-4 flex-col p-4 sm:p-5">
      <div className="py-4 w-full">
        <h1 className="text-xl font-semibold text-gray-800 font-outfit">Orders</h1>
        <p className="text-xs font-outfit text-gray-500">View and manage your orders</p>
      </div>

      <div className="flex-1 h-full p-5 bg-gray-100 rounded-lg w-full">
        <table className="w-full min-w-155">
          <thead className="border-b border-gray-300 bg-gray-50">
            <tr>
              <th className="py-2 text-left text-[10px] font-semibold tracking-wide font-outfit text-gray-700">PRODUCT</th>
              <th className="py-2 text-left text-[10px] font-semibold tracking-wide font-outfit text-gray-700">QUANTITY</th>
              <th className="py-2 text-left text-[10px] font-semibold tracking-wide font-outfit text-gray-700">AMOUNT PAID</th>
              <th className="py-2 text-left text-[10px] font-semibold tracking-wide font-outfit text-gray-700">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-xs font-outfit text-gray-500">
                  Loading orders...
                </td>
              </tr>
            ) : orders.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-xs font-outfit text-gray-500">
                  No orders yet.
                </td>
              </tr>
            ) : (
              orders.map((order) => <OrderRow key={order.id} order={order} />)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
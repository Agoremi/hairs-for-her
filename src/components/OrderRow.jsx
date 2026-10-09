export default function OrderRow({ order }) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 text-xs font-outfit text-gray-700">
        <div className="flex items-center gap-2">
          <img
            src={order.image || "https://placehold.co/80x80/e2e8f0/475569?text=Product"}
            alt={order.product || "Product"}
            className="h-11 w-11 rounded object-cover border border-gray-200"
          />
          <span className="font-semibold font-outfit text-gray-700">{order.product || "Unknown product"}</span>
        </div>
      </td>
      <td className="py-3 text-xs font-outfit text-gray-700">{order.quantity ?? 0}</td>
      <td className="py-3 text-xs font-outfit text-[#D97C9A] font-semibold">₦ {order.amount ?? 0}</td>
      <td className="py-3 text-xs font-outfit text-gray-700">{order.status || "Pending"}</td>
    </tr>
  );
}
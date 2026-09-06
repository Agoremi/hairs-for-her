import { supabase } from "../lib/supabase";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export default function ProductRow({ product }) {

const navigate = useNavigate();

const handleDelete = async () => {
    const { data, error } = await supabase
        .from("products")
        .delete()
        .eq("id", product.id)
        .select();

    if (error) {
        toast.error(error.message);
        return;
    }

    toast.success("Product deleted successfully!")
};

  return (
    <>
    <tr className="border-b border-gray-200">
      <td className="py-3 text-xs font-outfit text-gray-700">
        <div className="flex items-center gap-2">
          <img
            src={product.image}
            alt={product.name}
            className="h-11 w-11 rounded object-cover border border-gray-200"
          />
          <span className="font-semibold font-outfit text-gray-700">{product.name}</span>
        </div>
      </td>
      <td className="py-3 text-xs font-outfit text-gray-700">{product.category}</td>
      <td className="py-3 text-xs font-outfit text-[#D97C9A] font-semibold">₦ {product.price}</td>
      <td className="py-3 text-xs font-outfit text-green-500 font-semibold">{product.stock}</td>
      <td className="py-3 text-xs font-outfit text-gray-700">
        <span className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[10px] font-bold font-outfit tracking-wide ${product.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}` }>
          {product.status}
        </span>
      </td>
      <td className="py-3 text-xs font-outfit text-gray-700">
        <button onClick={() => navigate(`/admin/products/edit/${product.id}`)} className="border border-gray-300 text-gray-700 py-1 px-2 rounded mr-2">
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={()=> handleDelete(product.id)} className="bg-white text-[#D97C9A] py-1 px-2 rounded">
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </tr>
    </>
  );
}
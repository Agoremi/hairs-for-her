import ProductRow from "../components/ProductRow.jsx";
import { supabase } from "../lib/supabase.js";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Products(){
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select('*');

            if (error) {
                console.error('Error fetching products:', error);
            } else {
                setProducts(data);
            }
        };

        fetchProducts();
    }, []);

    return(
        <div className="flex w-full flex-4 flex-col p-4 sm:p-5">
            <h1 className="text-2xl font-semibold text-gray-800 font-outfit">Products</h1>

            <button onClick={()=> navigate("/admin/products/add")} className="bg-[#D97C9A] text-white text-xs font-semibold py-2 px-4 rounded self-start mt-4">
              + Add Product
            </button>

            <div className="mt-4 overflow-hidden bg-white"> {/*Products Table Container*/}
              <div className="py-4"> {/*Table header*/}
                <h2 className="text-sm font-outfit font-semibold">All Products</h2>
                <p className="text-xs font-outfit text-gray-500">Manage your hair products</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px]">
                 <thead className="border-b border-gray-300 bg-gray-50">
                  <tr>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">PRODUCT</th>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">CATEGORY</th>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">PRICE</th>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">STOCK</th>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">STATUS</th>
                  <th className="py-2 text-left text-[10px] font-semibold font-outfit text-gray-700">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <ProductRow key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    )
}
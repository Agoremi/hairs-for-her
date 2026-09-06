import ProductRow from "../components/ProductRow.jsx";
import { supabase } from "../lib/supabase.js";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Overview() {
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




    return (
        <div className="flex w-full flex-4 flex-col p-4 sm:p-5">
            <h1 className="text-2xl font-semibold text-gray-800 font-outfit">Admin Dashboard</h1>

            <div className="grid w-full grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:gap-5"> {/*Stats Cards*/}
              <div className="bg-white flex items-center gap-5 p-4 rounded-sm shadow"> {/*Card 1*/}
                <div className="h-10 w-10 bg-[#fdf2f8] flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D97C9A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                </div>
                <div>
                <p className="text-xs font-outift font-semibold text-gray-500">Total Products</p>
                <p className="text-lg font-inter font-semibold">13</p>
                </div>
              </div>
              <div className="bg-white flex gap-5 items-center p-4 rounded-sm shadow"> {/*Card 2*/}
                <div className="h-10 w-10 bg-[#FAF5E4] flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="gold" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handbag-icon lucide-handbag"><path d="M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z"/><path d="M8 11V6a4 4 0 0 1 8 0v5"/></svg>
                </div>
                <div>
                <p className="text-xs font-outift font-semibold text-gray-500">Total Orders</p>
                <p className="text-lg font-inter font-semibold">25</p>
                </div>
              </div>
              <div className="bg-white flex gap-5 items-center p-4 rounded-sm shadow"> {/*Card 3*/}
                <div className="h-10 w-10 bg-[#f0fdf4] flex items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>
                </div>
                <div>
                <p className="text-xs font-outift font-semibold text-gray-500">Total Revenue</p>
                <p className="text-lg font-inter font-semibold">₦ 275,000</p>
                </div>
              </div>
            </div>

            <button onClick={()=> navigate("/admin/products/add")} className="bg-[#D97C9A] text-white text-xs font-semibold py-2 px-4 rounded self-start">
              + Add Product
            </button>

            <div className="mt-4 overflow-hidden bg-white"> {/*Products Table Container*/}
              <div className="py-4"> {/*Table header*/}
                <h2 className="text-sm font-outfit font-semibold">Products</h2>
                <p className="text-xs font-outfit text-gray-500">Manage your hair products</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-155">
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
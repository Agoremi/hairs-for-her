import ProductCard from "../components/productCard.jsx";
import ShopFooter from "../components/ShopFooter.jsx";
import Modal from "../components/Modal.jsx";
import { supabase } from "../lib/supabase.js";
import { useEffect, useState } from "react";

export default function Shop(){

    const [productList, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeProductModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const productCards = productList.map((product) => (
        <ProductCard
            key={product.id || product.name}
            product={product}
            onOpen={openProductModal}
        />
    ));

    return(
        <section className="bg-white flex text-black flex-col items-center justify-center px-2 py-8 lg:px-15">
            <div className="grid-cols-2 gap-4 hidden lg:grid-cols-4 lg:grid"> {/*Shop Nav*/}
               <div className="flex gap-5 rounded-full border border-[#db6b9a] shadow-xs py-2 px-5 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#db6b9a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid-icon lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                  <p className="text-sm text-[#db6b9a] font-outfit tracking-wide">All</p>
               </div>
               <div className="flex gap-5 rounded-full border border-gray-200 shadow-xs py-2 px-5 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waves-vertical-icon lucide-waves-vertical"><path d="M12 2q2 2.5 0 5t0 5 0 5 0 5"/><path d="M19 2q2 2.5 0 5t0 5 0 5 0 5"/><path d="M5 2q2 2.5 0 5t0 5 0 5 0 5"/></svg>
                  <p className="text-sm font-outfit tracking-wide">French curls</p>
               </div>
               <div className="flex gap-5 rounded-full border border-gray-200 shadow-xs py-2 px-5 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-line-squiggle-icon lucide-line-squiggle"><path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"/></svg>
                  <p className="text-sm font-outfit tracking-wide">Italian curls</p>
               </div>
               <div className="flex gap-5 rounded-full border border-gray-200 shadow-xs py-2 px-5 items-center justify-center">
                  <i class="fa-solid fa-grip-lines-vertical"></i>
                  <p className="text-sm font-outfit tracking-wide">Bonestraight</p>
               </div>
            </div>

            <div className="flex flex-col gap-0.5 items-center lg:hidden"> {/*title div*/}
                <div className="flex gap-2 items-center"> {/*title div*/}
                <span className="h-[0.5px] w-6 bg-linear-to-tr from-[#ffffff] via-[#e88cab] to-[#f7c8d5]"></span>
                <p className="text-[10px] font-montserrat text-[#db6b9a] tracking-widest font-semibold lg:text-xs">OUR COLLECTION</p>
                <span className="h-[0.5px] w-6 bg-linear-to-tl from-[#ffffff] via-[#e88cab] to-[#f7c8d5]"></span>
                </div>
                <h1 className="text-[27px] text-gray-800 font-playfair tracking-wide lg:text-5xl">Premium Hair Extensions</h1>
                <p className="text-[9px] text-gray-600 mt-1 font-montserrat font-semibold tracking-widest">BEAUTY . QUALITY . CONFIDENCE</p>
                <div className="flex gap-2 items-center"> {/*title div*/}
                    <span className="w-10 h-[0.6px] bg-linear-to-tl from-[#ffffff] via-[#e88cab] to-[#f7c8d5]"></span>
                    <span><i class="fa-solid fa-heart text-[12px] text-[#db6b9a]"></i></span>
                    <span className="w-10 h-[0.6px] bg-linear-to-tl from-[#ffffff] via-[#e88cab] to-[#f7c8d5]"></span>
                </div>
            </div>

                    {loading ? (
                        <div className="w-full min-h-screen flex items-center justify-center">
                            <i class="fa-solid animate-spin fa-spinner text-[#db6b9a]"></i>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-2 mt-8 lg:grid-cols-[repeat(4,minmax(150px,190px))] lg:gap-4">
                            {productCards}
                        </div>
                    )}

            {isModalOpen && selectedProduct ? (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeProductModal}
                    product={selectedProduct}
                    productList={productList}
                />
            ) : null}

            <ShopFooter />
        </section>
    )
}
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, product, productList = [] }) {
    const [activeProduct, setActiveProduct] = useState(product);
    const [count, setCount] = useState(1);

    useEffect(() => {
        setActiveProduct(product);
    }, [product]);

    if (!isOpen || !activeProduct) {
        return null;
    }

    const relatedProducts = productList
        .filter((catalogProduct) => catalogProduct.id !== activeProduct.id)
        .slice(0, 3);

    const countAdd = () => {
        setCount(prevCount => prevCount + 1);
    };

    const countMinus = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);
    };

    const handleWhatsAppOrder = () => {
    const message = `Good day, I'd like to purchase ${count} piece(s) of the ${activeProduct.name} for ₦${activeProduct.price * count}. Please provide me with the payment details.`;

    const whatsappUrl = `https://wa.me/2349130422775?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-6">
            <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>
            <div className="relative z-10 my-auto flex max-h-[calc(100dvh-2rem)] w-full animate-modalIn max-w-xl flex-col gap-2 overflow-y-auto rounded-lg bg-white p-2 lg:p-4 lg:flex-row lg:gap-5 lg:max-w-2xl lg:overflow-visible"> {/*Modal*/}
                <button
                    aria-label="Close product details"
                    onClick={onClose}
                    className="absolute top-2.5 right-3 bg-white shadow-lg rounded-full py-1.5 px-2.5 text-2xl leading-none text-gray-500 hover:text-gray-800"
                >
                    ×
                </button>

                <div className="flex-1 flex flex-col gap-2"> {/*First subdiv*/}
                    <img src={activeProduct.image} alt={activeProduct.name} className="max-h-80 rounded-lg object-cover lg:w-full" />
                    <div className="flex gap-2">
                        {relatedProducts.map((relatedProduct) => (
                            <button
                                key={relatedProduct.id}
                                type="button"
                                onClick={() => setActiveProduct(relatedProduct)}
                                className="cursor-pointer border border-gray-200 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-[#db6b9a]"
                            >
                                <img
                                    src={relatedProduct.image}
                                    alt={relatedProduct.name}
                                    className="w-12 h-12 object-cover rounded-lg lg:w-16 lg:h-16"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 px-4"> {/*Second subdiv*/}
                    <div className="flex flex-col gap-0.5 border-b border-gray-200 py-2 lg:gap-1 lg:py-5">
                       <h2 className="text-xs font-outfit text-[#db6b9a]">{activeProduct.category}</h2>
                       <h1 className="text-md font-semibold font-outfit text-gray-800 lg:text-lg">{activeProduct.name}</h1>
                       <p className="text-sm font-outfit text-gray-500">{activeProduct.description}</p>
                       <p className="text-md font-semibold font-outfit text-[#db6b9a] lg:text-lg">₦{activeProduct.price}</p>
                    </div>

                    <div className="flex flex-col border-b border-gray-200 py-2 lg:py-5">
                        <p className="text-xs font-outfit text-gray-500">{activeProduct.modal_description}</p>
                    </div>

                    <div className="flex flex-col gap-3 py-3 lg:py-5 lg:gap-5">
                        <p className="text-xs font-outfit text-gray-800">Select Quantity</p>
                        <div className="inline-flex border self-start border-gray-300 rounded overflow-hidden">
                            <button onClick={countMinus} className="bg-white text-gray-800 font-bold py-1 px-3 rounded-l border-r border-gray-300">
                                <i class="fa-solid fa-minus text-[9px] lg:text-[11px]"></i>
                            </button>
                            <button className="bg-white text-gray-800 font-semibold text-[10px] py-1 px-3 lg:text-xs">
                                {count}
                            </button>
                            <button onClick={countAdd} className="bg-white text-gray-800 font-bold py-1 px-3 rounded-r border-l border-gray-300">
                                <i class="fa-solid fa-plus text-[9px] lg:text-[11px]"></i>
                            </button>
                        </div>
                        <button onClick={handleWhatsAppOrder} className="bg-[#db6b9a] text-white text-xs font-outfit font-semibold py-2 px-4 rounded lg:text-sm">
                            <i className="fa-brands fa-whatsapp pr-5"></i>
                            Order on WhatsApp
                        </button>
                        <p className="text-[10px] font-outfit text-gray-500">Clicking the button will redirect you to WhatsApp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
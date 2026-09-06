export default function Card({ product, onOpen }) {
    return (
        <div onClick={() => onOpen(product)} className="rounded-sm shadow-sm cursor-pointer">
            <img src={product.image} alt={product.name} className="w-full h-50 rounded-t-sm object-cover" />
            <div className="p-3 flex bg-white flex-col rounded-b-lg gap-0.5">
                <h2 className="text-sm font-semibold font-outfit text-gray-800">{product.name}</h2>
                <p className="text-xs font-outfit text-gray-500">{product.description}</p>
                <p className="text-sm font-semibold font-outfit text-[#db6b9a]">₦{product.price}</p>
            </div>
        </div>
    )
}
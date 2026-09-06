import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { supabase } from "../lib/supabase"
import AddForm from "../components/AddForm"

export default function EditProduct(){

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      const fetchProduct = async () => {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .eq("id", id)
          .single();
        
        if (error) {
          console.error("Error fetching product:", error);
          setIsLoading(false);
          return;
        }
        
        setProduct(data);
        setIsLoading(false);
      };

      fetchProduct();
    }, [id]);

    if (isLoading) {
      return (
        <div className="flex w-full flex-col items-center justify-center gap-1 px-4 py-20 text-left sm:px-6 md:px-10">
          <h2 className="font-outfit font-semibold text-lg text-gray-800"><i class="fa-solid fa-spinner animate-spin"></i></h2>
        </div>
      );
    }

    if (!product) {
      return (
        <div className="flex w-full flex-col gap-1 px-4 py-5 text-left sm:px-6 md:px-10">
          <h2 className="font-outfit font-semibold text-lg text-gray-800">Product not found</h2>
        </div>
      );
    }

    return(
         <div>
            <div className="flex w-full flex-col gap-1 px-4 py-5 text-left sm:px-6 md:px-10">
              <h2 className="font-outfit font-semibold text-lg text-gray-800">Edit Product</h2>
              <p className="text-xs font-outfit text-gray-600">Fill in new details to edit existing products</p>
            </div>
            <AddForm initialProduct={product} isEditing={true} />
         </div>
    )
}
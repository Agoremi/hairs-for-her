import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function AddForm({ initialProduct, isEditing }){

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    category: "",
    stock: "",
    status: "active",
    });

    const [image, setImage] = useState(null);

    useEffect(() => {
      if (isEditing && initialProduct) {
        setFormData({
          name: initialProduct.name || "",
          shortDescription: initialProduct.description || "",
          longDescription: initialProduct.modal_description || "",
          price: initialProduct.price || "",
          category: initialProduct.category || "",
          stock: initialProduct.stock || "",
          status: initialProduct.status?.toLowerCase() || "active",
        });
      }
    }, [isEditing, initialProduct]); {/*Use effect end*/}

    const resetForm = () => {
      setFormData({
        name: "",
        shortDescription: "",
        longDescription: "",
        price: "",
        category: "",
        stock: "",
        status: "active",
      });
      setImage(null);
    }; {/*Reset form end*/}

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.shortDescription.trim() || !formData.longDescription.trim() || !formData.price || !formData.category || !formData.stock) {
      toast.warn("Please fill in all fields.");
      return;
    }

    if (!isEditing && !image) {
      toast.warn("Please choose a product image.");
      return;
    }

    setIsLoading(true);

    let imageUrl = initialProduct?.image;

    if (image) {
      const fileName = `${Date.now()}-${image.name}`;

      const { error } = await supabase.storage
          .from("products")
          .upload(fileName, image);

      if (error) {
          setIsLoading(false);
          toast.error(error.message);
          return;
      }

      const { data: imageData } = supabase.storage
      .from("products")
      .getPublicUrl(fileName);

      imageUrl = imageData?.publicUrl;

      if (!imageUrl) {
        setIsLoading(false);
        toast.error("Image URL could not be generated.");
        return;
      }
    }

    if (isEditing) {
      const { error: updateError } = await supabase
      .from("products")
      .update({
          name: formData.name,
          description: formData.shortDescription,
          modal_description: formData.longDescription,
          price: formData.price,
          category: formData.category,
          stock: formData.stock,
          status: formData.status,
          image: imageUrl
      })
      .eq("id", initialProduct.id);

      if (updateError) {
          setIsLoading(false);
          toast.error(updateError.message)
          return;
      }
      
      setIsLoading(false);
      toast.success("Product updated successfully");
      navigate("/admin/products");
    } else {
      const { error: insertError } = await supabase
      .from("products")
      .insert({
          name: formData.name,
          description: formData.shortDescription,
          modal_description: formData.longDescription,
          price: formData.price,
          category: formData.category,
          stock: formData.stock,
          status: formData.status,
          image: imageUrl
      });

      if (insertError) {
          setIsLoading(false);
          toast.error(insertError.message)
          return;
      }
      
      setIsLoading(false);
      toast.success("Product added successfully");
      resetForm();
    }
    };

return(
    <>
  <form onSubmit={handleSubmit} className="space-y-6 px-4 py-5 font-outfit sm:px-6 md:px-10">

  {/* Product Name */}
  <div className="flex flex-col gap-5 md:flex-row"> {/*name and desc container div*/}
  <div className="flex-1">
    <label className="block mb-2 text-xs font-medium text-gray-800">
      Product Name
    </label>

    <input
      type="text"
      placeholder="e.g. Black French Curls"
      className="w-full rounded-lg border font-outfit border-gray-200 px-4 py-3 text-xs outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
      value={formData.name}
      onChange={(e) =>
      setFormData({
      ...formData,
      name: e.target.value
    })
}
    />
  </div>


  {/*Short desc*/}
  <div className="flex-1">
    <label className="block mb-2 text-xs font-medium text-gray-800">
      Short Description
    </label>

    <input
      type="text"
      placeholder="A short description about the product"
      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-xs font-outfit outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
      value={formData.shortDescription}
      onChange={(e) =>
      setFormData({
      ...formData,
      shortDescription: e.target.value
    })
}
    />
  </div> {/*short desc end*/}
  </div> {/*End of desc and name container div*/}


  {/* Long Description */}
  <div>
    <label className="block mb-2 text-xs font-medium font-outfit text-gray-800">
      Long Description
    </label>

    <textarea
      rows="5"
      placeholder="Tell customers more about this product..."
      className="w-full rounded-lg border border-gray-200 font-outfit px-4 py-3 text-xs outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
      value={formData.longDescription}
      onChange={(e) =>
      setFormData({
      ...formData,
      longDescription: e.target.value
    })
}
    />
  </div>


  {/* 4-col input container*/}
   <div className="grid grid-cols-1 gap-6 md:grid-cols-4">

    <div> {/*price div*/}
      <label className="block mb-2 text-xs font-medium text-gray-800">
        Price (₦)
      </label>

      <input
        type="number"
        placeholder="e.g. 6500"
        className="w-full rounded-lg border border-slate-200 px-4 py-3 text-xs font-outfit outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
        value={formData.price}
        onChange={(e) =>
        setFormData({
        ...formData,
        price: e.target.value
    })
}
      />
    </div>


    <div>{/*category div*/}
      <label className="block mb-2 text-xs font-medium text-gray-800">
        Category
      </label>

      <select
        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-500 text-xs outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
        value={formData.category}
        onChange={(e) =>
        setFormData({
        ...formData,
        category: e.target.value
    })
}
      >
        <option value="">Select category</option>
        <option value="french-curls">French Curls</option>
        <option value="italian-curls">Italian Curls</option>
        <option value="bone-straight">Bone Straight</option>
      </select>
    </div>

    <div> {/*stock div*/}
      <label className="block mb-2 text-xs font-outfit font-medium text-gray-800">
        Stock
      </label>

      <input
        type="number"
        min="0"
        placeholder="e.g. 10"
        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-xs font-outfit outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
        value={formData.stock}
        onChange={(e) =>
        setFormData({
        ...formData,
        stock: e.target.value
    })
}
      />
    </div>


    <div> {/*status div*/}
      <label className="block mb-2 text-xs font-medium text-gray-800">
        Status
      </label>

      <select
        className="w-full rounded-lg border border-gray-200 text-gray-500 px-4 py-3 text-xs outline-none transition focus:border-pink-400 focus:ring-0.5 focus:ring-pink-100"
        value={formData.status}
        onChange={(e) =>
        setFormData({
        ...formData,
        status: e.target.value
    })
}
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
</div>

  {/* Product Image */}
  <div>
    <label className="block mb-3 text-xs font-medium text-gray-800">
      Product Image {isEditing && <span className="text-gray-500">(Optional - leave blank to keep current image)</span>}
    </label>

    <label className="flex min-h-35 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-pink-200 bg-pink-50/30 px-6 text-center transition hover:border-pink-400 hover:bg-pink-50 md:max-w-1/3">

      <svg
        className="mb-3 h-8 w-8 text-pink-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16V4m0 0L8 8m4-4 4 4M4 16.5v1.25A2.25 2.25 0 006.25 20h11.5A2.25 2.25 0 0020 17.75V16.5"
        />
      </svg>

      <span className="text-sm font-medium text-gray-700">
        Click to upload image
      </span>

      <span className="mt-1 text-xs text-gray-500">
        PNG, JPG or WEBP
      </span>

      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={(e) => setImage(e.target.files[0])}
        className="hidden"
      />

    </label>
  </div>


  {/* Buttons */}
  <div className="flex flex-col-reverse gap-3 pt-6 sm:flex-row sm:justify-end">

    <button
      type="button"
      className="rounded-sm border border-gray-300 px-5 py-2.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50"
    >
      Cancel
    </button>

    <button
      type="submit"
      className="rounded-sm bg-[#df6b99] px-5 py-2.5 text-xs font-medium text-white transition hover:bg-[#d85d8d] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={isLoading}
    >
      {isLoading ? (isEditing ? "Updating..." : "Adding...") : (isEditing ? "Update Product" : "Add Product")}
    </button>

  </div>

</form>
</>
)
}
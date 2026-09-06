import AddForm from "../components/AddForm";

export default function AddProduct (){
    return(
        <div> {/*Container*/}
         <div className="flex w-full flex-col gap-1 px-4 py-5 text-left sm:px-6 md:px-10">
            <h2 className="font-outfit font-semibold text-lg text-gray-800">Add product</h2>
            <p className="text-xs font-outfit text-gray-600">Fill in the details below to add a new hair product</p>
         </div>

        <AddForm />
        </div>
    )
}
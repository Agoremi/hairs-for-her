export default function Orders(){
    return(
        <div className="flex w-full flex-4 flex-col items-center justify-center px-4 py-32 sm:p-50">
            <div className="flex flex-col items-center text-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#1F2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ban-icon lucide-ban"><circle cx="12" cy="12" r="10"/><path d="M4.929 4.929 19.07 19.071"/></svg>
                <h2 className="font-outfit text-lg text-gray-800">Whatsapp orders aren't synced yet</h2>
                <p className="font-outfit text-sm text-gray-600">Orders placed via WhatsApp are not yet integrated with this dashboard.</p>
            </div>
        </div>
    )
}
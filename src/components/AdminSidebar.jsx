import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { supabase } from "../lib/supabase";

export default function AdminSidebar({ isOpen, onClose }){
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/admin/login");
    };

    return(
        <>
        {isOpen && (
            <button
                type="button"
                aria-label="Close admin navigation"
                onClick={onClose}
                className="fixed inset-0 z-40 bg-gray-900/30 md:hidden"
            />
        )}
        <aside className={`fixed left-0 top-0 z-50 h-screen w-72 overflow-y-hidden border-r border-gray-300 bg-white p-5 transition-transform duration-200 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="flex flex-col gap-6">  {/*container*/}
                <div> {/*logo and title*/}
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close admin navigation"
                        className="mb-4 ml-auto flex h-8 w-8 items-center justify-center rounded text-gray-600 md:hidden"
                    >
                        <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                    </button>
                    <img
                    src={Logo}
                    alt="Hairs For Her"
                    className="w-24 h-auto object-contain"
                    />
                </div>

                <nav className="flex flex-col gap-2 mt-3"> {/*navigation links*/}
                    <NavLink
                        to="/admin"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold flex items-center gap-2" : "items-center gap-2 flex text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid preview-icon"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                        Overview
                    </NavLink>
                    <NavLink
                        to="/admin/products"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold flex items-center gap-2" : "items-center gap-2 flex text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes preview-icon"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>
                        Products
                    </NavLink>
                    <NavLink
                        to="/admin/orders"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#D97C9A] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold flex items-center gap-2" : "flex items-center gap-2 text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag preview-icon"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                        Orders
                    </NavLink>
                </nav>
            </div>

                        <button
                        onClick={handleLogout}
                        className="mt-60 flex w-full cursor-pointer items-center gap-3 rounded p-4 text-sm text-gray-700 hover:bg-gray-100 font-outfit"
                        >
                            <i className="fa-solid fa-right-from-bracket"></i>
              Logout
            </button>
        </aside>
        </>
    )
}
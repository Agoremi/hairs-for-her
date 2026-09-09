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
                                className="w-18 h-auto object-contain"
                              />
                    <p className="text-sm font-outfit text-gray-700">Admin Dashboard</p>
                </div>

                <nav className="flex flex-col gap-2 mt-3"> {/*navigation links*/}
                    <NavLink
                        to="/admin"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold" : "text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <i className="fa-solid pr-6 fa-table-cells-large"></i>
                        Overview
                    </NavLink>
                    <NavLink
                        to="/admin/products"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#d97c9a] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold" : "text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <i className="fa-solid pr-6 fa-cubes"></i>
                        Products
                    </NavLink>
                    <NavLink
                        to="/admin/orders"
                        end
                        onClick={onClose}
                        className={({ isActive }) => isActive ? "border-[#D97C9A] text-[#d97c9a] border py-2 px-4 rounded font-outfit font-semibold" : "text-gray-700 py-2 px-4 rounded font-outfit font-semibold hover:bg-gray-100"}
                    >
                        <i className="fa-solid pr-6 fa-bag-shopping"></i>
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
import { Outlet } from "react-router-dom";
import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="min-h-screen overflow-hidden bg-gray-50">
        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center border-b border-gray-200 bg-white px-4 md:hidden">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open admin navigation"
            className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-gray-700"
          >
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
          <span className="ml-3 font-outfit text-sm font-semibold text-gray-800">Admin Dashboard</span>
        </header>
        <main className="min-h-screen overflow-y-auto pt-16 md:pl-72 md:pt-0">
            <Outlet />
        </main>
    </section>
  );
}

export default Dashboard;
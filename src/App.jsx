import Dashboard from "./admin/Dashboard";
import Overview from "./admin/Overview";
import Products from "./admin/Products";
import Orders from "./admin/Orders";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PublicLayout from "./layouts/PublicLayout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import AdminLogin from "./AdminLogin";
import AdminRoute from "./AdminRoute";  
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DeliveryPolicy from "./pages/DeliveryPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    <ScrollToTop />
    <Routes>

        {/* Public website */}
        <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delivery-policy" element={<DeliveryPolicy />} />
        <Route path="/return-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminRoute />}>
        <Route path="/admin" element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
        </Route>
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
    </Routes>
</BrowserRouter>
  );
}
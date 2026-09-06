import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./lib/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-white font-outfit flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold mb-1">
          Admin Login
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          Sign in to manage your store.
        </p>

        <div className="mb-5">
          <label className="block text-sm mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[13px] outline-none focus:border-pink-400"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[13px] outline-none focus:border-pink-400"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D97C9A] text-white text-sm py-3 rounded-sm"
        >
          {loading ? <i class="fa-solid animate-spin fa-spinner"></i> : "Sign in"}
        </button>
      </form>
    </div>
  );
}
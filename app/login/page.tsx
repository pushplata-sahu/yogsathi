"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/settings"); // Default path

  useEffect(() => {
    const savedPath = sessionStorage.getItem("redirectAfterLogin");
    if (savedPath) {
      setRedirectPath(savedPath);
      sessionStorage.removeItem("redirectAfterLogin"); // ✅ Clear after usage
    }
  }, []);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("https://yogsathi-backend-production.up.railway.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.success) {
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userEmail", form.email);
        localStorage.setItem("token", "true");

        alert("✅ Login successful!"); // ✅ Popup for success
        router.push(redirectPath);
      } else {
        alert(`❌ ${data.message}`); // ❌ Popup for invalid credentials
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Login error:", err);
      alert("❌ Login failed. Please try again!"); // ❌ Popup for server error
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>🔐 Login to YogSathi</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {message && (
          <p style={{ color: message.startsWith("✅") ? "green" : "red" }}>
            {message}
          </p>
        )}

        <p>
          Don’t have an account?{" "}
          <Link href="/signup" style={{ color: "#7e22ce", fontWeight: "bold" }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

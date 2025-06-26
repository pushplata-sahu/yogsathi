"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("https://yogsathi-backend.up.railway.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", form.email);
        setMessage("✅ Login successful!");
        // router.push("/report");
      } else {
        setMessage(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error("Login error:", err);
      setMessage("❌ Login failed. Please try again!");
    }
  };

  return (
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
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

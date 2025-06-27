"use client";

import { useState } from "react";
import Link from "next/link";
import "../../styles/signup.css";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name || !form.phone || !form.email || !form.password) {
      alert("❌ Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("https://yogsathi-backend-production.up.railway.app/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setIsLoading(false);

      if (data.success) {
        alert("✅ Account created successfully!");
        setForm({ name: "", phone: "", email: "", password: "" });
        localStorage.setItem("token", "true");
        setTimeout(() => router.push("/settings"), 500);
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      setIsLoading(false);
      console.error("Signup error:", err);
      alert("❌ Signup failed. Please try again!");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>📝 Create Your YogSathi Account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "#7e22ce", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

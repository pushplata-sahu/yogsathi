"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../../styles/logout.css";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Clear tokens/session
    localStorage.removeItem("token");
    sessionStorage.clear();
    document.cookie = "authToken=; Max-Age=0; path=/;";
  }, []);

  return (
    <div className="logout-page">
      <h1>👋 You’ve been logged out successfully!</h1>
      <p>Thank you for using YogSathi. Come back soon!</p>

      <Link href="/login">
        <button className="login-again-btn">🔐 Login Again</button>
      </Link>
    </div>
  );
}

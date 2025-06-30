"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSettingsClick = () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (!token) {
        sessionStorage.setItem("redirectAfterLogin", "/settings");
      }
    }
  };

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">YogSathi</h1>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          href="/"
          className={`navbar-link ${pathname === "/" ? "active-link" : ""}`}
        >
          Home
        </Link>

        <Link
          href="/asana-diet"
          className={`navbar-link ${pathname === "/asana-diet" ? "active-link" : ""}`}
        >
          Asanas + Diet
        </Link>

        <Link
          href="/challenges"
          className={`navbar-link ${pathname === "/challenges" ? "active-link" : ""}`}
        >
          Challenges
        </Link>

        <Link
          href="/login"
          onClick={handleSettingsClick}
          className={`navbar-link ${pathname === "/settings" ? "active-link" : ""}`}
        >
          Settings/Report
        </Link>
      </div>
    </nav>
  );
}

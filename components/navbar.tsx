"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/navbar.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">YogSathi</h1>
      <div className="navbar-links">
        <Link href="/" className={`navbar-link ${pathname === "/" ? "active-link" : ""}`}>
          Home
        </Link>
        <Link href="/asana-diet" className={`navbar-link ${pathname === "/asana-diet" ? "active-link" : ""}`}>
          Asanas + Diet
        </Link>
        <Link href="/challenges" className={`navbar-link ${pathname === "/challenges" ? "active-link" : ""}`}>
          Challenges
        </Link>
       
        <Link href="/settings" className={`navbar-link ${pathname === "/settings" ? "active-link" : ""}`}>
          Settings/Report
        </Link>
      </div>
    </nav>
  );
}

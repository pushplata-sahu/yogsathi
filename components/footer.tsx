"use client";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">YogSathi</h2>
      <p className="footer-tagline">Flow. Heal. Rise. Every Day.</p>
      <div className="footer-links">
        <a href="/asanas">Asanas</a>
        <a href="/discover">Discover</a>
        <a href="/report">Report</a>
        <a href="/settings">Settings</a>
      </div>
      <p className="footer-copy">
        © {new Date().getFullYear()} YogSathi. All rights reserved.
      </p>
    </footer>
  );
}

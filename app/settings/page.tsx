"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/settings.css";

export default function YogSathiDashboard() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true); // ✅ Loading check

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    } else {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    if (!isChecking) {
      // Sidebar outside click logic (after check)
      const sidebar = document.querySelector(".dashboard-sidebar");
      const handleClickOutside = (e: any) => {
        if (
          sidebar &&
          sidebar.classList.contains("open") &&
          !sidebar.contains(e.target) &&
          !e.target.classList.contains("hamburger")
        ) {
          sidebar.classList.remove("open");
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isChecking]);

  const toggleSidebar = () => {
    const sidebar = document.querySelector(".dashboard-sidebar");
    sidebar?.classList.toggle("open");
  };

  if (isChecking) {
    return <div className="loading-screen">🔐 Checking login status...</div>; // ⏳ Optional loader
  }

  return (
    <div className="dashboard-layout">
      {/* Header for Mobile */}
      <header className="dashboard-header">
        <h2>🧘 YogSathi</h2>
        <button className="hamburger" onClick={toggleSidebar}>☰</button>
      </header>

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>🧘 YogSathi</h2>
        <ul>
          <li><Link href="/dashboard">🏠 Dashboard</Link></li>
          <li><Link href="/dashboard/settings">⚙️ Settings</Link></li>
          <li>📅 My Routine</li>
          <li>🎯 Goals</li>
          <li>📈 Progress</li>
          <li>📝 Reflections</li>
          <li>🎵 Music</li>
          <li>🎥 Videos</li>
          <li><Link href="/logout">🚪 Logout</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <h1 className="dashboard-heading">Welcome to Your Wellness Hub</h1>

        <div className="dashboard-cards grid-2x3">
          <div className="dashboard-card">
            <h3>🧘‍♀️ Daily Yoga Progress</h3>
            <p>Track your daily yoga sessions and mood logs here.</p>
          </div>
          <div className="dashboard-card">
            <h3>🍽️ Diet Tips</h3>
            <p>Get personalized food recommendations with your goals.</p>
          </div>
          <div className="dashboard-card">
            <h3>📝 Reflections</h3>
            <p>Write how you feel post-session to monitor inner peace.</p>
          </div>
          <div className="dashboard-card">
            <h3>🎯 Goal Tracking</h3>
            <p>See how far you've come in your flexibility or stress-relief journey.</p>
          </div>
          <div className="dashboard-card">
            <h3>🎵 Music Recommendations</h3>
            <p>Play peaceful tunes during your yoga practice.</p>
          </div>
          <div className="dashboard-card">
            <h3>🎥 Video Sessions</h3>
            <p>Watch instructor-led yoga flows right here.</p>
          </div>

          {/* ✅ Report Card */}
          <div className="dashboard-card report-card">
            <h3>📊 Personalized Report</h3>
            <p>View your yoga performance and progress analytics here.</p>
            <button
              onClick={() => router.push("/report")}
              className="view-report-btn"
            >
              View Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

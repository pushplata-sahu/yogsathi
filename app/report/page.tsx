"use client";
import { useEffect, useState } from "react";
import "@/styles/report.css";

export default function ReportPage() {
  const [userName, setUserName] = useState("User");
  const [summary, setSummary] = useState<any>({
    totalMinutes: 0,
    avg: 0,
    streak: 0,
    last7: [],
    challengeAttempted: false,
    rewards: 0,
  });
  const [prediction, setPrediction] = useState("Not Available");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch("https://yogsathi-backend.up.railway.app/api/user");
        const userData = await userRes.json();
        setUserName(userData?.name || "User");

        const reportRes = await fetch("https://yogsathi-backend.up.railway.app/api/reports");
        const reportData = await reportRes.json();

        if (reportData.success && reportData.summary) {
          setSummary(reportData.summary);

          const today = reportData.summary.last7?.at(-1);
          if (today?.yoga_minutes) {
            const predictRes = await fetch("https://yogsathi-backend.up.railway.app/api/predictor", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ minutes: today.yoga_minutes }),
            });

            const predictData = await predictRes.json();
            if (predictData.success) setPrediction(predictData.prediction);
          }
        }
      } catch (error) {
        console.warn("API failed. Using fallback.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-layout">
      {/* 👤 Top Section */}
      <div className="top-section">
        <div className="user-card">
          <h2>👤 Welcome</h2>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Status:</strong> Active yogi 🧘‍♀️</p>
          <p><strong>Last 7 Days Logs:</strong> {summary.last7.length}</p>
        </div>

        <div className="summary-card">
          <h2>📅 Weekly Yoga Summary</h2>
          <p><strong>Total Minutes:</strong> {summary.totalMinutes}</p>
          <p><strong>Avg Daily Yoga:</strong> {summary.avg?.toFixed(1)} mins</p>
          <p><strong>ML Prediction:</strong> {prediction}</p>
          <p><strong>Streak:</strong> {summary.streak > 0 ? `${summary.streak} days` : "❌ Not maintained"}</p>
        </div>
      </div>

      {/* 💪 Streak */}
      <div className="streak-card">
        <h2>💪 Your Yoga Streak</h2>
        <p>You're doing great! Keep up the consistency to unlock rewards.</p>
        <p>Longest streak: <strong>{summary.streak > 0 ? `${summary.streak} days` : "Not maintained yet"}</strong></p>
      </div>

      {/* 🎯 Challenge */}
      <div className="challenge-reward-card">
        <h2>🎯 Challenge Activity</h2>
        <p>You have {summary.challengeAttempted ? "✅ attempted" : "❌ not attempted"} this week’s challenge.</p>

        <h2>🏆 Rewards Earned</h2>
        <p>You’ve earned <strong>{summary.rewards || 0}</strong> reward{summary.rewards === 1 ? "" : "s"} till now.</p>
      </div>

      {/* 📊 Daily Logs */}
      <div className="log-section">
        <h2>📊 Daily Logs</h2>
        {summary.last7.length > 0 ? (
          <ul>
            {summary.last7.map((log: any, i: number) => (
              <li key={i}>
                <strong>{log.date}</strong> — {log.yoga_minutes} mins — Mood: {log.mood} — Energy: {log.energy}
              </li>
            ))}
          </ul>
        ) : (
          <p>No logs found for this week.</p>
        )}

        <div className="tip-box">
          <h3>🌟 Tip of the Day</h3>
          <p>“Yoga is the journey of the self, through the self, to the self.”</p>
        </div>
      </div>
    </div>
  );
}

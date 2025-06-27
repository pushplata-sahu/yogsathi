"use client";
import { useEffect, useState } from "react";
import "@/styles/report.css";

export default function ReportPage() {
  const [userName, setUserName] = useState("Yogi Superstar");
  const [summary, setSummary] = useState<any>(null);
  const [prediction, setPrediction] = useState("Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BASE_URL = "https://yogsathi-backend-production.up.railway.app";
        console.log("⏳ Fetching report...");

        const reportRes = await fetch(`${BASE_URL}/api/reports`);
        const reportData = await reportRes.json();
        console.log("✅ Report Response:", reportData);

        if (reportData.success && reportData.summary) {
          setSummary(reportData.summary);

          const today = reportData.summary.last7?.at(-1);
          console.log("📅 Today Log:", today);

          if (today?.yoga_minutes) {
            const predictRes = await fetch(`${BASE_URL}/api/predictor`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ minutes: today.yoga_minutes }),
            });

            const predictData = await predictRes.json();
            console.log("🔮 Prediction Response:", predictData);

            if (predictData.success) {
              setPrediction(predictData.prediction);
            }
          } else {
            setPrediction("Not enough data to predict");
          }
        } else {
          setSummary(null); // fallback handled below
        }
      } catch (error) {
        console.warn("❌ API failed. Using fallback.", error);
        setSummary(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <p>Loading your report...</p>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="dashboard-layout">
        <h2>⚠️ Report Unavailable</h2>
        <p>We couldn't load your yoga report at the moment.</p>
        <p>Please check again later or start logging your yoga sessions to get insights.</p>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      {/* 👤 Top Section */}
      <div className="top-section">
        <div className="user-card">
          <h2>👤 Welcome</h2>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Status:</strong> Active yogi 🧘‍♀️</p>
          <p><strong>Last 7 Days Logs:</strong> {summary.last7?.length || 0}</p>
        </div>

        <div className="summary-card">
          <h2>📅 Weekly Yoga Summary</h2>
          <p><strong>Total Minutes:</strong> {summary.totalMinutes || 0}</p>
          <p><strong>Avg Daily Yoga:</strong> {summary.avg?.toFixed(1) || 0} mins</p>
          <p><strong>Predicted Outcome:</strong> {prediction}</p>
          <p><strong>Streak:</strong> {summary.streak > 0 ? `${summary.streak} days` : "❌ Not maintained"}</p>
        </div>
      </div>

      {/* 💪 Streak */}
      <div className="streak-card">
        <h2>💪 Your Yoga Streak</h2>
        <p>You're doing great! Keep up the consistency to unlock rewards.</p>
        <p>Longest streak: <strong>{summary.streak > 0 ? `${summary.streak} days` : "Not maintained yet"}</strong></p>
      </div>

      {/* 🎯 Challenge + 🏆 Rewards */}
      <div className="challenge-reward-card">
        <h2>🎯 Challenge Activity</h2>
        <p>You have {summary.challengeAttempted ? "✅ attempted" : "❌ not attempted"} this week’s challenge.</p>

        <h2>🏆 Rewards Earned</h2>
        <p>You’ve earned <strong>{summary.rewards || 0}</strong> reward{summary.rewards === 1 ? "" : "s"} till now.</p>
      </div>

      {/* 📊 Daily Logs */}
      <div className="log-section">
        <h2>📊 Daily Logs</h2>
        {summary.last7?.length > 0 ? (
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

        {/* 🌟 Tip of the Day */}
        <div className="tip-box">
          <h3>🌟 Tip of the Day</h3>
          <p>“Yoga is the journey of the self, through the self, to the self.”</p>
        </div>
      </div>
    </div>
  );
}

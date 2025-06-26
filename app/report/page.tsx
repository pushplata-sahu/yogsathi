"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/styles/report.css";

export default function ReportPage() {
  const router = useRouter();
  const [summary, setSummary] = useState<any>(null);
  const [prediction, setPrediction] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const isAuth = localStorage.getItem("loggedIn");
    const email = localStorage.getItem("userEmail");
    if (isAuth === "true" && email) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  useEffect(() => {
    if (!loggedIn) return;

    const fetchReport = async () => {
      try {
        setLoading(true);
        const summaryRes = await fetch("https://yogsathi-backend.up.railway.app/api/reports");
        const summaryData = await summaryRes.json();

        if (summaryData.success) {
          setSummary(summaryData.summary);
          const today = summaryData.summary.last7.at(-1);

          const predictRes = await fetch("https://yogsathi-backend.up.railway.app/api/predictor", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ minutes: today.yoga_minutes }),
          });

          const predictData = await predictRes.json();
          if (predictData.success) setPrediction(predictData.prediction);
        }
      } catch (err) {
        console.error("Error loading report:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [loggedIn]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e: any) => {
    e.preventDefault();
    const endpoint = isLoginMode ? "login" : "signup";
    const body = isLoginMode ? { email: form.email, password: form.password } : form;

    try {
      const res = await fetch(`https://yogsathi-backend.up.railway.app/api/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("userEmail", form.email);
        setMessage("✅ " + data.message);
        setLoggedIn(true);
      } else {
        setMessage("❌ " + data.message);
      }
    } catch {
      setMessage("❌ Something went wrong!");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("userEmail");
    setLoggedIn(false);
    setForm({ name: "", phone: "", email: "", password: "" });
    setSummary(null);
    setPrediction("");
    router.push("/report");
  };

  if (!loggedIn) {
    return (
      <div className="auth-wrapper">
        <h2>{isLoginMode ? "🔐 Login" : "📝 Sign Up"}</h2>
        <form onSubmit={handleAuth}>
          {!isLoginMode && (
            <>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Your Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLoginMode ? "Login" : "Sign Up"}</button>
        </form>
        <p
          style={{
            marginTop: "10px",
            color: message.startsWith("✅") ? "green" : "red",
            fontWeight: "500",
          }}
        >
          {message}
        </p>
        <p
          onClick={() => {
            setIsLoginMode(!isLoginMode);
            setMessage("");
          }}
          style={{ cursor: "pointer", marginTop: "15px", color: "#7e22ce" }}
        >
          {isLoginMode
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </p>
      </div>
    );
  }

  if (loading || !summary) {
    return <div className="loading-wrapper">⏳ Loading your Yoga Report...</div>;
  }

  return (
    <div className="report-wrapper">
      <h1>📅 Weekly Yoga Report</h1>
      <button onClick={handleLogout} style={{ marginBottom: "15px" }}>
        🚪 Logout
      </button>

      <div className="summary-card">
        <p>
          Total Minutes: <strong>{summary.totalMinutes}</strong>
        </p>
        <p>
          Average Daily Yoga: <strong>{summary.avg.toFixed(1)} mins</strong>
        </p>
        <p>
          Streak Maintained: <strong>{summary.streak ? "✅ Yes" : "❌ No"}</strong>
        </p>
        <p>
          ML Prediction (Tomorrow): <strong>{prediction}</strong>
        </p>
      </div>

      <h2>📊 Daily Logs:</h2>
      <ul>
        {summary.last7.map((log: any, i: number) => (
          <li key={i}>
            {log.date} — {log.yoga_minutes} mins — Mood: {log.mood} — Energy:{" "}
            {log.energy}
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../styles/recommendation.css";

export default function RecommendationPage() {
  const [goal, setGoal] = useState("");
  const router = useRouter(); // ✅ routing hook

  useEffect(() => {
    try {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const parsed = JSON.parse(userData);
        if (parsed?.goal) {
          setGoal(parsed.goal);
        }
      }
    } catch (error) {
      console.error("Error parsing userData:", error);
    }
  }, []);

  const goals = [
    {
      id: "weight-loss",
      title: "Weight Loss",
      desc: "Burn calories & build flexibility with energizing asanas.",
    },
    {
      id: "weight-gain",
      title: "Weight Gain",
      desc: "Focus on strength-building yoga and high-nutrition diet.",
    },
    {
      id: "flexibility",
      title: "Improve Flexibility",
      desc: "Stretch & open up with targeted poses daily.",
    },
    {
      id: "mental-peace",
      title: "Mental Peace",
      desc: "Calm your mind with pranayama & mindfulness flow.",
    },
    {
      id: "reduce-stress",
      title: "Reduce Stress",
      desc: "Soothing yoga & breathwork for inner relaxation.",
    },
  ];

  return (
    <div className="recommendation-container">
      <h1 className="recommendation-title">Your Personalized Yoga Goals</h1>

      <div className="card-container">
        {goals.map((g) => (
          <div
            key={g.id}
            className={`goal-card ${goal === g.id ? "highlight" : ""}`}
          >
            <h2>{g.title}</h2>
            <p>{g.desc}</p>
            <button
              className="follow-btn"
              onClick={() => router.push(`/plan/${g.id}`)}
            >
              Follow Yoga + Diet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

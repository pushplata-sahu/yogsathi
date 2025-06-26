"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/onboarding.css";

export default function OnboardingPage() {
  const router = useRouter();
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!gender || !goal || !level) {
      alert("Please answer all the questions.");
      return;
    }

    // Store responses in localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify({ gender, goal, level })
    );

    // Redirect to recommendation page
    router.push("/recommendation");
  };

  return (
    <div className="onboarding-container">
      <h1 className="onboarding-title">Let's personalize your yoga journey 🧘‍♀️</h1>

      <form onSubmit={handleSubmit} className="onboarding-form">
        {/* Gender */}
        <label htmlFor="gender">1. What is your gender?</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>

        {/* Goal */}
        <label htmlFor="goal">2. What is your main fitness goal?</label>
        <select
          id="goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option value="">Select Goal</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="weight-gain">Weight Gain</option>
          <option value="flexibility">Improve Flexibility</option>
          <option value="mental-peace">Mental Peace</option>
          <option value="reduce-stress">Reduce Stress</option> {/* ✅ New option added */}
        </select>

        {/* Level */}
        <label htmlFor="level">3. What is your experience level?</label>
        <select
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">Select Level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button type="submit" className="submit-btn">See My Yoga Plan</button>
      </form>
    </div>
  );
}

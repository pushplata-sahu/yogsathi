"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/weightloss.css";

// ✅ Full goalData object
const goalData = {
  "weight-loss": {
    title: "Weight Loss",
    quote: "Lose fat, gain life.",
    yoga: [
      { name: "Surya Namaskar", image: "/poses/surya.png", duration: "5 min", tag: "Full Body" },
      { name: "Naukasana", image: "/poses/boat.png", duration: "4 min", tag: "Core Strength" },
      { name: "Adho Mukha Svanasana", image: "/poses/downward.png", duration: "4 min", tag: "Stretching" }
    ],
    diet: {
      breakfast: "Oats + Almond Milk + Banana",
      lunch: "Grilled Veggies + Quinoa",
      dinner: "Lentil Soup + 1 Roti + Salad"
    }
  },
  "weight-gain": {
    title: "Weight Gain",
    quote: "Fuel your strength, grow healthier.",
    yoga: [
      { name: "Vrikshasana", image: "/poses/tree.png", duration: "3 min", tag: "Balance" },
      { name: "Bhujangasana", image: "/poses/cobra.png", duration: "4 min", tag: "Back Strength" },
      { name: "Setu Bandhasana", image: "/poses/bridge.png", duration: "4 min", tag: "Posture" }
    ],
    diet: {
      breakfast: "Peanut Butter Toast + Banana + Milk",
      lunch: "Paneer Bhurji + Brown Rice",
      dinner: "Dal + Ghee Roti + Curd"
    }
  },
  "flexibility": {
    title: "Improve Flexibility",
    quote: "Bend so life doesn't break you.",
    yoga: [
      { name: "Triangle Pose", image: "/poses/triangle.png", duration: "4 min", tag: "Side Stretch" },
      { name: "Forward Bend", image: "/poses/forwardbend.png", duration: "5 min", tag: "Hamstrings" },
      { name: "Child's Pose", image: "/poses/child.png", duration: "3 min", tag: "Hips + Spine" }
    ],
    diet: {
      breakfast: "Papaya + Yogurt Smoothie",
      lunch: "Mixed Veggies + Brown Rice",
      dinner: "Steamed Veggies + Khichdi"
    }
  },
  "mental-peace": {
    title: "Mental Peace",
    quote: "Find silence in the noise.",
    yoga: [
      { name: "Savasana", image: "/poses/savasana.png", duration: "10 min", tag: "Relaxation" },
      { name: "Anulom Vilom", image: "/poses/anulom.png", duration: "6 min", tag: "Breathing" },
      { name: "Mountain Pose", image: "/poses/mountain.png", duration: "5 min", tag: "Grounding" }
    ],
    diet: {
      breakfast: "Herbal Tea + Fruits",
      lunch: "Steamed Veggies + Paneer",
      dinner: "Lentil Soup + Millet Roti"
    }
  },
  "reduce-stress": {
    title: "Reduce Stress",
    quote: "Exhale stress, inhale peace.",
    yoga: [
      { name: "Child's Pose", image: "/poses/child.png", duration: "4 min", tag: "Calming" },
      { name: "Cat-Cow Flow", image: "/poses/downward.png", duration: "4 min", tag: "Spine Release" },
      { name: "Pranayama", image: "/poses/pranayama.png", duration: "6 min", tag: "Mindfulness" }
    ],
    diet: {
      breakfast: "Warm Milk + Dates",
      lunch: "Moong Dal + Soft Roti",
      dinner: "Khichdi + Ghee + Curd"
    }
  }
} as const;

type GoalKey = keyof typeof goalData;

export default function PlanPage() {
  const params = useParams();
  const [data, setData] = useState<(typeof goalData)[GoalKey] | null>(null);

  useEffect(() => {
    const goalParam = params?.goal as string;

    if (goalParam in goalData) {
      setData(goalData[goalParam as GoalKey]);
    }
  }, [params]);

  if (!data) return <p className="loading">Loading your plan...</p>;

  return (
    <div className="plan-page">
      <h1 className="plan-title">🎯 {data.title} Plan</h1>
      <p className="plan-quote">“{data.quote}”</p>

      {/* Yoga Section */}
      <div className="section-heading-wrapper">
        <h2 className="section-heading">🧘 Yoga Routine</h2>
      </div>
      <section className="yoga-section">
        <div className="yoga-cards">
          {data.yoga.map((pose, index) => (
            <div key={index} className="yoga-card">
              <img src={pose.image} alt={pose.name} className="yoga-img" />
              <h3>{pose.name}</h3>
              <p>{pose.duration} – {pose.tag}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diet Section */}
      <div className="section-heading-wrapper">
        <h2 className="section-heading">🥗 Diet Plan</h2>
      </div>
      <section className="diet-section">
        <div className="diet-table">
          <div><strong>Breakfast:</strong> {data.diet.breakfast}</div>
          <div><strong>Lunch:</strong> {data.diet.lunch}</div>
          <div><strong>Dinner:</strong> {data.diet.dinner}</div>
        </div>
      </section>
    </div>
  );
}

'use client';
import React from "react";
import "../../styles/challenges.css";

export default function ChallengePage() {
  return (
    <div className="challenge-wrapper">
      <h1 className="challenge-title">🌟 YogSathi Challenges</h1>

      {/* Challenge Cards */}
      <div className="challenge-cards">
        <div className="challenge-card">
          <h2>🔮 7-Day Mind Detox</h2>
          <p>Relax your soul daily</p>
          <ul>
            <li>💜 Breathwork + Gratitude</li>
            <li>📲 Track with reminders</li>
          </ul>
          <button>🔓 Start Challenge</button>
        </div>

        <div className="challenge-card">
          <h2>🌄 4-Day Morning Energy</h2>
          <p>Stretch, Sip, Shine</p>
          <ul>
            <li>🌞 Sun salutation flows</li>
            <li>🥤 Lemon water start tips</li>
          </ul>
          <button>🔓 Start Challenge</button>
        </div>

        <div className="challenge-card">
          <h2>🧘‍♂️ 21-Day Warrior Journey</h2>
          <p>From beginner to balanced</p>
          <ul>
            <li>🧩 Yoga + Nutrition + Habit</li>
            <li>🏅 Earn badge at the end</li>
          </ul>
          <button>🔓 Start Challenge</button>
        </div>
      </div>

      {/* Progress Map Preview */}
      <div className="progress-map">
        <h3 className="map-title">🗺️ Your 7-Day Progress Path</h3>
        <div className="map-track">
          <span className="map-node done">🏁</span>
          <span className="map-line" />
          <span className="map-node active">🟪</span>
          <span className="map-line" />
          <span className="map-node">⬜</span>
          <span className="map-line" />
          <span className="map-node">⬜</span>
          <span className="map-line" />
          <span className="map-node">⬜</span>
          <span className="map-line" />
          <span className="map-node">⬜</span>
          <span className="map-line" />
          <span className="map-node">⬜</span>
          <span className="map-line" />
          <span className="map-node">🏆</span>
        </div>
      </div>

      {/* 🔥 Unique Streak & Reward Section */}
      <div className="streak-rewards">
        <h3>🔥 Daily Energy Streak</h3>
        <div className="streak-row">
          <div className="energy-ring">
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray="70, 100"
                d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">70%</text>
            </svg>
            <p>Today's Energy Goal</p>
          </div>

          <div className="reward-center">
            <img src="/poses/happy-cat.png" alt="Pet Reaction" className="pet-img" />
            <p className="pet-text">Your Calm Companion is Cheering You On</p>
            <button className="mystery-btn">🎁 Open Daily Box</button>
          </div>

          <div className="aura-meter">
            <h4>🔮 Aura Meter</h4>
            <div className="aura-bar">
              <div className="aura-fill" style={{ width: "60%" }} />
            </div>
            <p>Level: Calm Explorer</p>
          </div>
        </div>

        <div className="xp-summary">
          <p>🏅 XP Gained Today: <strong>+30</strong></p>
          <p>🎯 Weekly Goal: 140 XP</p>
        </div>
      </div>
    </div>
  );
}

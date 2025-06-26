"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Add this line
import "../styles/welcome.css";

export default function HeroSection() {
  const router = useRouter(); // ✅ Add this line

  return (
    <div className="hero-about-wrapper">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image">
            <Image
              src="/Yogsathi.png"
              alt="Yoga Pose"
              fill
              className="hero-img"
            />
          </div>

          <div className="hero-content">
            <h1 className="hero-title">YogSathi</h1>
            <p className="hero-subtitle">Your personal yoga companion</p>
            <p className="hero-description">
              ✅ Start your journey to a healthier, calmer you with YogSathi!!
            </p>

            <div className="feature-buttons">
              <div className="feature-btn">🧘‍♀️ Personalized Yoga Plans</div>
              <div className="feature-btn">🥗 Balanced Diet Guidance</div>
              <div className="feature-btn">📈 Progress & Motivation</div>
            </div>

            {/* ✅ Updated button with routing */}
            <button
              className="cta-btn"
              onClick={() => router.push("/onboarding")}
            >
              Let’s Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div className="about-section">
        <h2 className="section-title">About YogSathi</h2>

        {/* YogSathi Aim Block */}
        <div
          className="about-aim"
          style={{
            margin: "20px 0",
            padding: "0 10px",
            fontSize: "1.1rem",
            color: "#4a148c",
            lineHeight: "1.6",
          }}
        >
          <p>
            YogSathi isn't just an app – it's your personal wellness companion.
            Our aim is to make yoga and mindful living accessible to everyone,
            regardless of age, body type, or lifestyle. 🌿
          </p>
          <p>
            With a perfect blend of traditional practices and modern technology,
            YogSathi guides you on a path of transformation – physically,
            mentally, and spiritually. Whether you're starting your journey or
            deepening your practice, we’re here to support you at every step.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Us</h3>
            <p>
              YogSathi is your trusted yoga partner, helping you achieve
              physical, mental, and emotional balance. Designed for every body,
              every goal.
            </p>
          </div>
          <div className="about-card">
            <h3>Why YogSathi</h3>
            <p>
              Personalized guidance, beginner-friendly programs, and a
              supportive experience – YogSathi understands your lifestyle and
              needs.
            </p>
          </div>
          <div className="about-card">
            <h3>Features</h3>
            <p>
              🧘 Yoga plans &nbsp; 🥗 Diet tips &nbsp; 📈 Progress tracking
              &nbsp; 🎯 Challenges & Rewards – all in one place!
            </p>
          </div>
          <div className="about-card">
            <h3>Future Scope</h3>
            <p>
              Integrating AI for smarter guidance, video sessions, and community
              engagement tools to evolve your wellness journey.
            </p>
          </div>
        </div>
      </div>

   



      {/* Feedback Section */}

      <div className="feedback-section">
        <h2 className="section-title">Blogs</h2>

        <div className="why-yoga-paragraph">
          <p>
            Yoga is important because it connects the body, mind, and breath. It
            helps reduce stress, improves flexibility, and enhances overall
            mental clarity. In today’s fast-paced world, yoga offers a way to
            slow down and reconnect with yourself. Practicing it regularly
            promotes emotional balance, physical health, and inner peace. It’s
            not just an activity — it’s a lifelong companion for holistic
            well-being.
          </p>
        </div>

        <div className="feedback-cards-container">
          <div className="feedback-card">
            <img
              src="/feedback1.png"
              alt="Feedback 1"
              className="feedback-img"
            />
            <p>
              “Before YogSathi, my mornings were rushed and chaotic. Now, I
              begin each day grounded and peaceful. It feels like I finally
              found space to breathe again.”
            </p>
            <span>- Anjali and Group</span>
          </div>
          <div className="feedback-card">
            <img
              src="/feedback2.png"
              alt="Feedback 2"
              className="feedback-img"
            />
            <p>
              “I used to wake up anxious and scattered. YogSathi helped me
              center myself every morning. Now I move through the day with calm
              and clarity.”
            </p>
            <span>- Priya</span>
          </div>
          <div className="feedback-card">
            <img
              src="/feedback3.png"
              alt="Feedback 3"
              className="feedback-img"
            />
            <p>
              I felt disconnected from myself. YogSathi brought me back on the
              mat. Now, I feel every breath, every move.
            </p>
            <span>- Ravi</span>
          </div>
          <div className="feedback-card">
            <img
              src="/feedback4.png"
              alt="Feedback 4"
              className="feedback-img"
            />
            <p>
              Woke up tired, carried stress all day. Now, YogSathi sets the tone
              every morning. Fresh start, calm mind, grateful heart.
            </p>
            <span>- Akash</span>
          </div>
          <div className="feedback-card">
            <img
              src="/feedback5.png"
              alt="Feedback 5"
              className="feedback-img"
            />
            <p>
              I never thought 10 minutes of yoga could change my day. With
              YogSathi, I feel light, calm, and recharged — every single
              morning.
            </p>
            <span>- Meera</span>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import "../../styles/asanadiet.css";

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Balance Body & Mind</h1>
          <p>Personalized Yoga and Diet Plans just for you</p>
          <button className="cta-btn">Start My Journey</button>
        </div>
        <div className="hero-image">
          <img src="/Yogsathi.png" alt="Yoga Pose" />
        </div>
      </section>

      {/* Contact Section */}
      <div className="three-column-section">
        {/* Left - Yoga & Diet Benefits */}
        <div className="column yoga-benefits">
          <h2 className="section-title">Yoga & Diet Benefits</h2>
          <ul className="benefits-list">
            <li>🧘‍♀️ Yoga improves flexibility & reduces stress.</li>
            <li>🫀 Supports heart health and immunity naturally.</li>
            <li>💤 Enhances sleep and emotional stability.</li>
            <li>🥦 A balanced diet boosts energy and focus.</li>
            <li>🧠 Mindful eating sharpens your mental clarity.</li>
            <li>🧘‍♀️ Yoga improves flexibility & reduces stress.</li>
            <li>💨 Boosts breathing capacity & lung health.</li>
            <li>🧠 Enhances focus, clarity, and emotional balance.</li>
            <li>💤 Promotes restful sleep and fights fatigue.</li>
            <li>🥗 Balanced diet fuels energy and immune system.</li>
          </ul>
        </div>

        {/* Center - Contact Form */}
        <div className="column contact-form">
          <h2 className="form-heading">Contact</h2>
          <p className="form-info">
            We’d love to hear from you. Fill in the form below and our team will reach out.
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Email Address" required />
            <textarea placeholder="Your Message" rows={4} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="column contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.51159297545!2d81.25567310902922!3d21.195247875871598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1750927332881!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Yoga Section */}
      <section className="section yoga-section">
        <h2>🌿 Yoga Asanas</h2>
        <div className="diet-wrapper">
          {[ /* Asana cards */ ]}.map((pose, i) => (
            <div className="yoga-card" key={i}>
              <img src={pose.img} alt={pose.title} />
              <h3>{pose.title}</h3>
              <p>Duration: {pose.duration}</p>
              <p>Target: {pose.target}</p>
              <button>Play Video ▶</button>
            </div>
          ))}
        </div>
      </section>

      {/* Diet Section */}
      <section className="section diet-section">
        <h2>🍽 Diet Plans</h2>
        <div className="diet-wrapper">
          {[ /* Diet cards */ ]}.map((item, i) => (
            <div className="meal-card" key={i}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              {item.tags.map((tag, j) => (
                <span className="tag" key={j}>
                  {tag}
                </span>
              ))}
              <button>Get Recipe</button>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Benefits Section */}
      <div className="exclusive-benefits-section">
        <p className="section-subtitle">Membership Features</p>
        <h2 className="section-title">Unlock Your Exclusive Benefits</h2>

        <div className="benefits-row">
          <div className="benefits-column">
            {/* Left Benefits */}
          </div>
          <div className="benefits-column">
            {/* Right Benefits */}
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <section className="section feedback-section">
        <h2>📝 Blogs</h2>
        <div className="feedback-cards-container">
          {[ /* Feedback cards */ ]}.map((feedback, i) => (
            <div className="feedback-card" key={i}>
              <img src={feedback.img} alt={`Feedback ${i + 1}`} className="feedback-img" />
              <p>{feedback.text}</p>
              <span>- {feedback.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tracker Section */}
      <section className="section tracker-section">
        <h2>📈 Daily Tracker</h2>
        <div className="tracker-cards">
          <div className="progress-card">
            <h3>Yoga Streak</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "60%" }} />
            </div>
            <p>3 Days in a row</p>
          </div>
          <div className="progress-card">
            <h3>Mood</h3>
            <div className="emoji-row">😊 😐 😔</div>
            <p>Today: 😊</p>
          </div>
          <div className="progress-card">
            <h3>Spark Points</h3>
            <p>Earned: <strong>120</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

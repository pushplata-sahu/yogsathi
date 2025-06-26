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
            <textarea placeholder="Your Message" rows="4" required></textarea>
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
          {[
            {
              title: "Surya Namaskar",
              img: "/poses/surya.png",
              duration: "5 mins",
              target: "Full Body",
            },
            {
              title: "Naukasana",
              img: "/poses/boat.png",
              duration: "4 mins",
              target: "Core",
            },
            {
              title: "Vrikshasana",
              img: "/poses/tree.png",
              duration: "3 mins",
              target: "Balance",
            },
            {
              title: "Bhujangasana",
              img: "/poses/cobra.png",
              duration: "4 mins",
              target: "Back",
            },
            {
              title: "Adho Mukha",
              img: "/poses/downward.png",
              duration: "5 mins",
              target: "Stretch",
            },
            {
              title: "Tadasana",
              img: "/poses/mountain.png",
              duration: "3 mins",
              target: "Posture",
            },
            {
              title: "Paschimottanasana",
              img: "/poses/forwardbend.png",
              duration: "4 mins",
              target: "Hamstrings",
            },
            {
              title: "Setu Bandhasana",
              img: "/poses/bridge.png",
              duration: "4 mins",
              target: "Spine",
            },
            {
              title: "Dhanurasana",
              img: "/poses/bow.png",
              duration: "4 mins",
              target: "Flexibility",
            },
            {
              title: "Shavasana",
              img: "/poses/savasana.png",
              duration: "5 mins",
              target: "Relaxation",
            },
          ].map((pose, i) => (
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
          {[
            {
              title: "Breakfast",
              desc: "Oats + Banana + Almond Milk",
              tags: ["High Fiber", "300 kcal"],
            },
            {
              title: "Lunch",
              desc: "Grilled Veggies + Paneer",
              tags: ["Low Carb", "400 kcal"],
            },
            {
              title: "Dinner",
              desc: "Soup + Roti + Salad",
              tags: ["Light Meal", "350 kcal"],
            },
            {
              title: "Snack",
              desc: "Fruit Chaat + Green Tea",
              tags: ["Detox", "150 kcal"],
            },
            {
              title: "Post Yoga",
              desc: "Coconut Water + Nuts",
              tags: ["Electrolytes", "100 kcal"],
            },
            {
              title: "Protein Boost",
              desc: "Boiled Egg + Milk",
              tags: ["High Protein", "200 kcal"],
            },
            {
              title: "Hydration",
              desc: "Lemon Water + Cucumber",
              tags: ["Hydrating", "50 kcal"],
            },
            {
              title: "Energy",
              desc: "Peanut Butter Toast",
              tags: ["Energy", "250 kcal"],
            },
            {
              title: "Smoothie",
              desc: "Banana + Chia + Almonds",
              tags: ["Smoothie", "280 kcal"],
            },
            {
              title: "Dessert",
              desc: "Dark Chocolate + Dates",
              tags: ["Healthy Sweet", "180 kcal"],
            },
          ].map((item, i) => (
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
          {/* Left Column */}
          <div className="benefits-column">
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#e0e7ff" }}>🛡️</div>
              <div>
                <h4>Accountability Support</h4>
                <p>Stay on track with regular check-ins and guidance to ensure you meet your wellness goals.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#d1fae5" }}>📱</div>
              <div>
                <h4>Easy Accessibility</h4>
                <p>Join sessions anytime, anywhere, with simple access across devices.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#ede9fe" }}>⏰</div>
              <div>
                <h4>Habit Tracking Reminders</h4>
                <p>Receive gentle nudges to build and maintain your healthy habits effortlessly.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="benefits-column">
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#fef9c3" }}>🕒</div>
              <div>
                <h4>Flexible Timings</h4>
                <p>Choose from various time slots to fit yoga seamlessly into your schedule.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#fee2e2" }}>👥</div>
              <div>
                <h4>Community Health Programs</h4>
                <p>Engage with others in group programs that boost collective well-being.</p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon" style={{ background: "#fce7f3" }}>💪</div>
              <div>
                <h4>Physiotherapy Support</h4>
                <p>Personalized guidance from experts to aid in physical recovery and care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <section className="section feedback-section">
        <h2>📝 Blogs</h2>
        <div className="feedback-cards-container">
          {[
            {
              img: "/feedback1.png",
              text: "“Before YogSathi, my mornings were rushed and chaotic. Now, I begin each day grounded and peaceful. It feels like I finally found space to breathe again.”",
              name: "Anjali and Group",
            },
            {
              img: "/feedback2.png",
              text: "“I used to wake up anxious and scattered. YogSathi helped me center myself every morning. Now I move through the day with calm and clarity.”",
              name: "Priya",
            },
            {
              img: "/feedback3.png",
              text: "I felt disconnected from myself. YogSathi brought me back on the mat. Now, I feel every breath, every move.",
              name: "Ravi",
            },
            {
              img: "/feedback4.png",
              text: "Woke up tired, carried stress all day. Now, YogSathi sets the tone every morning. Fresh start, calm mind, grateful heart.",
              name: "Akash",
            },
            {
              img: "/feedback5.png",
              text: "I never thought 10 minutes of yoga could change my day. With YogSathi, I feel light, calm, and recharged — every single morning.",
              name: "Meera",
            },
          ].map((feedback, i) => (
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

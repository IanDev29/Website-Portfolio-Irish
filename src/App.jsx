import { useState, useEffect, useRef } from "react";

const defaultData = {
  name: "Irish Catherine Calixtro",
  age: "19",
  height: "5'1\"",
  course: "Bachelor of Science in Values Education",
  school: "Philippines Normal University",
  year: "1st Year",
  email: "irishcatherinecalixtro@gmail.com",
  tagline: "Dreamer. Creator. Learner. 🌸",
  bio: "A soft-hearted girl who finds joy in learning new things, creating meaningful work, and growing every single day. Welcome to my little corner of the internet!",
  profilePic: null,
  intro: {
    title: "Hello, I'm Irish! ✨",
    body: "I'm a passionate Values Education student who believes that genuine learning begins with the heart. From facilitating meaningful discussions to nurturing ethical thinking in others, I bring a gentle yet determined spirit to everything I do. My journey at PNU is shaping me into the kind of educator who leads not just with knowledge, but with compassion and purpose.",
    values: ["Integrity", "Compassion", "Growth", "Service"],
  },
  assessment: {
    title: "My Learning Journey 📖",
    items: [
      { subject: "Philosophy of Human Person", grade: "1.25", remark: "Excellent" },
      { subject: "Ethics and Moral Philosophy", grade: "1.50", remark: "Very Good" },
      { subject: "Social Dimensions of Education", grade: "1.25", remark: "Excellent" },
      { subject: "Child and Adolescent Development", grade: "1.75", remark: "Very Good" },
      { subject: "The Teaching Profession", grade: "1.00", remark: "Excellent" },
    ],
  },
  evidences: {
    title: "My Work & Projects 🌷",
    items: [
      { title: "Values Integration Lesson Plan", description: "A detailed lesson plan integrating core values such as honesty and empathy into a secondary-level classroom setting", category: "Teaching", icon: "📝" },
      { title: "Community Outreach Reflection Journal", description: "A reflective journal documenting my participation in a community values awareness campaign for youth", category: "Community", icon: "🤝" },
      { title: "Moral Dilemma Case Study", description: "An in-depth analysis of a real-world ethical dilemma using frameworks from moral philosophy", category: "Ethics", icon: "⚖️" },
      { title: "Values Education Advocacy Poster", description: "A visual advocacy material promoting the importance of values education in shaping responsible citizens", category: "Advocacy", icon: "🌱" },
    ],
  },
  reflection: {
    title: "Reflections 🌸",
    body: "Every challenge I've faced this semester has shaped me into a stronger, more resilient learner. I've come to understand that growth doesn't happen in comfort zones — it happens when we dare to try, fail, and try again with a smile.\n\nThe lessons and activities have taught me not just theoretical foundations, but also patience, empathy, and the courage to stand by one's values even when it's difficult. I am grateful for every late night spent reading, every discussion that stretched my thinking, and every moment that reminded me why I chose this path.",
    lessons: ["Embrace failure as a teacher", "Consistency beats perfection", "Empathy is the foundation of good teaching", "Values are lived, not just taught"],
  },
  retrospection: {
    title: "Looking Back & Forward 🦋",
    past: "When I started this journey, I was unsure of what it truly meant to be a values educator. The concepts felt abstract and the responsibility felt immense. But through every reading, reflection, and classroom discussion, I began to find my footing — and my purpose.",
    future: "As I move forward, I carry with me not just the knowledge I've gained, but a deeper sense of who I am and what I stand for. I look forward to becoming an educator who inspires students to think critically, act ethically, and live with genuine compassion for others.",
    goals: ["Deepen my understanding of moral philosophy", "Complete a community-based values advocacy project", "Develop my own reflective teaching philosophy", "Become a mentor and role model for younger students"],
  },
};

const NAV_ITEMS = ["Home", "Intro", "Assessment", "Evidences", "Reflection", "Retrospection"];

const PETAL_POSITIONS = [
  { top: "8%", left: "5%", size: 18, delay: 0 },
  { top: "15%", left: "92%", size: 14, delay: 0.5 },
  { top: "40%", left: "2%", size: 20, delay: 1 },
  { top: "60%", left: "96%", size: 12, delay: 1.5 },
  { top: "75%", left: "8%", size: 16, delay: 0.8 },
  { top: "85%", left: "88%", size: 22, delay: 0.3 },
  { top: "30%", left: "50%", size: 10, delay: 1.2 },
];

function FloatingPetal({ top, left, size, delay }) {
  return (
    <div style={{
      position: "fixed", top, left, width: size, height: size,
      opacity: 0.18, pointerEvents: "none", zIndex: 0,
      animation: `petalFloat 7s ease-in-out ${delay}s infinite alternate`,
    }}>
      🌸
    </div>
  );
}

function Navbar({ active, setActive, setAdminOpen, name }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(250,240,255,0.92)" : "rgba(250,240,255,0.7)",
      backdropFilter: "blur(18px)",
      borderBottom: scrolled ? "1.5px solid #e8c8f5" : "1.5px solid transparent",
      padding: "0 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 64,
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 4px 24px rgba(180,100,220,0.08)" : "none",
    }}>
      <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#9b5fc0", fontStyle: "italic", letterSpacing: 1 }}>
        ✿ {name ? name.split(" ")[0] : "Portfolio"}
      </span>
      <div style={{ display: "flex", gap: "0.1rem", alignItems: "center" }}>
        {NAV_ITEMS.map(item => (
          <button key={item} onClick={() => setActive(item)} style={{
            background: active === item ? "linear-gradient(135deg,#c77dff,#9b5fc0)" : "transparent",
            color: active === item ? "#fff" : "#9b5fc0",
            border: "none", borderRadius: 24,
            padding: "7px 16px", cursor: "pointer",
            fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 600,
            transition: "all 0.2s ease",
            boxShadow: active === item ? "0 4px 14px rgba(155,95,192,0.3)" : "none",
          }}>
            {item}
          </button>
        ))}
        <button onClick={() => setAdminOpen(true)} style={{
          background: "transparent", border: "1.5px solid #c77dff",
          color: "#9b5fc0", borderRadius: 24, padding: "6px 14px",
          cursor: "pointer", marginLeft: 8,
          fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 700,
          transition: "all 0.2s",
        }}>
          ⚙ Admin
        </button>
      </div>
    </nav>
  );
}

function HomeSection({ data }) {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", paddingTop: 80, gap: 32,
    }}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <div style={{
          width: 160, height: 160, borderRadius: "50%",
          background: "linear-gradient(135deg,#e8c8f5,#c77dff)",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
          boxShadow: "0 0 0 6px #f3d9ff, 0 8px 40px rgba(155,95,192,0.25)",
          animation: "floatUp 3s ease-in-out infinite alternate",
        }}>
          {data.profilePic ? (
            <img src={data.profilePic} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <span style={{ fontSize: 72 }}>🌸</span>
          )}
        </div>
        <div style={{
          position: "absolute", bottom: 8, right: 8, width: 24, height: 24,
          background: "#c77dff", borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}>✨</div>
      </div>

      <div style={{ textAlign: "center", maxWidth: 540 }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 52, margin: "0 0 8px",
          background: "linear-gradient(135deg,#9b5fc0,#c77dff,#e091f5)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          lineHeight: 1.2,
        }}>
          {data.name}
        </h1>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 18, color: "#b87fd9", margin: "0 0 6px", fontWeight: 600 }}>
          {data.tagline}
        </p>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#8a6fa0", lineHeight: 1.7, margin: "16px auto 0", maxWidth: 420 }}>
          {data.bio}
        </p>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 8,
      }}>
        {[
          { label: "Course", value: data.course.split(" ").slice(-2).join(" ") },
          { label: "Year", value: data.year },
          { label: "School", value: data.school },
        ].map(({ label, value }) => (
          <div key={label} style={{
            background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)",
            borderRadius: 18, padding: "16px 20px", textAlign: "center",
            border: "1.5px solid #f0d6ff",
            boxShadow: "0 4px 20px rgba(180,100,220,0.08)",
          }}>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "#c77dff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>{label}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#7a4d9e", marginTop: 4 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IntroSection({ data }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, maxWidth: 760, margin: "0 auto" }}>
      <SectionHeader emoji="✨" title={data.intro.title} />
      <div style={{
        background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)",
        borderRadius: 28, padding: "40px 48px", marginBottom: 32,
        border: "1.5px solid #f0d6ff",
        boxShadow: "0 8px 40px rgba(180,100,220,0.08)",
      }}>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: "#7a5a98", lineHeight: 1.85, margin: 0 }}>
          {data.intro.body}
        </p>
      </div>
      <div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#9b5fc0", marginBottom: 16 }}>My Core Values 💜</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {data.intro.values.map((v, i) => (
            <div key={i} style={{
              background: `linear-gradient(135deg, ${["#e8c8f5","#d4a8f0","#c790ea","#b870e0"][i % 4]}, ${["#f3d9ff","#e8c8f5","#d4a8f0","#c790ea"][i % 4]})`,
              borderRadius: 30, padding: "12px 28px",
              fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700,
              color: "#6a3d8f",
              boxShadow: "0 4px 16px rgba(155,95,192,0.15)",
            }}>
              {["🌸","💫","🌿","⭐"][i % 4]} {v}
            </div>
          ))}
        </div>
      </div>
      <InfoGrid data={data} />
    </div>
  );
}

function InfoGrid({ data }) {
  const fields = [
    { label: "Full Name", value: data.name, icon: "👤" },
    { label: "Age", value: data.age, icon: "🎂" },
    { label: "Height", value: data.height, icon: "📏" },
    { label: "Course", value: data.course, icon: "🎓" },
    { label: "School", value: data.school, icon: "🏫" },
    { label: "Email", value: data.email, icon: "📧" },
  ];
  return (
    <div style={{ marginTop: 36 }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#9b5fc0", marginBottom: 16 }}>About Me 🌷</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {fields.map(({ label, value, icon }) => (
          <div key={label} style={{
            background: "rgba(255,255,255,0.7)", borderRadius: 18,
            padding: "14px 20px", border: "1.5px solid #f0d6ff",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ fontSize: 22 }}>{icon}</span>
            <div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "#c77dff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.8 }}>{label}</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6a3d8f", fontWeight: 600 }}>{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AssessmentSection({ data }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, maxWidth: 760, margin: "0 auto" }}>
      <SectionHeader emoji="📖" title={data.assessment.title} />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {data.assessment.items.map((item, i) => {
          const pct = Math.max(0, Math.min(100, ((4 - parseFloat(item.grade)) / 3) * 100));
          return (
            <div key={i} style={{
              background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)",
              borderRadius: 20, padding: "22px 28px",
              border: "1.5px solid #f0d6ff",
              boxShadow: "0 4px 20px rgba(180,100,220,0.07)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 700, color: "#6a3d8f" }}>{item.subject}</span>
                <span style={{ background: "linear-gradient(135deg,#c77dff,#9b5fc0)", color: "#fff", borderRadius: 12, padding: "4px 14px", fontSize: 14, fontWeight: 700, fontFamily: "'Nunito', sans-serif" }}>
                  {item.grade} — {item.remark}
                </span>
              </div>
              <div style={{ height: 8, background: "#f0d6ff", borderRadius: 8, overflow: "hidden" }}>
                <div style={{
                  width: `${pct}%`, height: "100%",
                  background: "linear-gradient(90deg,#c77dff,#9b5fc0)",
                  borderRadius: 8, transition: "width 1s ease",
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function EvidencesSection({ data }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, maxWidth: 800, margin: "0 auto" }}>
      <SectionHeader emoji="🌷" title={data.evidences.title} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        {data.evidences.items.map((item, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.75)", backdropFilter: "blur(14px)",
            borderRadius: 24, padding: "28px 28px 24px",
            border: "1.5px solid #f0d6ff",
            boxShadow: "0 6px 30px rgba(180,100,220,0.1)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "default",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(180,100,220,0.18)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 30px rgba(180,100,220,0.1)"; }}>
            <div style={{ fontSize: 38, marginBottom: 12 }}>{item.icon}</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "#c77dff", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>{item.category}</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#7a4d9e", marginBottom: 10 }}>{item.title}</div>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#8a6fa0", lineHeight: 1.65, margin: 0 }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReflectionSection({ data }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, maxWidth: 760, margin: "0 auto" }}>
      <SectionHeader emoji="🌸" title={data.reflection.title} />
      <div style={{
        background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)",
        borderRadius: 28, padding: "40px 48px", marginBottom: 32,
        border: "1.5px solid #f0d6ff",
        boxShadow: "0 8px 40px rgba(180,100,220,0.08)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: 100, opacity: 0.06 }}>🌸</div>
        {data.reflection.body.split("\n\n").map((para, i) => (
          <p key={i} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 17, color: "#7a5a98", lineHeight: 1.9, marginBottom: i < 1 ? 20 : 0 }}>{para}</p>
        ))}
      </div>
      <div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#9b5fc0", marginBottom: 16 }}>Lessons Learned 💡</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.reflection.lessons.map((lesson, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.7)", borderRadius: 16, padding: "14px 22px",
              border: "1.5px solid #f0d6ff",
              display: "flex", alignItems: "center", gap: 14,
              fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6a3d8f", fontWeight: 600,
            }}>
              <span style={{
                width: 30, height: 30, borderRadius: "50%",
                background: "linear-gradient(135deg,#c77dff,#9b5fc0)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0,
              }}>{i + 1}</span>
              {lesson}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RetrospectionSection({ data }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 100, maxWidth: 760, margin: "0 auto", paddingBottom: 80 }}>
      <SectionHeader emoji="🦋" title={data.retrospection.title} />
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {[
          { label: "Where I Started 🌱", text: data.retrospection.past, color: "#d4a8f0" },
          { label: "Where I'm Going 🚀", text: data.retrospection.future, color: "#c77dff" },
        ].map(({ label, text, color }) => (
          <div key={label} style={{
            background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)",
            borderRadius: 24, padding: "32px 40px",
            border: `1.5px solid ${color}40`,
            boxShadow: "0 6px 30px rgba(180,100,220,0.08)",
            borderLeft: `5px solid ${color}`,
          }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#9b5fc0", margin: "0 0 14px" }}>{label}</h3>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 16, color: "#7a5a98", lineHeight: 1.85, margin: 0 }}>{text}</p>
          </div>
        ))}
        <div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#9b5fc0", marginBottom: 16 }}>Goals Ahead ⭐</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {data.retrospection.goals.map((goal, i) => (
              <div key={i} style={{
                background: "linear-gradient(135deg,rgba(199,125,255,0.12),rgba(155,95,192,0.08))",
                borderRadius: 16, padding: "14px 20px",
                border: "1.5px solid #f0d6ff",
                fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#6a3d8f", fontWeight: 600,
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span>🌟</span> {goal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ emoji, title }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 38, margin: 0,
        background: "linear-gradient(135deg,#9b5fc0,#c77dff)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      }}>{title}</h2>
      <div style={{ width: 60, height: 3, background: "linear-gradient(90deg,#c77dff,transparent)", borderRadius: 2, marginTop: 10 }} />
    </div>
  );
}

function AdminLoginModal({ onSuccess, onClose }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogin = () => {
    if (pw === "irishpanget123") {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(80,30,120,0.25)", backdropFilter: "blur(8px)",
      zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "rgba(253,245,255,0.98)", borderRadius: 28, width: "min(90vw, 380px)",
        padding: "40px 36px", border: "1.5px solid #e8c8f5",
        boxShadow: "0 20px 80px rgba(120,50,180,0.2)",
        textAlign: "center",
        animation: shake ? "shake 0.4s ease" : "none",
      }}>
        <style>{`@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }`}</style>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🔐</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#7a4d9e", marginBottom: 6 }}>Admin Access</h2>
        <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "#b07fd9", marginBottom: 24 }}>Enter your password to continue</p>
        <input
          type="password"
          placeholder="Password"
          value={pw}
          onChange={e => { setPw(e.target.value); setError(false); }}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
          style={{
            width: "100%", padding: "12px 16px", borderRadius: 14,
            border: `1.5px solid ${error ? "#e05599" : "#e8c8f5"}`,
            fontFamily: "'Nunito', sans-serif", fontSize: 15, color: "#5a3a7e",
            background: "rgba(255,255,255,0.9)", outline: "none",
            boxSizing: "border-box", marginBottom: 8, textAlign: "center",
            letterSpacing: 4,
          }}
          autoFocus
        />
        {error && <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#d04488", marginBottom: 10 }}>❌ Incorrect password. Try again!</p>}
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <button onClick={onClose} style={{ flex: 1, background: "transparent", border: "1.5px solid #e8c8f5", color: "#9b5fc0", borderRadius: 14, padding: "11px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700 }}>Cancel</button>
          <button onClick={handleLogin} style={{ flex: 1, background: "linear-gradient(135deg,#c77dff,#9b5fc0)", color: "#fff", border: "none", borderRadius: 14, padding: "11px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, boxShadow: "0 4px 16px rgba(155,95,192,0.35)" }}>
            Enter ✨
          </button>
        </div>
      </div>
    </div>
  );
}

function AdminModal({ data, setData, onClose }) {
  const [tab, setTab] = useState("profile");
  const [local, setLocal] = useState(JSON.parse(JSON.stringify(data)));
  const [picPreview, setPicPreview] = useState(data.profilePic);
  const fileRef = useRef();

  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { setPicPreview(ev.target.result); setLocal(d => ({ ...d, profilePic: ev.target.result })); };
    reader.readAsDataURL(file);
  };

  const updateNested = (section, key, val) => setLocal(d => ({ ...d, [section]: { ...d[section], [key]: val } }));

  const updateAssessmentItem = (i, key, val) => {
    setLocal(d => {
      const items = [...d.assessment.items];
      items[i] = { ...items[i], [key]: val };
      return { ...d, assessment: { ...d.assessment, items } };
    });
  };

  const updateEvidenceItem = (i, key, val) => {
    setLocal(d => {
      const items = [...d.evidences.items];
      items[i] = { ...items[i], [key]: val };
      return { ...d, evidences: { ...d.evidences, items } };
    });
  };

  const addAssessmentItem = () => setLocal(d => ({
    ...d, assessment: { ...d.assessment, items: [...d.assessment.items, { subject: "", grade: "", remark: "" }] },
  }));

  const removeAssessmentItem = (i) => setLocal(d => ({
    ...d, assessment: { ...d.assessment, items: d.assessment.items.filter((_, idx) => idx !== i) },
  }));

  const addEvidenceItem = () => setLocal(d => ({
    ...d, evidences: { ...d.evidences, items: [...d.evidences.items, { title: "", category: "", icon: "✨", description: "" }] },
  }));

  const removeEvidenceItem = (i) => setLocal(d => ({
    ...d, evidences: { ...d.evidences, items: d.evidences.items.filter((_, idx) => idx !== i) },
  }));

  const tabs = [
    { id: "profile", label: "👤 Profile" },
    { id: "intro", label: "✨ Intro" },
    { id: "assessment", label: "📖 Assessment" },
    { id: "evidences", label: "🌷 Evidences" },
    { id: "reflection", label: "🌸 Reflection" },
    { id: "retrospection", label: "🦋 Retrospection" },
  ];

  const inputStyle = {
    width: "100%", padding: "10px 14px", borderRadius: 12,
    border: "1.5px solid #e8c8f5", fontFamily: "'Nunito', sans-serif",
    fontSize: 14, color: "#5a3a7e", background: "rgba(255,255,255,0.9)",
    outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };
  const labelStyle = { fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700, color: "#b07fd9", textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 6, display: "block" };

  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(80,30,120,0.25)", backdropFilter: "blur(8px)",
      zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center",
    }} onClick={e => e.target === e.currentTarget && onClose()}>
      <div style={{
        background: "rgba(253,245,255,0.98)", borderRadius: 28, width: "min(90vw, 680px)",
        maxHeight: "88vh", display: "flex", flexDirection: "column",
        border: "1.5px solid #e8c8f5",
        boxShadow: "0 20px 80px rgba(120,50,180,0.2)",
      }}>
        <div style={{ padding: "28px 32px 0", borderBottom: "1.5px solid #f0d6ff" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "#7a4d9e", margin: 0 }}>⚙️ Admin Panel</h2>
            <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#b07fd9" }}>✕</button>
          </div>
          <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 0 }}>
            {tabs.map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{
                background: tab === t.id ? "linear-gradient(135deg,#c77dff,#9b5fc0)" : "transparent",
                color: tab === t.id ? "#fff" : "#9b5fc0",
                border: "none", borderRadius: "14px 14px 0 0",
                padding: "8px 14px", cursor: "pointer", whiteSpace: "nowrap",
                fontFamily: "'Nunito', sans-serif", fontSize: 13, fontWeight: 600,
                transition: "all 0.2s",
              }}>{t.label}</button>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
          {tab === "profile" && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 8 }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "linear-gradient(135deg,#e8c8f5,#c77dff)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  overflow: "hidden", flexShrink: 0,
                  border: "2px solid #f0d6ff",
                }}>
                  {picPreview ? <img src={picPreview} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: 36 }}>🌸</span>}
                </div>
                <div>
                  <input ref={fileRef} type="file" accept="image/*" style={{ display: "none" }} onChange={handlePicChange} />
                  <button onClick={() => fileRef.current.click()} style={{
                    background: "linear-gradient(135deg,#c77dff,#9b5fc0)", color: "#fff",
                    border: "none", borderRadius: 14, padding: "10px 20px",
                    cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700,
                  }}>📷 Upload Photo</button>
                  <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "#b07fd9", margin: "6px 0 0" }}>PNG, JPG supported</p>
                </div>
              </div>
              {[["name","Full Name"],["age","Age"],["height","Height"],["course","Course"],["school","School"],["year","Year Level"],["email","Email"],["tagline","Tagline"],].map(([k, lbl]) => (
                <div key={k}>
                  <label style={labelStyle}>{lbl}</label>
                  <input style={inputStyle} value={local[k]} onChange={e => setLocal(d => ({ ...d, [k]: e.target.value }))} />
                </div>
              ))}
              <div>
                <label style={labelStyle}>Bio</label>
                <textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} value={local.bio} onChange={e => setLocal(d => ({ ...d, bio: e.target.value }))} />
              </div>
            </>
          )}

          {tab === "intro" && (
            <>
              <div><label style={labelStyle}>Section Title</label><input style={inputStyle} value={local.intro.title} onChange={e => updateNested("intro","title",e.target.value)} /></div>
              <div><label style={labelStyle}>Body Text</label><textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} value={local.intro.body} onChange={e => updateNested("intro","body",e.target.value)} /></div>
              <div><label style={labelStyle}>Core Values (comma-separated)</label>
                <input style={inputStyle} value={local.intro.values.join(", ")} onChange={e => updateNested("intro","values",e.target.value.split(",").map(v => v.trim()).filter(Boolean))} /></div>
            </>
          )}

          {tab === "assessment" && (
            <>
              <div><label style={labelStyle}>Section Title</label><input style={inputStyle} value={local.assessment.title} onChange={e => updateNested("assessment","title",e.target.value)} /></div>
              {local.assessment.items.map((item, i) => (
                <div key={i} style={{ background: "#fdf0ff", borderRadius: 16, padding: 16, border: "1px solid #f0d6ff", position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#c77dff", fontWeight: 700 }}>Subject {i + 1}</span>
                    <button onClick={() => removeAssessmentItem(i)} style={{ background: "#ffe0f5", border: "none", borderRadius: 10, padding: "4px 10px", cursor: "pointer", color: "#d04488", fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700 }}>🗑 Remove</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 10 }}>
                    <div><label style={labelStyle}>Subject</label><input style={inputStyle} value={item.subject} onChange={e => updateAssessmentItem(i,"subject",e.target.value)} /></div>
                    <div><label style={labelStyle}>Grade</label><input style={inputStyle} value={item.grade} onChange={e => updateAssessmentItem(i,"grade",e.target.value)} /></div>
                    <div><label style={labelStyle}>Remark</label><input style={inputStyle} value={item.remark} onChange={e => updateAssessmentItem(i,"remark",e.target.value)} /></div>
                  </div>
                </div>
              ))}
              <button onClick={addAssessmentItem} style={{ background: "linear-gradient(135deg,#e8c8f5,#d4a8f0)", border: "1.5px dashed #c77dff", borderRadius: 16, padding: "14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#7a4d9e", width: "100%", transition: "all 0.2s" }}>
                + Add Subject
              </button>
            </>
          )}

          {tab === "evidences" && (
            <>
              <div><label style={labelStyle}>Section Title</label><input style={inputStyle} value={local.evidences.title} onChange={e => updateNested("evidences","title",e.target.value)} /></div>
              {local.evidences.items.map((item, i) => (
                <div key={i} style={{ background: "#fdf0ff", borderRadius: 16, padding: 16, border: "1px solid #f0d6ff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#c77dff", fontWeight: 700 }}>Project {i + 1}</span>
                    <button onClick={() => removeEvidenceItem(i)} style={{ background: "#ffe0f5", border: "none", borderRadius: 10, padding: "4px 10px", cursor: "pointer", color: "#d04488", fontFamily: "'Nunito', sans-serif", fontSize: 12, fontWeight: 700 }}>🗑 Remove</button>
                  </div>
                  {[["title","Project Title"],["category","Category"],["icon","Icon (emoji)"],["description","Description"]].map(([k,lbl]) => (
                    <div key={k} style={{ marginBottom: 10 }}><label style={labelStyle}>{lbl}</label>
                      {k === "description" ? <textarea style={{ ...inputStyle, minHeight: 70, resize: "vertical" }} value={item[k]} onChange={e => updateEvidenceItem(i,k,e.target.value)} /> : <input style={inputStyle} value={item[k]} onChange={e => updateEvidenceItem(i,k,e.target.value)} />}
                    </div>
                  ))}
                </div>
              ))}
              <button onClick={addEvidenceItem} style={{ background: "linear-gradient(135deg,#e8c8f5,#d4a8f0)", border: "1.5px dashed #c77dff", borderRadius: 16, padding: "14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, color: "#7a4d9e", width: "100%", transition: "all 0.2s" }}>
                + Add Project
              </button>
            </>
          )}

          {tab === "reflection" && (
            <>
              <div><label style={labelStyle}>Section Title</label><input style={inputStyle} value={local.reflection.title} onChange={e => updateNested("reflection","title",e.target.value)} /></div>
              <div><label style={labelStyle}>Reflection Body</label><textarea style={{ ...inputStyle, minHeight: 160, resize: "vertical" }} value={local.reflection.body} onChange={e => updateNested("reflection","body",e.target.value)} /></div>
              <div><label style={labelStyle}>Lessons Learned (one per line)</label><textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={local.reflection.lessons.join("\n")} onChange={e => updateNested("reflection","lessons",e.target.value.split("\n").filter(Boolean))} /></div>
            </>
          )}

          {tab === "retrospection" && (
            <>
              <div><label style={labelStyle}>Section Title</label><input style={inputStyle} value={local.retrospection.title} onChange={e => updateNested("retrospection","title",e.target.value)} /></div>
              <div><label style={labelStyle}>Where I Started</label><textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={local.retrospection.past} onChange={e => updateNested("retrospection","past",e.target.value)} /></div>
              <div><label style={labelStyle}>Where I'm Going</label><textarea style={{ ...inputStyle, minHeight: 100, resize: "vertical" }} value={local.retrospection.future} onChange={e => updateNested("retrospection","future",e.target.value)} /></div>
              <div><label style={labelStyle}>Goals (one per line)</label><textarea style={{ ...inputStyle, minHeight: 90, resize: "vertical" }} value={local.retrospection.goals.join("\n")} onChange={e => updateNested("retrospection","goals",e.target.value.split("\n").filter(Boolean))} /></div>
            </>
          )}
        </div>

        <div style={{ padding: "16px 32px 24px", borderTop: "1.5px solid #f0d6ff", display: "flex", gap: 12, justifyContent: "flex-end" }}>
          <button onClick={onClose} style={{ background: "transparent", border: "1.5px solid #e8c8f5", color: "#9b5fc0", borderRadius: 14, padding: "10px 24px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700 }}>Cancel</button>
          <button onClick={() => { setData(local); onClose(); }} style={{ background: "linear-gradient(135deg,#c77dff,#9b5fc0)", color: "#fff", border: "none", borderRadius: 14, padding: "10px 28px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14, fontWeight: 700, boxShadow: "0 4px 16px rgba(155,95,192,0.35)" }}>
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState("Home");
  const [data, setData] = useState(() => {
    try {
      const version = localStorage.getItem("portfolioVersion");
      if (version !== "irish-v1") {
        localStorage.removeItem("portfolioData");
        localStorage.setItem("portfolioVersion", "irish-v1");
        return defaultData;
      }
      const saved = localStorage.getItem("portfolioData");
      return saved ? JSON.parse(saved) : defaultData;
    } catch {
      return defaultData;
    }
  });
  const [loginOpen, setLoginOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  const handleAdminClick = () => setLoginOpen(true);
  const handleLoginSuccess = () => { setLoginOpen(false); setAdminOpen(true); };

  const handleSetData = (newData) => {
    setData(newData);
    try {
      localStorage.setItem("portfolioData", JSON.stringify(newData));
    } catch {
      // storage unavailable
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Nunito:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: linear-gradient(135deg,#fdf4ff 0%,#f5e6ff 40%,#ede0ff 100%); min-height: 100vh; }
        @keyframes floatUp { from { transform: translateY(0); } to { transform: translateY(-12px); } }
        @keyframes petalFloat { from { transform: translateY(0) rotate(0deg); } to { transform: translateY(-18px) rotate(20deg); } }
        ::-webkit-scrollbar { width: 6px; } ::-webkit-scrollbar-track { background: #f5e6ff; } ::-webkit-scrollbar-thumb { background: #c77dff; border-radius: 3px; }
      `}</style>

      {PETAL_POSITIONS.map((p, i) => <FloatingPetal key={i} {...p} />)}
      <Navbar active={active} setActive={setActive} setAdminOpen={handleAdminClick} name={data.name} />

      <div style={{ padding: "0 5vw", maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {active === "Home" && <HomeSection data={data} />}
        {active === "Intro" && <IntroSection data={data} />}
        {active === "Assessment" && <AssessmentSection data={data} />}
        {active === "Evidences" && <EvidencesSection data={data} />}
        {active === "Reflection" && <ReflectionSection data={data} />}
        {active === "Retrospection" && <RetrospectionSection data={data} />}
      </div>

      {loginOpen && <AdminLoginModal onSuccess={handleLoginSuccess} onClose={() => setLoginOpen(false)} />}
      {adminOpen && <AdminModal data={data} setData={handleSetData} onClose={() => setAdminOpen(false)} />}
    </>
  );
}

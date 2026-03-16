import { useState, useEffect, useRef } from "react";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isInView];
};

const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const services = [
  { icon: "⚙️", title: "Custom Software Projects", desc: "Tailored solutions built to your exact specifications and requirements." },
  { icon: "🌐", title: "Web Development Projects", desc: "Full-stack web applications using modern frameworks and technologies." },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform and native mobile apps for Android and iOS." },
  { icon: "🤖", title: "AI & Machine Learning", desc: "Intelligent systems with neural networks, NLP, and computer vision." },
  { icon: "📊", title: "Data Science & Analytics", desc: "Data pipelines, visualization dashboards, and predictive models." },
  { icon: "🎓", title: "Final Year & Minor Projects", desc: "Complete project packages for your academic submissions." },
  { icon: "📝", title: "Mini Projects & Assignments", desc: "Quick turnaround on smaller academic tasks and assignments." },
  { icon: "📄", title: "Project Documentation", desc: "Professional reports, PPTs, and well-commented source code." },
  { icon: "🛠️", title: "Demo & Setup Support", desc: "Full setup assistance, live demos, and deployment guidance." },
];

const projects = [
  { name: "AI Stress Detection from Voice", tech: "Python · TensorFlow · Librosa", desc: "ML model that analyzes vocal patterns and speech features to detect stress levels in real-time audio input.", color: "#3b82f6" },
  { name: "Face Recognition Attendance", tech: "OpenCV · Python · Flask", desc: "Automated attendance system using facial recognition with a web dashboard for tracking and reports.", color: "#6366f1" },
  { name: "E-commerce Website", tech: "React · Node.js · MongoDB", desc: "Full-featured online store with cart, payments, admin panel, and responsive design.", color: "#0ea5e9" },
  { name: "Smart Bus Tracking App", tech: "Flutter · Firebase · Maps API", desc: "Real-time GPS-based bus tracking mobile app with route optimization and ETA predictions.", color: "#8b5cf6" },
  { name: "Fake News Detection", tech: "Python · NLP · BERT", desc: "NLP-powered system that classifies news articles as real or fake using transformer models.", color: "#2563eb" },
  { name: "Tourism Recommendation", tech: "Python · Collaborative Filtering", desc: "Personalized travel recommendation engine based on user preferences and review analysis.", color: "#7c3aed" },
];

const features = [
  { icon: "✨", title: "Clean & Well-Structured Code", desc: "Industry-standard coding practices with proper documentation and comments." },
  { icon: "⚡", title: "On-Time Delivery", desc: "We respect your deadlines. Every project delivered on schedule, guaranteed." },
  { icon: "🎤", title: "Easy Explanation for Viva", desc: "Code walkthroughs and concept explanations so you ace your viva with confidence." },
  { icon: "🔧", title: "Fully Customizable Projects", desc: "Every project tailored to your unique requirements and specifications." },
  { icon: "💰", title: "Student Affordable Prices", desc: "Premium quality projects at prices designed for student budgets." },
];

const steps = [
  { num: "01", title: "Choose Your Project", desc: "Browse our catalog or describe your custom project requirements." },
  { num: "02", title: "Discuss Requirements", desc: "We fine-tune scope, tech stack, and timeline together." },
  { num: "03", title: "Project Development", desc: "Our experts build your project with regular progress updates." },
  { num: "04", title: "Delivery & Support", desc: "Get your project with report, PPT, source code, and demo support." },
];

const testimonials = [
  { text: "Helped me complete my final year AI project quickly. The code quality was outstanding and the documentation was thorough.", name: "Priya S.", role: "B.Tech CSE, Final Year" },
  { text: "Clean code and perfect documentation. My professor was genuinely impressed with the project structure.", name: "Rahul M.", role: "M.Tech AI/ML" },
  { text: "Got my mini project done in 3 days with full explanation. Aced my viva without any stress!", name: "Ananya K.", role: "B.Tech IT, 3rd Year" },
];

export default function BuildBuddyLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#ffffff", color: "#0f172a", overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #3b82f6; color: white; }

        .nav-fixed {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.3s ease;
        }
        .nav-scrolled {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          box-shadow: 0 1px 30px rgba(15,23,42,0.06);
        }

        .hero-gradient {
          background: linear-gradient(165deg, #0f172a 0%, #1e293b 35%, #1e3a5f 60%, #1e40af 100%);
          position: relative;
          overflow: hidden;
        }
        .hero-gradient::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(59,130,246,0.15) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 50% at 20% 80%, rgba(99,102,241,0.1) 0%, transparent 60%);
        }
        .hero-gradient::after {
          content: '';
          position: absolute; bottom: -2px; left: 0; right: 0; height: 120px;
          background: linear-gradient(to top, #ffffff, transparent);
        }

        .grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .float-orb {
          position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4;
          animation: orbFloat 8s ease-in-out infinite alternate;
        }
        @keyframes orbFloat {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(30px, -20px) scale(1.1); }
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white; border: none; padding: 14px 32px; border-radius: 12px;
          font-size: 15px; font-weight: 600; cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(37,99,235,0.3);
          font-family: 'DM Sans', sans-serif;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(37,99,235,0.4);
        }
        .btn-secondary {
          background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2);
          padding: 14px 32px; border-radius: 12px; font-size: 15px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease; backdrop-filter: blur(10px);
          font-family: 'DM Sans', sans-serif;
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.35);
        }
        .btn-outline {
          background: transparent; color: #2563eb; border: 1.5px solid #dbeafe;
          padding: 10px 22px; border-radius: 10px; font-size: 14px; font-weight: 600;
          cursor: pointer; transition: all 0.3s ease; font-family: 'DM Sans', sans-serif;
        }
        .btn-outline:hover {
          background: #eff6ff; border-color: #93c5fd;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 16px;
          padding: 28px 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }
        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(15,23,42,0.08);
          border-color: #dbeafe;
        }

        .project-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px rgba(15,23,42,0.1);
        }

        .feature-card {
          background: linear-gradient(135deg, #f8fafc, #ffffff);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 32px 28px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #3b82f6, #6366f1);
          transform: scaleX(0);
          transition: transform 0.4s ease;
          transform-origin: left;
        }
        .feature-card:hover::before { transform: scaleX(1); }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(15,23,42,0.06);
        }

        .step-line {
          position: absolute; top: 28px; left: 28px; right: 28px; height: 2px;
          background: linear-gradient(90deg, #3b82f6, #6366f1, #8b5cf6, #3b82f6);
        }

        .testimonial-card {
          background: #ffffff;
          border: 1px solid #f1f5f9;
          border-radius: 18px;
          padding: 32px;
          transition: all 0.3s ease;
        }
        .testimonial-card:hover {
          box-shadow: 0 15px 40px rgba(15,23,42,0.06);
        }

        .section-label {
          font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #3b82f6; margin-bottom: 12px;
          font-family: 'DM Sans', sans-serif;
        }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700; color: #0f172a; line-height: 1.2; margin-bottom: 16px;
        }
        .section-desc {
          font-size: 17px; color: #64748b; line-height: 1.7; max-width: 560px;
        }

        .contact-section {
          background: linear-gradient(165deg, #0f172a, #1e293b, #1e3a5f);
          position: relative; overflow: hidden;
        }

        .footer-section {
          background: #020617;
        }

        .nav-link {
          color: #64748b; font-size: 14px; font-weight: 500; cursor: pointer;
          transition: color 0.2s; border: none; background: none;
          font-family: 'DM Sans', sans-serif; padding: 8px 0;
        }
        .nav-link:hover { color: #0f172a; }

        .mobile-menu {
          position: fixed; inset: 0; background: rgba(15,23,42,0.5);
          backdrop-filter: blur(8px); z-index: 200;
          display: flex; justify-content: flex-end;
        }
        .mobile-drawer {
          background: white; width: 280px; padding: 32px 24px;
          display: flex; flex-direction: column; gap: 8px;
          box-shadow: -10px 0 40px rgba(0,0,0,0.1);
        }
        .mobile-nav-link {
          padding: 14px 16px; border-radius: 10px; font-size: 15px; font-weight: 500;
          color: #334155; cursor: pointer; transition: all 0.2s; border: none;
          background: none; text-align: left; font-family: 'DM Sans', sans-serif;
        }
        .mobile-nav-link:hover { background: #f1f5f9; color: #0f172a; }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }

          /* Hero */
          .hero-buttons { flex-direction: column !important; gap: 12px !important; }
          .hero-buttons button { width: 100% !important; }

          /* Grids → single column */
          .services-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .projects-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          .features-grid { grid-template-columns: 1fr !important; gap: 14px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; gap: 16px !important; }

          /* Steps */
          .steps-row { flex-direction: column !important; align-items: center !important; gap: 32px !important; }
          .steps-row > * { width: 100% !important; }

          /* Footer */
          .footer-links { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }

          /* Reduce section padding */
          .section-mobile-pad { padding: 60px 16px !important; }

          /* Section desc full width */
          .section-desc { max-width: 100% !important; font-size: 15px !important; }

          /* Service / feature cards */
          .service-card { padding: 22px 18px !important; }
          .feature-card { padding: 24px 20px !important; }
          .testimonial-card { padding: 24px 20px !important; }

          /* Buttons full tap area */
          .btn-primary, .btn-secondary { padding: 14px 24px !important; font-size: 15px !important; }
        }

        @media (max-width: 480px) {
          .section-title { font-size: 24px !important; }
          .section-label { font-size: 11px !important; }
          .hero-stat-row { gap: 24px !important; }
          .project-card-body { padding: 18px !important; }
        }

        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`nav-fixed ${scrollY > 40 ? "nav-scrolled" : ""}`}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: scrollY > 40 ? "linear-gradient(135deg, #3b82f6, #2563eb)" : "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 800, color: "white",
              fontFamily: "'Syne', sans-serif",
              transition: "all 0.3s",
            }}>B</div>
            <span style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 20,
              color: scrollY > 40 ? "#0f172a" : "white", transition: "color 0.3s",
            }}>BuildBuddy</span>
          </div>
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {[["home", "Home"], ["services", "Services"], ["projects", "Projects"], ["why", "Why Us"], ["how", "How It Works"], ["contact", "Contact"]].map(([id, label]) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}
                style={{ color: scrollY > 40 ? "#64748b" : "rgba(255,255,255,0.7)" }}
              >{label}</button>
            ))}
            <button className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }} onClick={() => scrollTo("contact")}>Get Started</button>
          </div>
          <button className="mobile-toggle" onClick={() => setMenuOpen(true)}
            style={{
              background: "none", border: "none", cursor: "pointer", padding: 8,
              display: "flex", flexDirection: "column", gap: 5,
            }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{ width: 22, height: 2, borderRadius: 2, background: scrollY > 40 ? "#334155" : "white" }} />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18 }}>BuildBuddy</span>
              <button onClick={() => setMenuOpen(false)} style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#64748b" }}>×</button>
            </div>
            {[["home", "Home"], ["services", "Services"], ["projects", "Projects"], ["why", "Why Us"], ["how", "How It Works"], ["contact", "Contact"]].map(([id, label]) => (
              <button key={id} className="mobile-nav-link" onClick={() => scrollTo(id)}>{label}</button>
            ))}
            <button className="btn-primary" style={{ marginTop: 12, width: "100%", textAlign: "center" }} onClick={() => scrollTo("contact")}>Get Started</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero-gradient" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative" }}>
        <div className="grid-overlay" />
        <div className="float-orb" style={{ width: 500, height: 500, background: "rgba(59,130,246,0.2)", top: "-10%", right: "-5%" }} />
        <div className="float-orb" style={{ width: 300, height: 300, background: "rgba(99,102,241,0.15)", bottom: "10%", left: "5%", animationDelay: "3s" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(100px, 18vw, 140px) clamp(16px, 4vw, 24px) clamp(60px, 10vw, 100px)", position: "relative", zIndex: 2, width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 40, padding: "8px 18px", marginBottom: 28,
              backdropFilter: "blur(10px)",
            }}>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>🚀 Projects Made Simple</span>
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(36px, 9vw, 76px)",
              fontWeight: 800, color: "white", lineHeight: 1.05, marginBottom: 24,
              letterSpacing: "-0.02em",
            }}>
              Build<span style={{ color: "#60a5fa" }}>Buddy</span>
            </h1>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(17px, 4vw, 28px)",
              fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.3, marginBottom: 20,
            }}>
              Your Go-To Solution for<br /> Projects
            </h2>
            <p style={{
              fontSize: "clamp(14px, 3.5vw, 17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 40, maxWidth: 500,
            }}>
              Get custom software projects, AI/ML projects, web apps, and mobile applications ready for submission — with full documentation and viva support.
            </p>
            <div className="hero-buttons" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button className="btn-primary" style={{ padding: "16px 36px", fontSize: 16 }} onClick={() => scrollTo("projects")}>Explore Projects</button>
              <button className="btn-secondary" onClick={() => scrollTo("contact")}>Contact Us</button>
            </div>
            <div className="hero-stat-row" style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
              {[["30+", "Projects Delivered"], ["50+", "Happy Students"], ["50+", "Tech Stacks"]].map(([num, label]) => (
                <div key={num}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 800, color: "white" }}>{num}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-mobile-pad" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">Our Services</div>
            <h2 className="section-title">Everything You Need to Succeed</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>From concept to submission, we handle every aspect of your engineering project with professional quality.</p>
          </div>
        </AnimatedSection>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <div className="service-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 8, color: "#0f172a" }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-mobile-pad" style={{ padding: "100px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="section-label">Featured Projects</div>
              <h2 className="section-title">Projects That Impress</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>Explore our portfolio of successfully delivered projects across various domains.</p>
            </div>
          </AnimatedSection>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {projects.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="project-card">
                  <div style={{
                    height: 160,
                    background: `linear-gradient(135deg, ${p.color}15, ${p.color}08)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative", overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute", width: 200, height: 200, borderRadius: "50%",
                      background: `${p.color}10`, top: -60, right: -40,
                    }} />
                    <div style={{
                      width: 56, height: 56, borderRadius: 14,
                      background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 24, color: "white", fontWeight: 700,
                      fontFamily: "'Syne', sans-serif", boxShadow: `0 8px 24px ${p.color}30`,
                    }}>
                      {p.name[0]}
                    </div>
                  </div>
                  <div className="project-card-body" style={{ padding: "24px" }}>
                    <div style={{
                      display: "inline-block", padding: "4px 12px", borderRadius: 6,
                      background: `${p.color}0a`, border: `1px solid ${p.color}18`,
                      fontSize: 12, fontWeight: 600, color: p.color, marginBottom: 12,
                    }}>{p.tech}</div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, marginBottom: 18 }}>{p.desc}</p>
                    <button className="btn-outline" onClick={() => scrollTo("contact")}>View Details →</button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BuildBuddy */}
      <section id="why" className="section-mobile-pad" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">Why BuildBuddy</div>
            <h2 className="section-title">Built for Students, by Experts</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>We understand academic requirements and deliver projects that meet the highest standards.</p>
          </div>
        </AnimatedSection>
        <div className="features-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {features.map((f, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="feature-card">
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, marginBottom: 18,
                }}>{f.icon}</div>
                <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="section-mobile-pad" style={{ padding: "100px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <div className="section-label">How It Works</div>
              <h2 className="section-title">Four Simple Steps</h2>
              <p className="section-desc" style={{ margin: "0 auto" }}>From idea to submission-ready project in just four easy steps.</p>
            </div>
          </AnimatedSection>
          <div className="steps-row" style={{ display: "flex", gap: 24, position: "relative" }}>
            {steps.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.12} className="" style={{ flex: 1 }}>
                <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 800, color: "white",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.25)",
                  }}>{s.num}</div>
                  {i < 3 && <div style={{
                    position: "absolute", top: 28, left: "calc(50% + 36px)", width: "calc(100% - 72px)",
                    height: 2, background: "linear-gradient(90deg, #3b82f6, #93c5fd)",
                    display: "none",
                  }} className="step-connector" />}
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.6, maxWidth: 240, margin: "0 auto" }}>{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-mobile-pad" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">Student Testimonials</div>
            <h2 className="section-title">Loved by Students</h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>Hear from students who achieved academic success with BuildBuddy.</p>
          </div>
        </AnimatedSection>
        <div className="testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="testimonial-card">
                <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                  {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ fontSize: 18 }}>⭐</span>)}
                </div>
                <p style={{ fontSize: 15, color: "#334155", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${["#3b82f6", "#6366f1", "#0ea5e9"][i]}, ${["#2563eb", "#4f46e5", "#0284c7"][i]})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontWeight: 700, fontSize: 15, fontFamily: "'Syne', sans-serif",
                  }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: "#0f172a" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-mobile-pad" style={{ padding: "100px 24px", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <div className="grid-overlay" />
          <div className="float-orb" style={{ width: 400, height: 400, background: "rgba(59,130,246,0.12)", bottom: "-10%", right: "10%" }} />
        </div>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
          <AnimatedSection>
            <div className="section-label" style={{ color: "#60a5fa" }}>Get In Touch</div>
            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 16,
            }}>Ready to Start Your Project?</h2>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 12 }}>
              Reach out to us and let's bring your project idea to life.
            </p>
            {/* Contact Info Pills */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "12px 24px",
              }}>
                <span style={{ fontSize: 16 }}>📧</span>
                <span style={{ color: "#93c5fd", fontWeight: 500, fontSize: 15 }}>buildbuddy.project@gmail.com</span>
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12, padding: "12px 24px",
              }}>
                <span style={{ fontSize: 16 }}>📞</span>
                <span style={{ color: "#93c5fd", fontWeight: 500, fontSize: 15 }}>+91 79752 76349</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/917975276349?text=Hi%20BuildBuddy%2C%20I%20need%20help%20with%20a%20project!"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "white", border: "none", padding: "14px 28px",
                  borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.112.549 4.094 1.508 5.814L.057 23.427a.5.5 0 0 0 .609.601l5.79-1.516A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.6-.485-5.113-1.336l-.364-.213-3.779.99.994-3.688-.234-.38A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </button>
              </a>

              {/* Call */}
              <a href="tel:+917975276349" style={{ textDecoration: "none" }}>
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  color: "white", border: "none", padding: "14px 28px",
                  borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Us
                </button>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/build._.buddy?igsh=NnhxczA1amphZXY0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  color: "white", border: "none", padding: "14px 28px",
                  borderRadius: 12, fontSize: 15, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: "0 4px 20px rgba(220,39,67,0.3)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                  Instagram
                </button>
              </a>

              {/* Email */}
              <a href="mailto:buildbuddy.project@gmail.com" style={{ textDecoration: "none" }}>
                <button className="btn-secondary" style={{ padding: "14px 28px", fontSize: 15 }}>Send Email</button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section" style={{ padding: "48px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-links" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "white", fontFamily: "'Syne', sans-serif",
                }}>B</div>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "white" }}>BuildBuddy</span>
              </div>
              <p style={{ fontSize: 13, color: "#64748b" }}>Projects Made Simple</p>
            </div>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[["services", "Services"], ["projects", "Projects"], ["contact", "Contact"]].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} style={{
                  background: "none", border: "none", color: "#94a3b8",
                  fontSize: 14, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.target.style.color = "white"}
                  onMouseLeave={e => e.target.style.color = "#94a3b8"}
                >{label}</button>
              ))}
            </div>
          </div>
          <div style={{ height: 1, background: "rgba(255,255,255,0.06)", marginBottom: 24 }} />
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "#475569" }}>© 2026 BuildBuddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { useState, useEffect, useRef } from "react";

const WHATSAPP_NUMBER = "919810999001";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'd like to book a room at Urban Stay by Mavens House.");

const rooms = [
  {
    id: 1,
    name: "Deluxe Double Room",
    size: "240 sq ft",
    guests: "2 guests",
    price: "₹2,499",
    per: "/ night",
    features: ["King Bed", "AC", "Private Bath", "City View"],
    img: "img3",
  },
  {
    id: 2,
    name: "Superior Suite",
    size: "300 sq ft",
    guests: "2 guests",
    price: "₹3,199",
    per: "/ night",
    features: ["King Bed", "AC", "Work Desk", "Kettle"],
    img: "img4",
  },
];

const amenities = [
  { label: "Air Conditioning", icon: "❄" },
  { label: "High-Speed WiFi", icon: "⚡" },
  { label: "Daily Housekeeping", icon: "✦" },
  { label: "24/7 Reception", icon: "◎" },
  { label: "Tea & Coffee", icon: "☕" },
  { label: "Secure Parking", icon: "⬡" },
  { label: "Outdoor Terrace", icon: "◈" },
  { label: "Water Dispenser", icon: "◉" },
];

const reviews = [
  { name: "Rahul M.", stars: 4, text: "Very clean, modern rooms. Staff was courteous and check-in was smooth. Perfect for a business stay." },
  { name: "Priya S.", stars: 4, text: "Loved the orange accents and the cozy lounge area. The bed was extremely comfortable." },
  { name: "Amit K.", stars: 3, text: "Good value for Gurugram. Quiet location, well maintained corridors, would stay again." },
];

function Star({ filled }) {
  return (
    <span style={{ color: filled ? "#c9a84c" : "#ddd", fontSize: "14px" }}>★</span>
  );
}

export default function UrbanStay() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`, "_blank");
  };

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", color: "#1a1a1a", background: "#fff", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { font-family: 'DM Sans', sans-serif; }

        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .sans { font-family: 'DM Sans', sans-serif; }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1a1a1a;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          font-weight: 400;
          transition: color 0.2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a84c;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #c9a84c; }

        .btn-primary {
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          font-weight: 500;
        }
        .btn-primary:hover { background: #c9a84c; transform: translateY(-1px); }

        .btn-outline {
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #1a1a1a;
          padding: 13px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s;
          font-weight: 500;
        }
        .btn-outline:hover { background: #1a1a1a; color: #fff; }

        .btn-wa {
          background: #25D366;
          color: #fff;
          border: none;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .btn-wa:hover { background: #1da851; transform: translateY(-1px); }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          font-weight: 500;
          margin-bottom: 16px;
          display: block;
        }

        .room-card {
          border: 1px solid #e8e8e8;
          overflow: hidden;
          transition: box-shadow 0.3s, transform 0.3s;
          background: #fff;
        }
        .room-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.1);
          transform: translateY(-4px);
        }

        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 20px;
          border: 1px solid #f0f0f0;
          transition: border-color 0.2s, background 0.2s;
        }
        .amenity-item:hover {
          border-color: #c9a84c;
          background: #fffdf7;
        }

        .wa-float {
          position: fixed;
          bottom: 32px;
          right: 32px;
          width: 56px;
          height: 56px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          z-index: 1000;
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
        }
        .wa-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(37,211,102,0.5);
        }

        .gold-line {
          width: 40px;
          height: 1px;
          background: #c9a84c;
          margin-bottom: 24px;
        }

        .hero-img-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .fade-in {
          animation: fadeUp 0.8s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .review-card {
          border: 1px solid #f0f0f0;
          padding: 32px;
          background: #fff;
          transition: border-color 0.2s;
        }
        .review-card:hover { border-color: #c9a84c; }

        @media (max-width: 768px) {
          .mobile-hide { display: none !important; }
          .mobile-stack { flex-direction: column !important; }
          .mobile-full { width: 100% !important; }
          .mobile-center { text-align: center !important; align-items: center !important; }
          .mobile-p { padding: 48px 24px !important; }
          .hero-title { font-size: 52px !important; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        padding: scrolled ? "16px 48px" : "24px 48px",
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #f0f0f0" : "1px solid transparent",
        transition: "all 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 600, letterSpacing: "0.04em", color: "#1a1a1a" }}>Urban Stay</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.2em", color: "#c9a84c", textTransform: "uppercase" }}>by Mavens House</span>
        </div>

        <div className="mobile-hide" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {["rooms", "amenities", "gallery", "location", "contact"].map(s => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>

        <button className="btn-primary mobile-hide" onClick={openWhatsApp} style={{ padding: "10px 24px", fontSize: "11px" }}>
          Book Now
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", fontSize: "22px" }} className="mobile-show">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" style={{ position: "relative", height: "100vh", minHeight: "600px", display: "flex", alignItems: "flex-end" }}>
        {/* Mosaic background using CSS gradients to represent hotel imagery */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(160deg, #f9f6ef 0%, #ede8df 40%, #e0d9cc 100%)",
        }} />
        
        {/* Decorative large photo area */}
        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "58%",
          height: "100%",
          overflow: "hidden",
        }}>
          <div style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #2c2416 0%, #4a3c28 50%, #3d3020 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "80px",
            opacity: 0.85,
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(201,168,76,0.15)", fontSize: "200px", fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1 }}>US</span>
          </div>
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, #f9f6ef 0%, transparent 30%)",
          }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, padding: "0 48px 80px", maxWidth: "680px" }}>
          <span className="section-label fade-in" style={{ animationDelay: "0.1s" }}>Gurugram, Haryana</span>
          <h1 className="hero-title fade-in serif" style={{
            fontSize: "72px",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#1a1a1a",
            marginBottom: "24px",
            animationDelay: "0.2s",
          }}>
            Where comfort<br />
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>meets simplicity.</em>
          </h1>
          <p className="fade-in sans" style={{ fontSize: "16px", lineHeight: 1.7, color: "#555", maxWidth: "440px", marginBottom: "40px", fontWeight: 300, animationDelay: "0.35s" }}>
            A modern boutique stay in the heart of Gurugram. Clean rooms, genuine hospitality, and everything you need — nothing you don't.
          </p>
          <div className="fade-in" style={{ display: "flex", gap: "16px", flexWrap: "wrap", animationDelay: "0.5s" }}>
            <button className="btn-primary" onClick={openWhatsApp}>Reserve a Room</button>
            <button className="btn-outline" onClick={() => scrollTo("rooms")}>Explore Rooms</button>
          </div>

          <div className="fade-in" style={{ marginTop: "56px", display: "flex", gap: "40px", animationDelay: "0.65s" }}>
            {[["3.67★", "Airbnb Rating"], ["9", "Room Types"], ["24/7", "Reception"]].map(([val, label]) => (
              <div key={label}>
                <div className="serif" style={{ fontSize: "28px", fontWeight: 500, color: "#1a1a1a" }}>{val}</div>
                <div className="sans" style={{ fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div style={{ background: "#1a1a1a", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", overflow: "hidden" }}>
        {["Free WiFi", "Daily Housekeeping", "24/7 Check-in", "AC Rooms", "Secure Parking"].map((item, i) => (
          <span key={i} className="sans" style={{ color: "#999", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "12px" }}>
            {i > 0 && <span style={{ color: "#333" }}>—</span>}
            {item}
          </span>
        ))}
      </div>

      {/* ABOUT */}
      <section style={{ padding: "100px 48px", display: "flex", gap: "80px", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ flex: 1 }}>
          <span className="section-label">About the Property</span>
          <div className="gold-line" />
          <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, lineHeight: 1.2, marginBottom: "28px", letterSpacing: "-0.01em" }}>
            A thoughtfully<br />designed stay.
          </h2>
          <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#555", marginBottom: "20px", fontWeight: 300 }}>
            Urban Stay by Mavens House is a boutique hotel property in Gurugram offering modern, well-appointed rooms without the noise of a large chain hotel. Each space is designed with restraint — clean lines, quality linens, and the small comforts that make a real difference.
          </p>
          <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#555", marginBottom: "36px", fontWeight: 300 }}>
            Whether you're here for business or leisure, our staff ensures a seamless experience from check-in to checkout.
          </p>
          <button className="btn-wa" onClick={openWhatsApp}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
            Chat on WhatsApp
          </button>
        </div>

        <div style={{ flex: 1.2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {/* Lobby image representation */}
          <div style={{ gridColumn: "span 2", height: "260px", background: "linear-gradient(135deg, #f5e6c8 0%, #e8d5a8 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"60\" height=\"60\"><rect width=\"60\" height=\"60\" fill=\"none\"/><path d=\"M0 30h60M30 0v60\" stroke=\"rgba(201,168,76,0.1)\" stroke-width=\"0.5\"/></svg>')" }} />
            <span className="serif" style={{ fontSize: "16px", color: "#8a7040", letterSpacing: "0.2em", textTransform: "uppercase" }}>Reception & Lounge</span>
          </div>
          <div style={{ height: "160px", background: "linear-gradient(135deg, #e8ddd0 0%, #d9cfc0 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="serif" style={{ fontSize: "13px", color: "#7a6a5a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Rooms</span>
          </div>
          <div style={{ height: "160px", background: "linear-gradient(135deg, #dce8d9 0%, #ccd9c8 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="serif" style={{ fontSize: "13px", color: "#4a6a4a", letterSpacing: "0.15em", textTransform: "uppercase" }}>Terrace</span>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms" style={{ background: "#fafaf8", padding: "100px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Accommodation</span>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Our Rooms</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "32px" }}>
            {/* Room Card 1 — Deluxe */}
            <div className="room-card">
              <div style={{ height: "240px", background: "linear-gradient(135deg, #2c2820 0%, #4a3e30 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)" }} />
                <span className="serif" style={{ color: "rgba(201,168,76,0.3)", fontSize: "100px", fontWeight: 300 }}>D</span>
                <div style={{ position: "absolute", bottom: "16px", left: "20px" }}>
                  <span style={{ background: "#c9a84c", color: "#fff", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 12px", fontFamily: "'DM Sans', sans-serif" }}>Deluxe</span>
                </div>
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h3 className="serif" style={{ fontSize: "24px", fontWeight: 400, marginBottom: "8px" }}>Deluxe Double Room</h3>
                <p className="sans" style={{ fontSize: "13px", color: "#888", marginBottom: "20px", lineHeight: 1.6, fontWeight: 300 }}>Spacious room with a plush king-sized bed, warm lighting, and a modern en-suite bathroom.</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                  {["King Bed", "AC", "Private Bath", "City View"].map(f => (
                    <span key={f} className="sans" style={{ fontSize: "11px", border: "1px solid #e0e0e0", padding: "4px 10px", letterSpacing: "0.08em", color: "#666" }}>{f}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div>
                    <span className="serif" style={{ fontSize: "28px", fontWeight: 500 }}>₹2,499</span>
                    <span className="sans" style={{ fontSize: "12px", color: "#999", marginLeft: "6px" }}>/ night</span>
                  </div>
                  <button className="btn-primary" onClick={openWhatsApp} style={{ padding: "10px 20px", fontSize: "11px" }}>Book</button>
                </div>
              </div>
            </div>

            {/* Room Card 2 — Superior */}
            <div className="room-card">
              <div style={{ height: "240px", background: "linear-gradient(135deg, #1e2428 0%, #2e3c44 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.4) 100%)" }} />
                <span className="serif" style={{ color: "rgba(201,168,76,0.3)", fontSize: "100px", fontWeight: 300 }}>S</span>
                <div style={{ position: "absolute", bottom: "16px", left: "20px" }}>
                  <span style={{ background: "#1a1a1a", color: "#c9a84c", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 12px", fontFamily: "'DM Sans', sans-serif", border: "1px solid #c9a84c" }}>Superior</span>
                </div>
              </div>
              <div style={{ padding: "28px 28px 32px" }}>
                <h3 className="serif" style={{ fontSize: "24px", fontWeight: 400, marginBottom: "8px" }}>Superior Suite</h3>
                <p className="sans" style={{ fontSize: "13px", color: "#888", marginBottom: "20px", lineHeight: 1.6, fontWeight: 300 }}>Larger layout with a dedicated work desk, premium toiletries, and complimentary tea & coffee setup.</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
                  {["King Bed", "AC", "Work Desk", "Kettle"].map(f => (
                    <span key={f} className="sans" style={{ fontSize: "11px", border: "1px solid #e0e0e0", padding: "4px 10px", letterSpacing: "0.08em", color: "#666" }}>{f}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
                  <div>
                    <span className="serif" style={{ fontSize: "28px", fontWeight: 500 }}>₹3,199</span>
                    <span className="sans" style={{ fontSize: "12px", color: "#999", marginLeft: "6px" }}>/ night</span>
                  </div>
                  <button className="btn-primary" onClick={openWhatsApp} style={{ padding: "10px 20px", fontSize: "11px" }}>Book</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <span className="section-label">Visual Tour</span>
            <div className="gold-line" />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Gallery</h2>
          </div>
          <button className="btn-outline" onClick={openWhatsApp}>Request a Tour</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "240px 240px", gap: "12px" }}>
          {/* Lobby */}
          <div style={{ gridColumn: "span 7", background: "linear-gradient(135deg, #ff8c42 0%, #ff6b00 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            <span className="serif" style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: "16px", letterSpacing: "0.1em" }}>Reception Lobby</span>
          </div>
          {/* Lounge */}
          <div style={{ gridColumn: "span 5", background: "linear-gradient(135deg, #f5a623 0%, #e8901a 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            <span className="serif" style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: "16px", letterSpacing: "0.1em" }}>Guest Lounge</span>
          </div>
          {/* Room */}
          <div style={{ gridColumn: "span 4", background: "linear-gradient(135deg, #8b7355 0%, #6b5535 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            <span className="serif" style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: "16px", letterSpacing: "0.1em" }}>Bedroom</span>
          </div>
          {/* Corridor */}
          <div style={{ gridColumn: "span 4", background: "linear-gradient(135deg, #c8b89a 0%, #a89a7a 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            <span className="serif" style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: "16px", letterSpacing: "0.1em" }}>Corridor</span>
          </div>
          {/* Terrace */}
          <div style={{ gridColumn: "span 4", background: "linear-gradient(135deg, #5a8a5a 0%, #3a6a3a 100%)", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "24px" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
            <span className="serif" style={{ position: "relative", zIndex: 1, color: "#fff", fontSize: "16px", letterSpacing: "0.1em" }}>Outdoor Terrace</span>
          </div>
        </div>
        <p className="sans" style={{ fontSize: "12px", color: "#aaa", marginTop: "16px", letterSpacing: "0.05em" }}>
          * Real property photos available on our Airbnb listing. WhatsApp us for a live video tour.
        </p>
      </section>

      {/* AMENITIES */}
      <section id="amenities" style={{ background: "#fafaf8", padding: "100px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">What's Included</span>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Amenities</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", border: "1px solid #f0f0f0" }}>
            {amenities.map(({ label, icon }) => (
              <div key={label} className="amenity-item">
                <span style={{ fontSize: "28px" }}>{icon}</span>
                <span className="sans" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", textAlign: "center", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Guest Experiences</span>
          <div className="gold-line" style={{ margin: "0 auto 24px" }} />
          <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Reviews</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
            {[1,2,3,4].map(i => <Star key={i} filled={true} />)}
            <Star filled={false} />
            <span className="sans" style={{ fontSize: "14px", color: "#888", marginLeft: "4px" }}>3.67 on Airbnb</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {reviews.map(({ name, stars, text }) => (
            <div key={name} className="review-card">
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} filled={i <= stars} />)}
              </div>
              <p className="sans" style={{ fontSize: "14px", lineHeight: 1.8, color: "#444", fontWeight: 300, marginBottom: "20px", fontStyle: "italic" }}>"{text}"</p>
              <span className="sans" style={{ fontSize: "12px", fontWeight: 500, color: "#1a1a1a", letterSpacing: "0.05em" }}>— {name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" style={{ background: "#1a1a1a", padding: "100px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "80px", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <span className="section-label" style={{ color: "#c9a84c" }}>Find Us</span>
            <div className="gold-line" />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, color: "#fff", letterSpacing: "-0.01em", marginBottom: "28px" }}>Location</h2>
            <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#999", marginBottom: "36px", fontWeight: 300 }}>
              Urban Stay by Mavens House is conveniently located in Gurugram, Haryana — well-connected to NH-48, Cyber City, and major corporate hubs.
            </p>
            <div style={{ marginBottom: "12px" }}>
              <span className="sans" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "8px" }}>Address</span>
              <span className="sans" style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.7, fontWeight: 300 }}>Gurugram, Haryana, India</span>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <span className="sans" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", display: "block", marginBottom: "8px" }}>Phone / WhatsApp</span>
              <a href={`tel:+919810999001`} className="sans" style={{ fontSize: "15px", color: "#ccc", fontWeight: 300, textDecoration: "none" }}>+91 98109 99001</a>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <button className="btn-wa" onClick={openWhatsApp}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
                WhatsApp Us
              </button>
              <a href="https://maps.google.com/?q=Urban+Stay+Mavens+House+Gurugram" target="_blank" rel="noopener noreferrer">
                <button style={{ background: "transparent", color: "#999", border: "1px solid #333", padding: "14px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.25s", fontWeight: 500 }}
                  onMouseOver={e => { e.target.style.borderColor = "#c9a84c"; e.target.style.color = "#c9a84c"; }}
                  onMouseOut={e => { e.target.style.borderColor = "#333"; e.target.style.color = "#999"; }}>
                  View on Maps
                </button>
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div style={{ flex: 1, height: "400px", background: "#252525", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            <span className="sans" style={{ color: "#555", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Gurugram, Haryana</span>
            <a href="https://maps.google.com/?q=Gurugram+Haryana+India" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <button style={{ background: "none", border: "1px solid #c9a84c", color: "#c9a84c", padding: "10px 20px", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" }}>
                Open Google Maps →
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "120px 48px", textAlign: "center", background: "#fff" }}>
        <span className="section-label" style={{ display: "block" }}>Ready to Stay?</span>
        <div className="gold-line" style={{ margin: "0 auto 24px" }} />
        <h2 className="serif" style={{ fontSize: "56px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "20px", lineHeight: 1.1 }}>
          Book your room<br /><em style={{ color: "#c9a84c" }}>in minutes.</em>
        </h2>
        <p className="sans" style={{ fontSize: "15px", color: "#888", maxWidth: "400px", margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300 }}>
          No booking portals. No commissions. Just message us directly and we'll sort you out.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-wa" onClick={openWhatsApp} style={{ fontSize: "13px", padding: "16px 40px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
            Message on WhatsApp
          </button>
          <a href="tel:+919810999001" style={{ textDecoration: "none" }}>
            <button className="btn-outline" style={{ fontSize: "13px", padding: "16px 40px" }}>
              Call +91 98109 99001
            </button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", padding: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#fff", marginBottom: "6px" }}>Urban Stay</div>
          <div className="sans" style={{ fontSize: "11px", color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>by Mavens House · Gurugram, Haryana</div>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["rooms", "amenities", "location", "contact"].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="sans" style={{ background: "none", border: "none", color: "#555", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }}
              onMouseOver={e => e.target.style.color = "#c9a84c"}
              onMouseOut={e => e.target.style.color = "#555"}>{s}</button>
          ))}
        </div>
        <div className="sans" style={{ fontSize: "12px", color: "#333" }}>
          © {new Date().getFullYear()} Urban Stay. All rights reserved.
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <button className="wa-float" onClick={openWhatsApp} title="Chat on WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
      </button>
    </div>
  );
}

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "919810999001";
const WHATSAPP_MSG = encodeURIComponent("Hello! I'd like to book a room at Urban Stay by Mavens House.");

const amenities = [
  { label: "Self Check-in", icon: "⬡" },
  { label: "Free Parking", icon: "◎" },
  { label: "High-Speed WiFi", icon: "⚡" },
  { label: "Air Conditioning", icon: "❄" },
  { label: "In-house Restaurant", icon: "✦" },
  { label: "Smart TV", icon: "◈" },
  { label: "Workspace", icon: "◉" },
  { label: "Elevator", icon: "⬡" },
];

const reviews = [
  { name: "Monica", stars: 5, date: "June 2025", text: "The stay was worth the money. Clean, good food and friendly staff." },
  { name: "Anuj", stars: 5, date: "May 2025", text: "Elegant stay. Would definitely visit again." },
  { name: "Priya", stars: 5, date: "Recently", text: "Perfect location close to Artemis. Unmatched hospitality." }
];

function Star({ filled }) {
  return (
    <span style={{ color: filled ? "#e65c00" : "#ddd", fontSize: "14px" }}>★</span>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", background: "#faf9f7", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .sans { font-family: 'DM Sans', sans-serif; }

        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px 0;
          position: relative;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link.scrolled {
          color: #1a1a1a;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #e65c00;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { color: #e65c00; }
        .nav-link.scrolled:hover { color: #e65c00; }

        .btn-primary {
          background: #e65c00;
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
        .btn-primary:hover { background: #cc5200; transform: translateY(-1px); }

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

        .btn-outline-white {
          background: transparent;
          color: #fff;
          border: 1px solid #fff;
          padding: 13px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s;
          font-weight: 500;
        }
        .btn-outline-white:hover { background: #fff; color: #1a1a1a; }

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
          color: #e65c00;
          font-weight: 500;
          margin-bottom: 16px;
          display: block;
        }

        .gold-line {
          width: 40px;
          height: 1.5px;
          background: #e65c00;
          margin-bottom: 24px;
        }

        .amenity-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          padding: 28px 20px;
          border: 1px solid #eaeaea;
          transition: border-color 0.2s, background 0.2s;
          background: #fff;
        }
        .amenity-item:hover {
          border-color: #e65c00;
          background: #fffafa;
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

        .fade-in {
          animation: fadeUp 0.8s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Marquee Animation */
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
          display: flex;
        }
        .marquee-content {
          display: flex;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Gallery hover styles */
        .gallery-box {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }
        .gallery-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gallery-box:hover .gallery-bg {
          transform: scale(1.05);
        }
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
        }
        .gallery-text {
          position: relative;
          z-index: 1;
          color: #fff;
          font-size: 16px;
          letter-spacing: 0.1em;
        }

        /* Amenities Grid symmetric layout */
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          border: 1px solid #eaeaea;
          background: #eaeaea;
        }

        @media (max-width: 768px) {
          .mobile-hide { display: none !important; }
          .hero-title { font-size: 52px !important; }
          .amenities-grid { grid-template-columns: repeat(2, 1fr); }
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
        background: scrolled ? "rgba(255,255,255,0.98)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #f0f0f0" : "1px solid transparent",
        transition: "all 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span className="serif" style={{ fontSize: "22px", fontWeight: 600, letterSpacing: "0.04em", color: scrolled ? "#1a1a1a" : "#fff" }}>US</span>
          <span className="sans" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#e65c00", textTransform: "uppercase" }}>by Mavens House</span>
        </div>

        <div className="mobile-hide" style={{ display: "flex", gap: "36px", alignItems: "center" }}>
          {["about", "room", "gallery", "amenities", "location"].map(s => (
            <button key={s} className={`nav-link ${scrolled ? 'scrolled' : ''}`} onClick={() => scrollTo(s)}>{s}</button>
          ))}
        </div>

        <button className="btn-primary mobile-hide" onClick={openWhatsApp} style={{ padding: "10px 24px", fontSize: "11px" }}>
          Book Now
        </button>
      </nav>

      {/* HERO SECTION */}
      <section id="home" style={{ 
        position: "relative", 
        height: "100vh", 
        minHeight: "650px", 
        display: "flex", 
        alignItems: "center",
        overflow: "hidden"
      }}>
        {/* Deep, Premium Hero Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "url('/photos/preview9.webp') center/cover no-repeat",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.3) 100%)",
        }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 48px", maxWidth: "720px", marginTop: "60px" }}>
          <span className="section-label fade-in" style={{ animationDelay: "0.1s" }}>Sector 52, Gurugram</span>
          <h1 className="hero-title fade-in serif" style={{
            fontSize: "72px",
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: "24px",
            animationDelay: "0.2s",
          }}>
            Your Comfort Hub<br />
            <em style={{ color: "#e65c00", fontStyle: "italic" }}>in Gurgaon.</em>
          </h1>
          <p className="fade-in sans" style={{ fontSize: "16px", lineHeight: 1.7, color: "#e0e0e0", maxWidth: "460px", marginBottom: "40px", fontWeight: 300, animationDelay: "0.35s" }}>
            Nestled steps away from Artemis Hospital. A relaxing boutique hotel designed with modern warmth, genuine hospitality, and everything you need for business or rest.
          </p>
          <div className="fade-in" style={{ display: "flex", gap: "16px", flexWrap: "wrap", animationDelay: "0.5s" }}>
            <button className="btn-primary" onClick={openWhatsApp}>Reserve at ₹2,000</button>
            <button className="btn-outline-white" onClick={() => scrollTo("gallery")}>Explore the Space</button>
          </div>

          <div className="fade-in" style={{ marginTop: "56px", display: "flex", gap: "40px", animationDelay: "0.65s" }}>
            {[["3.67★", "Airbnb Rating"], ["28", "Minimalist Rooms"], ["24/7", "Premium Service"]].map(([val, label]) => (
              <div key={label}>
                <div className="serif" style={{ fontSize: "28px", fontWeight: 400, color: "#fff" }}>{val}</div>
                <div className="sans" style={{ fontSize: "11px", color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVOLVING INTRO STRIP */}
      <div style={{ background: "#111", padding: "18px 0", height: "56px", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <div className="marquee-container">
          <div className="marquee-content">
            {/* We duplicate the content to make it seamless */}
            {[1, 2].map((group) => (
               <div key={group} style={{ display: "flex", alignItems: "center" }}>
                 {["Smartlock Access", "Elevator Access", "Banquet Hall", "In-house Restaurant", "Valet Parking", "High-Speed WiFi", "Safe & Secure"].map((item, i) => (
                    <span key={i} className="sans" style={{ color: "#ccc", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", whiteSpace: "nowrap", paddingRight: "48px" }}>
                      {item}
                      <span style={{ color: "#e65c00", marginLeft: "48px" }}>✦</span>
                    </span>
                  ))}
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 48px", display: "flex", gap: "80px", alignItems: "center", maxWidth: "1200px", margin: "0 auto", backgroundColor: "#faf9f7" }}>
        <div style={{ flex: 1 }}>
          <span className="section-label">About the Property</span>
          <div className="gold-line" />
          <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, lineHeight: 1.2, marginBottom: "28px", letterSpacing: "-0.01em" }}>
            Elegant warmth &<br />impeccable service.
          </h2>
          <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#555", marginBottom: "20px", fontWeight: 300 }}>
            Mavens House offers a homely yet premium stay experience. With 28 spacious and well-furnished rooms, each space is designed with restraint — clean lines, quality amenities, and vibrant touches of orange.
          </p>
          <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#555", marginBottom: "36px", fontWeight: 300 }}>
            Located strategically on Artemis Hospital Main Road, we are the ideal hub for medical stays, corporate trips, or family gatherings, featuring an exquisite 200-capacity Banquet Hall and a lively in-house restaurant.
          </p>
          <button className="btn-wa" onClick={openWhatsApp}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
            Chat on WhatsApp
          </button>
        </div>

        <div style={{ flex: 1.2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          {/* Aesthetic layout inspired by the original */}
          <div className="gallery-box" style={{ gridColumn: "span 2", height: "260px" }}>
            <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview.webp')" }} />
            <div className="gallery-overlay" />
            <span className="serif gallery-text">Reception & Lounge</span>
          </div>
          <div className="gallery-box" style={{ height: "160px" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview2.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text" style={{ fontSize: "14px" }}>Bedrooms</span>
          </div>
          <div className="gallery-box" style={{ height: "160px" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview3.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text" style={{ fontSize: "14px" }}>On-Site Restaurant</span>
          </div>
        </div>
      </section>

      {/* SINGLE ROOM CARD */}
      <section id="room" style={{ background: "#fff", padding: "100px 48px", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">Accommodation</span>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Your Room</h2>
          </div>

          <div style={{ 
            border: "1px solid #eaeaea", 
            backgroundColor: "#fff", 
            display: "flex", 
            maxWidth: "900px", 
            margin: "0 auto",
            transition: "box-shadow 0.3s",
          }}
          onMouseOver={e => e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.06)"}
          onMouseOut={e => e.currentTarget.style.boxShadow = "none"}
          >
            <div className="gallery-box" style={{ flex: "1.2", margin: 0, padding: 0 }}>
               {/* Using a beautiful bedroom placeholder */}
               <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview4.webp')" }} />
               <div style={{ position: "absolute", bottom: "24px", left: "24px", zIndex: 2 }}>
                  <span style={{ background: "#1a1a1a", color: "#e65c00", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 14px", fontFamily: "'DM Sans', sans-serif", border: "1px solid #e65c00" }}>Premium Quality</span>
                </div>
            </div>
            <div style={{ flex: "1", padding: "40px" }}>
              <h3 className="serif" style={{ fontSize: "28px", fontWeight: 400, marginBottom: "8px" }}>Comfort Hub Room</h3>
              <p className="sans" style={{ fontSize: "12px", color: "#666", marginBottom: "20px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                2 Guests &bull; 1 Bedroom &bull; 1 Bed &bull; 1 Private Bath
              </p>
              <p className="sans" style={{ fontSize: "14px", color: "#555", marginBottom: "24px", lineHeight: 1.7, fontWeight: 300 }}>
                Spacious layout featuring smartlock entry, a dedicated workspace, pristine interiors, air conditioning, and complimentary high-speed Wi-Fi. 
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "32px" }}>
                {["Smartlock", "AC", "Smart TV", "Free Parking"].map(f => (
                  <span key={f} className="sans" style={{ fontSize: "11px", border: "1px solid #eaeaea", padding: "4px 10px", letterSpacing: "0.08em", color: "#555" }}>{f}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderTop: "1px solid #eaeaea", paddingTop: "24px" }}>
                <div>
                  <span className="serif" style={{ fontSize: "32px", fontWeight: 500, color: "#1a1a1a" }}>₹2,000</span>
                  <span className="sans" style={{ fontSize: "12px", color: "#888", marginLeft: "6px" }}>/ night</span>
                </div>
                <button className="btn-primary" onClick={openWhatsApp}>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY (Restoring the gorgeous gradient boxes as aesthetic placeholders + Unsplash) */}
      <section id="gallery" style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto", backgroundColor: "#faf9f7" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px" }}>
          <div>
            <span className="section-label">Visual Tour</span>
            <div className="gold-line" />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Gallery</h2>
          </div>
          <button className="btn-outline" onClick={openWhatsApp}>Request a Tour</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridTemplateRows: "240px 240px", gap: "12px" }}>
          {/* Photos mapping closely to the elegant hotel aesthetic */}
          <div className="gallery-box" style={{ gridColumn: "span 7" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview5.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text">The Lobby</span>
          </div>
          <div className="gallery-box" style={{ gridColumn: "span 5" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview6.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text">Guest Lounge</span>
          </div>
          <div className="gallery-box" style={{ gridColumn: "span 4" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview7.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text">Smartlock Doors</span>
          </div>
          <div className="gallery-box" style={{ gridColumn: "span 4" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview8.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text">Room Desk</span>
          </div>
          <div className="gallery-box" style={{ gridColumn: "span 4" }}>
             <div className="gallery-bg" style={{ backgroundImage: "url('/photos/preview.webp')" }} />
             <div className="gallery-overlay" />
             <span className="serif gallery-text">In-house Dining</span>
          </div>
        </div>
      </section>

      {/* AMENITIES (Reverted to the highly-praised original minimalist style) */}
      <section id="amenities" style={{ background: "#fff", padding: "100px 48px", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-label">What's Included</span>
            <div className="gold-line" style={{ margin: "0 auto 24px" }} />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Amenities</h2>
          </div>
          <div className="amenities-grid">
            {amenities.map(({ label, icon }) => (
              <div key={label} className="amenity-item">
                <span style={{ fontSize: "28px", color: "#555" }}>{icon}</span>
                <span className="sans" style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", textAlign: "center", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 48px", maxWidth: "1200px", margin: "0 auto", backgroundColor: "#faf9f7" }}>
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <span className="section-label">Guest Experiences</span>
          <div className="gold-line" style={{ margin: "0 auto 24px" }} />
          <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, letterSpacing: "-0.01em" }}>Reviews</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
            {[1,2,3].map(i => <Star key={i} filled={true} />)}
            <Star filled={true} />
            <Star filled={false} />
            <span className="sans" style={{ fontSize: "14px", color: "#555", marginLeft: "4px" }}>3.67 out of 5 from Airbnb</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {reviews.map(({ name, stars, text }) => (
            <div key={name} style={{ border: "1px solid #eaeaea", padding: "32px", background: "#fff", transition: "border-color 0.2s" }}
              onMouseOver={e => e.currentTarget.style.borderColor = "#e65c00"}
              onMouseOut={e => e.currentTarget.style.borderColor = "#eaeaea"}>
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
      <section id="location" style={{ background: "#0a0a0a", padding: "100px 48px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: "320px" }}>
            <span className="section-label" style={{ color: "#e65c00" }}>Find Us</span>
            <div className="gold-line" />
            <h2 className="serif" style={{ fontSize: "48px", fontWeight: 300, color: "#fff", letterSpacing: "-0.01em", marginBottom: "28px" }}>Location</h2>
            <p className="sans" style={{ fontSize: "15px", lineHeight: 1.85, color: "#999", marginBottom: "36px", fontWeight: 300 }}>
              Urban Stay by Mavens House is conveniently located in Sector 52, Gurugram. We are just a short walk from Artemis Hospital, and highly accessible to the Sector 54 Chowk Metro Station and prime corporate hubs.
            </p>
            <div style={{ marginBottom: "12px" }}>
              <span className="sans" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e65c00", display: "block", marginBottom: "8px" }}>Address</span>
              <span className="sans" style={{ fontSize: "15px", color: "#ccc", lineHeight: 1.7, fontWeight: 300 }}>Mavens House, Artemis Hospital Road<br/>Sector 52, Gurugram, Haryana</span>
            </div>
            <div style={{ marginBottom: "40px" }}>
              <span className="sans" style={{ fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#e65c00", display: "block", marginBottom: "8px" }}>Host Contact & WhatsApp</span>
              <a href={`tel:+919810999001`} className="sans" style={{ fontSize: "15px", color: "#ccc", fontWeight: 300, textDecoration: "none" }}>+91 98109 99001</a>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <button className="btn-wa" onClick={openWhatsApp}>
                WhatsApp Us
              </button>
              <a href="https://maps.google.com/?q=Hotel+Mavens+House+Sector+52+Gurugram" target="_blank" rel="noopener noreferrer">
                <button style={{ background: "transparent", color: "#aaa", border: "1px solid #444", padding: "14px 24px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.25s", fontWeight: 500 }}
                  onMouseOver={e => { e.target.style.borderColor = "#e65c00"; e.target.style.color = "#e65c00"; }}
                  onMouseOut={e => { e.target.style.borderColor = "#444"; e.target.style.color = "#aaa"; }}>
                  View Exact Location
                </button>
              </a>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "320px", height: "400px", background: "url('/photos/preview2.webp') center/cover", border: "1px solid #333", display: "flex", alignItems: "flex-end", padding: "24px", position: "relative" }}>
             <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }} />
             <div style={{ position: "relative", zIndex: 2 }}>
               <span className="sans" style={{ color: "#fff", fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase" }}>Gurugram, Haryana</span>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ padding: "120px 48px", textAlign: "center", background: "#fff" }}>
        <span className="section-label" style={{ display: "block" }}>Ready to Stay?</span>
        <div className="gold-line" style={{ margin: "0 auto 24px" }} />
        <h2 className="serif" style={{ fontSize: "56px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "20px", lineHeight: 1.1 }}>
          Book your room<br /><em style={{ color: "#e65c00" }}>in minutes.</em>
        </h2>
        <p className="sans" style={{ fontSize: "15px", color: "#888", maxWidth: "400px", margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300 }}>
          No booking portals. No commissions. Lock in the ₹2,000 / night direct price. Just message us directly and we'll sort your stay.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-wa" onClick={openWhatsApp} style={{ fontSize: "13px", padding: "16px 40px" }}>
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
      <footer style={{ background: "#050505", padding: "48px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 500, color: "#fff", marginBottom: "6px" }}>US</div>
          <div className="sans" style={{ fontSize: "11px", color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>by Mavens House · Gurugram, India</div>
        </div>
        <div style={{ display: "flex", gap: "32px" }}>
          {["about", "room", "gallery", "location"].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="sans" style={{ background: "none", border: "none", color: "#555", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s" }}
              onMouseOver={e => e.target.style.color = "#e65c00"}
              onMouseOut={e => e.target.style.color = "#555"}>{s}</button>
          ))}
        </div>
        <div className="sans" style={{ fontSize: "12px", color: "#333" }}>
          © {new Date().getFullYear()} US by Mavens House. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

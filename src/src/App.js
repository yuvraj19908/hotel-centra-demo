import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/* ---------------- IMAGES (SAFE UNSPLASH) ---------------- */

const img = (text) =>
  `https://source.unsplash.com/800x600/?${encodeURIComponent(text)}`;

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  return (
    <div className="nav">
      <h2>🏨 Hotel Centra</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

/* ---------------- HOME ---------------- */

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Hotel Centra</h1>

      <p className="bigText">
        Luxury stay at affordable prices in Kharar & Mohali. Comfort, cleanliness
        and hospitality at its best.
      </p>

      <img className="hero" src={img("luxury hotel lobby")} />

      <div className="cards">
        <div className="card">⭐ 4.8 Rating</div>
        <div className="card">🛏️ Premium Rooms</div>
        <div className="card">📍 Prime Location</div>
        <div className="card">📶 Free WiFi</div>
      </div>
    </div>
  );
}

/* ---------------- ROOMS ---------------- */

function Rooms() {
  const rooms = [
    { name: "Deluxe Room", price: "₹1200/night", img: img("hotel room deluxe bed") },
    { name: "Premium Room", price: "₹1800/night", img: img("luxury hotel room interior") },
    { name: "Suite Room", price: "₹2500/night", img: img("hotel suite luxury") }
  ];

  return (
    <div className="page">
      <h1>🛏️ Our Rooms</h1>

      <div className="grid">
        {rooms.map((r, i) => (
          <div className="room" key={i}>
            <img src={r.img} />
            <h3>{r.name}</h3>
            <p>{r.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- GALLERY (100+ IMAGES STYLE) ---------------- */

function Gallery() {
  const images = Array.from({ length: 60 }).map((_, i) =>
    img("hotel luxury room lobby restaurant " + i)
  );

  return (
    <div className="page">
      <h1>📸 Hotel Gallery</h1>

      <div className="grid">
        {images.map((src, i) => (
          <img key={i} src={src} className="photo" />
        ))}
      </div>
    </div>
  );
}

/* ---------------- BOOKING ---------------- */

function Booking() {
  return (
    <div className="page">
      <h1>📅 Book Your Stay</h1>

      <div className="form">
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
        <input placeholder="Check-in Date" type="date" />
        <input placeholder="Check-out Date" type="date" />

        <button>Confirm Booking</button>
      </div>

      <a
        className="whatsapp"
        href="https://wa.me/919999999999"
        target="_blank"
      >
        💬 Book on WhatsApp
      </a>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact() {
  return (
    <div className="page">
      <h1>📞 Contact Hotel Centra</h1>

      <div className="box">
        <p>📍 Kharar, Mohali, Punjab</p>
        <p>📞 +91 99999 99999</p>
        <p>📧 hotelcentra@gmail.com</p>
      </div>
    </div>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* STYLE */}
      <style>{`
        body {
          margin: 0;
          font-family: Arial;
          background: #0f0f0f;
          color: white;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          background: #1e90ff;
        }

        .nav a {
          margin: 0 10px;
          color: white;
          text-decoration: none;
        }

        .page {
          padding: 20px;
        }

        .hero {
          width: 100%;
          border-radius: 10px;
          margin: 20px 0;
        }

        .bigText {
          font-size: 18px;
          opacity: 0.8;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .card {
          background: #1c1c1c;
          padding: 15px;
          border-radius: 10px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 10px;
        }

        .room {
          background: #1c1c1c;
          padding: 10px;
          border-radius: 10px;
        }

        .room img {
          width: 100%;
          border-radius: 10px;
        }

        .photo {
          width: 100%;
          border-radius: 8px;
        }

        .form input {
          width: 100%;
          margin: 5px 0;
          padding: 10px;
        }

        button {
          width: 100%;
          padding: 10px;
          background: green;
          border: none;
          color: white;
          margin-top: 10px;
        }

        .whatsapp {
          display: block;
          margin-top: 10px;
          text-align: center;
          padding: 10px;
          background: #25D366;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }

        .box {
          background: #1c1c1c;
          padding: 20px;
          border-radius: 10px;
        }
      `}</style>
    </Router>
  );
}

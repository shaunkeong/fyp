import React from "react"
import "../globals.css"

export default function HomePage() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">🎵 MalaysianFund</div>
        <nav className="nav-links">
          <a href="#">Campaigns</a>
          <a href="#">Merchandise</a>
          <a href="#">Posts</a>
          <a href="#">About</a>
          <button className="disconnect-btn">Disconnect</button>
        </nav>
      </header>

      <section className="hero">
        <h1>Fund Malaysian Music</h1>
        <p>
          The first blockchain-powered crowdfunding platform dedicated to Malaysian musicians. Support local talent,
          discover new sounds, and be part of Malaysia's music revolution.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">▶ Explore Campaigns</button>
          <button className="start-btn">Start Your Campaign</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h2>1,247 ETH</h2>
          <p>Total Raised</p>
        </div>
        <div className="stat-item">
          <h2>156</h2>
          <p>Active Campaigns</p>
        </div>
        <div className="stat-item">
          <h2>89</h2>
          <p>Artists Supported</p>
        </div>
        <div className="stat-item">
          <h2>2,341</h2>
          <p>Community Members</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Simple steps to support Malaysian musicians or launch your own campaign</p>
        <div className="steps">
          <div className="step"><span>1</span> Connect your Ethereum wallet</div>
          <div className="step"><span>2</span> Browse and support campaigns</div>
          <div className="step"><span>3</span> Get rewards and access</div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Make Music History?</h2>
        <p>Join thousands of music lovers supporting Malaysian talent through blockchain technology</p>
        <div className="cta-buttons">
          <button className="explore-btn">Start Supporting Artists</button>
          <button className="start-btn">Launch Your Campaign</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-col">
          <h3>🎵 MalaysianFund</h3>
          <p>Empowering Malaysian musicians through blockchain-powered crowdfunding.</p>
          <div className="socials">
            <span>🌐</span>
            <span>🐦</span>
            <span>📸</span>
            <span>🎥</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Browse Campaigns</a>
          <a href="#">Merchandise Store</a>
          <a href="#">Featured Artists</a>
          <a href="#">Start Campaign</a>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">Contact Us</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📧 hello@malaysianfund.com</p>
          <p>📞 +60 3-1234 5678</p>
          <p>📍 Kuala Lumpur, Malaysia</p>
        </div>
      </footer>
    </div>
  )
}

import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>WHERE CODE GETS CREATIVE</h1>
            <p>
              Find fresh development and YouTube services in code. We build software, 
              websites, and packages - one creative solution at a time.
            </p>
            <Link to="/contact" className="hero-button">
              GET STARTED
            </Link>
          </div>
          
          <div className="hero-visual">
            <div className="coding-section">
              <div className="person-coding">
                <div className="coding-person">
                  <div className="person-avatar">
                    <div className="person-head">👨‍💻</div>
                    <div className="person-body">💻</div>
                  </div>
                  <div className="coding-glow"></div>
                </div>
              </div>
              
              <div className="code-screen">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <span className="code-title">cls.js</span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span> 
                    <span className="code-variable"> cls</span> 
                    <span className="code-operator"> = </span>
                    <span className="code-string">"Code That Serves"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">function</span> 
                    <span className="code-function"> createSoftware</span>
                    <span className="code-bracket">()</span> 
                    <span className="code-bracket">{'{'}</span>
                  </div>
                  <div className="code-line">
                    <span className="code-indent">  </span>
                    <span className="code-keyword">return</span> 
                    <span className="code-string"> "Software That Delivers"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-bracket">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="star-cards">
              <div className="star-card">
                <div className="star-icon">★</div>
              </div>
              <div className="star-card">
                <div className="star-icon">★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <h2>Trusted by</h2>
        <div className="company-logos">
          <div className="company-logo">Google</div>
          <div className="company-logo">Samsung</div>
          <div className="company-logo">Adobe</div>
          <div className="company-logo">Amazon</div>
          <div className="company-logo">Spotify</div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-content">
          <h2>WHO DOES THE WORK</h2>
          <div className="team-cards">
            <div className="team-card">
              <h3>FOUNDER</h3>
              <p>Leading the vision and technical direction of CLS</p>
            </div>
            <div className="team-card">
              <h3>CO-FOUNDER</h3>
              <p>Driving innovation and creative solutions</p>
            </div>
            <div className="team-card">
              <h3>DEVELOPER</h3>
              <p>Building amazing digital experiences</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

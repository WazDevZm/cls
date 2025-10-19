import React from 'react';

const About: React.FC = () => {
  return (
    <div style={{ marginTop: '80px' }}>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Code That Serves. Software That Delivers.</h1>
            <p>
              Hi, welcome to Cracked Lemonade Stand. How can we serve you?
            </p>
            <button className="hero-button">
              How to
            </button>
          </div>
          
          <div className="hero-visual">
            <div style={{
              width: '300px',
              height: '300px',
              background: 'linear-gradient(135deg, #FFD700, #FFA500)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white',
              boxShadow: '0 10px 30px rgba(255, 215, 0, 0.3)'
            }}>
              💻
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-content">
          <h2>About CLS</h2>
          <p>
            We are a creative software development studio that specializes in building 
            innovative digital solutions. Our team combines technical expertise with 
            creative vision to deliver exceptional results.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Our Mission</h3>
              <p>
                To create software that not only meets technical requirements but also 
                delivers exceptional user experiences that make a difference.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Our Vision</h3>
              <p>
                To be the go-to development studio for companies looking to transform 
                their digital presence with creative and innovative solutions.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Our Values</h3>
              <p>
                We believe in creativity, quality, and collaboration. Every project 
                we undertake is approached with passion and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

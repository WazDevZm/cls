import React from 'react';

const Services: React.FC = () => {
  return (
    <div style={{ marginTop: '80px' }}>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>What We Do</h1>
            <p>
              We offer comprehensive development services to help your business 
              thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>
            From web development to mobile apps, we provide end-to-end solutions 
            for all your digital needs.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Development</h3>
              <p>
                Custom websites and web applications built with modern technologies 
                and best practices. We create responsive, fast, and user-friendly 
                web solutions.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Mobile Development</h3>
              <p>
                Native and cross-platform mobile applications for iOS and Android. 
                We build apps that provide seamless user experiences across all devices.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Software Development</h3>
              <p>
                Custom software solutions tailored to your business needs. From 
                desktop applications to enterprise software, we've got you covered.
              </p>
            </div>
            
            <div className="service-card">
              <h3>YouTube Services</h3>
              <p>
                Content creation, video editing, and channel management services. 
                We help you build and grow your YouTube presence with professional 
                content strategies.
              </p>
            </div>
            
            <div className="service-card">
              <h3>UI/UX Design</h3>
              <p>
                Beautiful and intuitive user interfaces that enhance user experience. 
                We focus on creating designs that are both functional and visually appealing.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Consulting</h3>
              <p>
                Technical consulting and project planning services. We help you 
                make informed decisions about your digital strategy and technology stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

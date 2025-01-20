import React, { useEffect, useRef } from 'react';
import './Clients.css';
import NetflixLogo from '../images/netflix-logo.png';
import AcuraLogo from '../images/acura-logo.png';
import AmdLogo from '../images/amd-logo.png';
import DellLogo from '../images/dell-logo.png';
import Alienware from '../images/alienware.webp';
import Nextworld from '../images/nextworld.webp';
import ZDX from '../images/zdx.avif';

// Placeholder images - replace with actual project images
const NETFLIX_PROJECT = 'https://placehold.co/1200x800/0a1a3d/ffffff';
const ACURA_PROJECT = 'https://placehold.co/1200x800/0a1a3d/ffffff';
const AMD_PROJECT = 'https://placehold.co/1200x800/0a1a3d/ffffff';

const ClientSection = ({ 
  logo, 
  secondaryLogo, 
  description, 
  projectImage, 
  align = 'left', 
  logoStyle = {}, 
  secondaryLogoStyle = {},
  number,
  stats 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`client-section ${align}`}>
      <div className="client-content">
        <div className="section-number">{number}</div>
        <div className="logo-container">
          <img src={logo} alt="Client Logo" className="client-logo" style={logoStyle} />
          {secondaryLogo && (
            <>
              <span className="logo-separator">×</span>
              <img 
                src={secondaryLogo} 
                alt="Secondary Logo" 
                className="client-logo" 
                style={{ ...logoStyle, ...secondaryLogoStyle }} 
              />
            </>
          )}
        </div>
        <div className="content-wrapper">
          <p className="description">{description}</p>
          {stats && <p className="stats">{stats}</p>}
        </div>
      </div>
      <div className="project-visual">
        <div className="project-image-container">
          <img src={projectImage} alt="Project Visual" className="project-image" />
          <div className="image-overlay" />
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  return (
    <div className="clients-container">
      <div className="clients-hero">
        <h1>Our Clients<span className="dot">.</span></h1>
        <p>Transforming visions into digital excellence</p>
      </div>

      <ClientSection
        number="01"
        logo={NetflixLogo}
        description="Pioneered groundbreaking AI image generation technology for Netflix Nextworld on Roblox, pushing the boundaries of virtual entertainment and user engagement."
        projectImage={Nextworld}
        logoStyle={{ maxWidth: '200px' }}
        stats="4.7 million active users since launch"
      />

      <ClientSection
        number="02"
        logo={AcuraLogo}
        description="Assisted with digital key deployment software for the all-electric ZDX, enabling seamless vehicle access across both iPhone and Android platforms."
        projectImage={ZDX}
        align="right"
        logoStyle={{ maxWidth: '280px' }}
        stats="7,491 2024 Acura ZDX's sold"
      />

      <ClientSection
        number="03"
        logo={AmdLogo}
        secondaryLogo={DellLogo}
        description="Developed an innovative internal advertising platform leveraging the Ryzen 7 7800X3D and dual Radeon RX 5500 setup, creating real-time personalized advertisements through advanced AI and facial recognition."
        projectImage={Alienware}
        logoStyle={{ maxWidth: '120px' }}
        secondaryLogoStyle={{ maxWidth: '80px' }}
        stats="Used by 4,940 executives across 11 cities"
      />
    </div>
  );
};

export default Clients; 
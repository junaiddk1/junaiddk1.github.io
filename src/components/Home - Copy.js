import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
  return (
    <section className="home-section">
      <h1>Muhammad Junaid Khan</h1>
      <p>Generative AI | Deep Learning | Deep Reinforcement Learning</p>
      <p>Fulbright Scholar | PhD Candidate at UCF</p>
      
      <div className="card-grid">
        {/* Contact Details Card */}
        <div className="card">
          <div className="card-content">
            <h2>Contact Information</h2>
            <div className="contact-info">
              <FontAwesomeIcon icon="map-marker-alt" /> Orlando, Florida 32826 &nbsp; | &nbsp;
              <FontAwesomeIcon icon="phone" /> +1 407-967-9638 &nbsp; | &nbsp;
              <FontAwesomeIcon icon="envelope" /> junaid_k@live.com &nbsp; | &nbsp;
            
              <a href="https://www.linkedin.com/in/junaiddk" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn 
              </a>
              &nbsp; | &nbsp;
              <a href="https://scholar.google.com/citations?user=GnogxwoAAAAJ" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon="graduation-cap" /> Google Scholar
              </a>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="card">
          <div className="card-content">
            <h2>Summary</h2>
            <p>As an innovative AI researcher and engineer, I bring deep expertise in Generative AI, Deep Learning, Reinforcement Learning, and Large Language Models (LLMs). My work centers on developing novel algorithms for complex multi-agent systems, particularly in dynamic real-time environments like StarCraft. With a strong record of publishing influential research and mentoring the next generation of AI professionals, I combine advanced technical skills with practical problem-solving experience.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h2>Awards</h2>
            <ul>
              <li>Fulbright Grant for PhD.</li>
              <li>Best Faculty Member Award for outstanding performance in 2017.</li>
              <li>Employer’s Letter of appreciation for outstanding performance at BUITEMS.</li>
              <li>Employer’s Letter of appreciation for outstanding performance at NADRA.</li>
            </ul>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
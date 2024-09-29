import React from 'react';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">PhD Computer Science</h3>
            <p>University of Central Florida, USA | Expected December 2024</p>
            <p>Dissertation: "Attention to Action: Transformer-based Methods for StarCraft Macromanagement and Multi-Agent Reinforcement Learning"</p>
            <p>GPA: 3.6 / 4</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">MS Computer Science</h3>
            <p>University of Central Florida, USA | August 2023</p>
            <p>Completed MS along the way during PhD at UCF</p>
            <p><h4>Courses taken</h4></p>
            <ul>
              <li>Computer Vision &nbsp; | &nbsp; Advanced Computer Vision </li>
              <li>Machine Learning &nbsp; | &nbsp; Current Topics in Machine Learning </li>
              <li>Computer Vision Systems &nbsp; | &nbsp; Statistical Computing </li>
            </ul>
            <p>GPA: 3.6 / 4</p>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <h3 className="card-title">MS Computer Science</h3>
            <p>BUITEMS, Pakistan | July 2013</p>
            <p>Research Area: Data Security in Cloud Computing</p>
            <p>GPA 3.87 &nbsp; | &nbsp; Graduated Summa Cum Laude</p>
            <p><h4>Courses taken</h4></p>
            <ul>
              <li>Advanced Algorithm Analysis &nbsp; | &nbsp; Distributed and Object Databased </li>
              <li>Human Computer Interaction &nbsp; | &nbsp; Software Testing </li>
            </ul>
          
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">BS Computer Science</h3>
            <p>BUITEMS, Pakistan | Oct 2006</p>
            <p>Senoir Design Project: dbX - Designed and developed relational database system using Java and implemented SQL 92 standard.</p>
            <p>GPA 3.9 / 4 </p>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;
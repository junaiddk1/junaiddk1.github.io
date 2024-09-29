import React from 'react';

function Experience() {
  return (
    <section>
      <h2>Work Experience</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Graduate Research Assistant - Intelligent Agents Lab</h3>
            <p><h4>University of Central Florida, USA | Jan 2021 - Present</h4></p>
            <ul>
              <li>Developed Multi-modal Small Language Model based system for StarCraft game for build order and game state predictions, achieving state-of-the-art performance. </li>
              <li>Developed Language Dataset for StarCraft game for improving macromanagement task predictions. </li>
              <li>Developed state-of-the-art self-attention and bootstrapping technique to improve ensemble Q-learning performance. </li>
              <li>Collaborated on projects involving transformer-based models for video content moderation and predictive modeling, surpassing previous approaches. </li>
              <li>Collaborated with Psychologists on Team Communications Dialog Act Classification Project using language Models such as BERT, GPT-1 and GPT-2, achieving 81% accuracy. </li>
              <li>Developed state-of-the-art real-time multi-agent reinforcement learning systems for autonomous decision-making in real-time game StarCraft. </li>

            </ul>
          </div>
        </div>
        

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Graduate Teaching Assistant</h3>
            <p><h4>University of Central Florida, USA | Jan 2021 - Present</h4></p>
            <ul>
              <li>Taught undergraduate courses on data structures, algorithms, and problem-solving techniques. </li>
              <li>Led discussions on algorithm analysis, recursion, and efficient data structure implementations. </li>
              <li>Grading programming assignments, homework, and conducting weekly office hours for mentoring. </li>

            </ul>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Graduate Research Assistant - Center for Research in Computer Vision (CRCV)</h3>
            <p><h4>University of Central Florida, USA | Aug 2018 - Dec 2020</h4></p>
            <ul>
              <li>Contributed to computer vision projects, focusing on object detection and video segmentation. </li>
              <li>Implemented state-of-the-art deep learning models for action recognition. </li>
              <li>Developed novel view synthesis model for challenging video dataset. </li>

            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Assistant Professor</h3>
            <p><h4>BUITEMS, Pakistan | Jul 2013 - Aug 2018</h4></p>
            <h3 className="card-title">Lecturer</h3>
            <p><h4>BUITEMS, Pakistan | Oct 2008 - Jul 2013</h4></p>
            <ul>
              <li>Established Big Data and Machine Learning Group. </li>
              <li>Developed AI System for Social Network Analysis on Twitter. </li>
              <li>Developed Software for students’ performance analysis. </li>
              <li>Supervised undergraduate senior design projects. </li>
              <li>Received Best Faculty Member Award for outstand performance.</li>
              <li>Received Award for Microsoft Faculty Connection.</li>
            </ul>
          
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">System Engineer</h3>
            <p><h4>National Database and Registration Authority (NADRA), Pakistan | Mar 2007 - Oct 2008</h4></p>
          
            <ul>
              <li>Designed and developed secure database systems for NADRA’s Mobile Registration Setup. </li>
              <li>Maintained both databases and network. </li>
              <li>Developed software to automate the paper-based tasks.</li>
              <li>Managed Customers' Relations</li>
            </ul>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Software Engineer</h3>
            <p><h4>Folio, Pakistan | Aug 2006 - Dec 2006</h4></p>
            
            <ul>
              <li>Developed and maintained scalable and secure web applications (Open Houston). </li>
              <li>Provided customer support.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
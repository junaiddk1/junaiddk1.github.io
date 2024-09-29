import React from 'react';

function Certificates() {
  return (
    <section>
      <h2>Other Certificates</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-content">
            
            <h3 className="card-title">Coursera.org Courses and Certificates</h3>
            <ul>
              <li>Deep Learning Specialization</li>
              <li>Python for Everyone, 5-Course Specialization, (University of Michigan)</li>
              <li>Machine Learning, 4-course Specialization, (University of Washington)</li>
            </ul>
          </div>
          <div className="card">
            <div className='card-content'>
            <h3 className="card-title">Edx.org Courses and Certificates</h3>
            <ul>
              <li>Introduction to Big Data with Apache Spark</li>
              <li>Scalable Machine Learning</li>
              <li>Data Science and Machine Learning Essentials</li>
            </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Certificates;
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import Home from './components/Home';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import './styles.css';
import Certificates from './components/Certificates';

// Add icons to the library
library.add(fab, faMapMarkerAlt, faPhone, faEnvelope, faGraduationCap);

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <div className="container nav-container">
                        <div className="logo"></div> 
                        <div className="nav-links">
                            <Link to="/">Home</Link>
                            <Link to="/experience">Experience</Link>
                            <Link to="/education">Education</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/publications">Publications</Link>
                            <Link to="/certificates">Certificates</Link>
                        </div>
                    </div>
                </nav>

                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/publications" element={<Publications />} />
                        <Route path="/certificates" element={<Certificates />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
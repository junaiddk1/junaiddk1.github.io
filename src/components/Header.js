// Header.js
import React from 'react';

function Header() {
  return (
    <header className="text-center my-5">
      <h1>Muhammad Junaid Khan</h1>
      <p>Generative AI | Deep Learning | Deep Reinforcement Learning</p>
      <p>Fulbright Scholar | PhD Candidate at UCF</p>
      <p>Orlando, Florida 32826 | +1 407-967-9638 | junaid_k@live.com</p>
      <div>
        <a href="https://www.linkedin.com/in/junaiddk" className="btn btn-primary me-2">LinkedIn</a> &nbsp; | &nbsp;
        <a href="https://scholar.google.com/citations?user=GnogxwoAAAAJ" className="btn btn-secondary">Google Scholar</a>
      </div>
    </header>
  );
}

export default Header;

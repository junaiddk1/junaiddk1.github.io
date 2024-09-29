import React from 'react';

function Projects() {
  return (
    <section>
      <h2>Key Projects</h2>
      <div className="card-grid">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">SCPhi-2: A Fine-tuned Small Language Model for StarCraft Macromanagement Task</h3>
            <p>Developed a specialized language model for game strategy prediction, achieving state-of-the-art accuracy in macromanagement decisions.</p> 
            <p>Technologies and Libraries: PyTorch, Phi-2, BLIP-2 Vision Transformer, Hugging face, PySC2.</p>
          </div>
        </div>
        

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Fine-tuning Language Models for Dialog Act Classification</h3>
            <p>Fine-tuned state-of-the-art transformer models (BERT, GPTs) to improve dialog act classification accuracy by 10%.</p> 
            <p>Technologies and Libraries: PyTorch, BERT, GPT-1 and GPT-2, Hugging face.</p>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <h3 className="card-title">TransMix: Transformer-based Valued Function Decomposition Network for StarCraft 2 Cooperative Multi-agent Reinforcement Learning</h3>
            <p>Developed a novel architecture combining transformers and value function decomposition, improving state-of-the-art in multi-agent challenges in StarCraft by 6%.</p> 
            <p>Technologies and Libraries: PyTorch, PySC2, SMAC.</p>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <h3 className="card-title">On-Device Object Face Detection and Registration for Nvidia Jetson device.</h3>
            <p>Implemented Yolo and TinyYolo algorithms for on-device (Nvidia Jetson) face detection and registration systems.</p> 
            <p>Applied model pruning techniques to improve inference of Yolo on Nvidia Jetson.</p>
          </div>
        </div>


        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Other Projects</h3>
            <li> Implemented YouTube Video Object Segmentation Network (YouTube VOS)</li>
            <li>Students Performance based Classification of BUITEMS Students, BUITEMS.</li>
            <li>Desktop and Web Applications for Water and Sanitation Authority (WASA), Quetta, Pakistan.</li>
            <li>Online Admissions Test System, BUITEMS, Quetta, Pakistan.</li>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
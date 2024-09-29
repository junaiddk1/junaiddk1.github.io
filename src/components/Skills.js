// components/Skills.js
import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "AI and Machine Learning",
      skills: ["Generative AI", "Small Language Models", "Large Language Models", "Fine-tuning Vision-Language Models", "Prompt Engineering", "Deep Learning", "Deep Reinforcement Learning", "Multi-agent RL"]
    },
    {
      category: "Programming and Tools",
      skills: ["PyTorch", "Python"]
    },
    {
      category: "Soft Skills",
      skills: ["Articulate", "Collaborative", "Adaptable", "Goal-oriented", "Proactive"]
    }
  ];

  return (
    <section>
      <h2>Skills</h2>
      <div className="card-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{category.category}</h3>
              <div className="skills-container">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
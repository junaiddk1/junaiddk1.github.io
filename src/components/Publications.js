// components/Publications.js
import React from 'react';

function Publications() {
  const publications = [
    
    {
      title: "Smart Sampling: Self-Attention and Bootstrapping for Improved Ensembled Q-Learning",
      authors: "Muhammad Junaid Khan, Syed Hammad Ahmed, Gita Sukthankar",
      conference: "FLAIRS 37",
      year: "2024"
    },
    {
      title: "Enhanced Multimodal Content Moderation of Children's Videos using Audiovisual Fusion",
      authors: "Syed Hammad Ahmed, Muhammad Junaid Khan, Gita Sukthankar",
      conference: "FLAIRS 37",
      year: "2024"
    },
    {
      title: "TaxTajweez: A Large Language Model-based Chatbot for Income Tax Information in Pakistan Using Retrieval Augmented Generation (RAG)",
      authors: "MA Habib, S Amin, M Oqba, S Jaipal, MJ Khan, A Samad",
      conference: "FLAIRS 37",
      year: "2024"
    },
    {
      title: "Malicious or Benign? Towards Effective Content Moderation for Children's Videos",
      authors: "SH Ahmed, MJ Khan, HM Umer, G Sukthankar",
      conference: "FLAIRS 36",
      year: "2023"
    },
    {
      title: "Transformer-based Value Function Decomposition for Cooperative Multi-agent Reinforcement Learning in StarCraft",
      authors: "Muhammad Junaid Khan, Syed Hammad Ahmed, Gita Sukthankar",
      conference: "AAAI AIIDE",
      year: "2022"
    },
    {
      title: "Leveraging Transformers for StarCraft Macromanagement Prediction",
      authors: "Muhammad Junaid Khan, Shah Hassan, Gita Sukthankar",
      conference: "IEEE ICMLA",
      year: "2021"
    },
    {
      title: "Spotting Urdu Stop Words by Zipf's Statistical Approach",
       authors: "N Khan, MP Bakht, MJ Khan, A Samad, G Sahar" , 
       conference: "13th International Conference on Mathematics, Actuarial Science",
       year: "2019"
    }
  ];

  return (
    <section>
      <h2>Publications</h2>
      <ul className="publications-list">
        {publications.map((pub, index) => (
          <li key={index} className="publication-item">
            <h3 className="publication-title">{pub.title}</h3>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-details">
              {pub.conference}, {pub.year}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Publications;
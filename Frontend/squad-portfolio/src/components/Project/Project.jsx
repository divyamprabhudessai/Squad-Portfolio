import React from 'react';
import './Project.css';

const Project = () => {
  return (
    <div className="main-layout">
      <div className="header">
        <p>GAME DEVELOPMENT</p>
      </div>
      <div className="projects">
        <div className="project-card">
          <h3>Project 1</h3>
          <div className="card-content">
            <div className="card-icon">⭐</div>
            <div className="card-icon">⭐</div>
            <div className="card-icon">⭐</div>
          </div>
        </div>
        <span className="and-symbol">&</span>
        <div className="project-card">
          <h3>Project 2</h3>
          <div className="card-content">
            <div className="card-icon">⭐</div>
          </div>
        </div>
      </div>
      <div className="header">
        <p>PROJECTS</p>
        <span className="arrow">→</span>
      </div>
      <div className="header">
        <p>REACT LAB</p>
      </div>
    </div>
  );
};

export default Project;

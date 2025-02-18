import React from 'react';
import './AboutSection.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Background Image Heading */}
        <h2 className="about-heading">
          <span>About This Project</span>
        </h2>

        {/* Project Description */}
        <div className="about-text">
          <p className="about-description">
            <strong>GigBud</strong> is a revolutionary platform designed to redefine the way people manage their time and earn money. In today’s fast-paced world, time is the most valuable asset. This project enables users to <strong>buy extra time</strong> by outsourcing their tasks to others, while those looking for work can <strong>sell their free hours</strong> to earn extra income. It’s a game-changing solution that empowers individuals by maximizing their productivity and financial independence.
          </p>
          <p className="about-description">
            The core idea behind this platform is to create a <strong>dynamic task exchange system</strong> where people can list tasks they need help with, and others in the community can take up those tasks in exchange for money. Whether it’s running errands, household chores, or completing specific jobs, GigBud bridges the gap between those who need assistance and those who are willing to provide it, ensuring a seamless and efficient system for everyone involved.
          </p>
          <p className="about-description">
            By fostering a collaborative and self-sustaining ecosystem, GigBud is not just an app—it’s a movement towards a smarter, more efficient society. It provides students, freelancers, and gig workers with an opportunity to <strong>monetize their free time</strong>, while busy professionals and individuals can enjoy the luxury of outsourcing tasks without hassle. This innovative approach is set to transform how people perceive and utilize their time, making every moment count.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

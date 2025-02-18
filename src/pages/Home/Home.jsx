import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import AboutSection from '../../Components/AboutSection/AboutSection';
import styles from "./Home.module.css";
import leftsideman from "../../assets/leftsideman.png";
import rightsideman from "../../assets/rightsideman1.png";

export default function Home() {
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSecLMuJGNp_eAmJWZCBxk669cqn-4KZS-PQbC98_bC_RntobQ/viewform?usp=dialog";
  
  const tagline = "Your Time, Your Way: Buy Extra or Sell the Surplus";
  const firstChar = tagline[0]; // Static first character
  const remainingText = tagline.slice(1); // Remaining characters to animate
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < remainingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + remainingText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex(0);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, remainingText]);

  return (
    <div>
      <Header />
      <main className={styles.hero}>
        <div className={styles.taglineContainer}>
          <img src={leftsideman} alt="Left Side Man" className={styles.sideImage} />
          <div>
            <h1>GigBud</h1>
            <p className={styles.tagline}>
              <span className={styles.staticChar}>{firstChar}</span>
              <span className={styles.animatedText}>{displayText}</span>
            </p>
          </div>
          <img src={rightsideman} alt="Right Side Man" className={styles.sideImage} />
        </div>
        <div className={styles.buttonContainer}>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer">
            <button className={styles.registrationButton}>Registration</button>
          </a>
        </div>
      </main>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="about">
      <div className={styles.starBackground}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>
          <span className={styles.titleGlow}>Education</span>
        </h2>
        <div className={styles.subtitle}>
          Academic background and certifications
        </div>
        
        <div className={styles.mainContent}>
          <img
            src={getImageUrl("about/edu.gif")}
            alt="Education illustration"
            className={styles.aboutImage}
          />
          <div className={styles.aboutItems}>
            <div className={styles.aboutItem} style={{ animationDelay: "0.1s" }}>
              <div className={styles.itemIcon}>
                <div className={styles.iconContainer}>
                  <span className={styles.iconText}>🎓</span>
                  <div className={styles.iconGlow}></div>
                </div>
              </div>
              <div className={styles.aboutItemText}>
                <h3 className={styles.itemTitle}>Graduated in 2023</h3>
                <p className={styles.itemDescription}>
                  B.E from Prof. Ram Meghe Institute of Technology and Research, Badnera in Information Technology, CGPA 8.6
                </p>
              </div>
            </div>
            
            <div className={styles.aboutItem} style={{ animationDelay: "0.2s" }}>
              <div className={styles.itemIcon}>
                <div className={styles.iconContainer}>
                  <span className={styles.iconText}>💻</span>
                  <div className={styles.iconGlow}></div>
                </div>
              </div>
              <div className={styles.aboutItemText}>
                <h3 className={styles.itemTitle}>Full Stack Web Development Certification 2024</h3>
                <p className={styles.itemDescription}>
                  Certified in MERN stack from Almabetter, May 2024. Gained strong skills in frontend and backend development.
                </p>
              </div>
            </div>
            
            <div className={styles.aboutItem} style={{ animationDelay: "0.3s" }}>
              <div className={styles.itemIcon}>
                <div className={styles.iconContainer}>
                  <span className={styles.iconText}>🔧</span>
                  <div className={styles.iconGlow}></div>
                </div>
              </div>
              <div className={styles.aboutItemText}>
                <h3 className={styles.itemTitle}>Diploma in Computer Engineering</h3>
                <p className={styles.itemDescription}>
                  Government Polytechnic, Arvi with 84%. Gained strong skills in programming (C, C++, Java).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

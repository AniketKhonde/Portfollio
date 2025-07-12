import React, { useEffect, useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="experience">
      <div className={styles.starBackground}>
        {[...Array(30)].map((_, i) => (
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
          <span className={styles.titleGlow}>Skills & Achievements</span>
        </h2>
        <div className={styles.subtitle}>
          Technical expertise and professional milestones
        </div>
        
        <div className={styles.mainContent}>
          <div className={styles.skills}>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {skills.map((skill, id) => {
                return (
                  <div 
                    key={id} 
                    className={`${styles.skill} ${hoveredSkill === id ? styles.skillHovered : ''}`}
                    onMouseEnter={() => setHoveredSkill(id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ animationDelay: `${id * 0.1}s` }}
                  >
                    <div className={styles.skillImageContainer}>
                      <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                      <div className={styles.skillGlow}></div>
                    </div>
                    <p className={styles.skillTitle}>{skill.title}</p>
                    <div className={styles.skillProgress}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className={styles.history}>
            <h3 className={styles.sectionTitle}>Achievements</h3>
            <div className={styles.historyList}>
              {history.map((historyItem, id) => {
                return (
                  <div 
                    key={id} 
                    className={styles.historyItem}
                    style={{ animationDelay: `${id * 0.2}s` }}
                  >
                    <div className={styles.historyIcon}>
                      <img
                        src={getImageUrl(historyItem.imageSrc)}
                        alt={`${historyItem.organisation} Logo`}
                      />
                      <div className={styles.iconGlow}></div>
                    </div>
                    <div className={styles.historyItemDetails}>
                      <h4 className={styles.historyTitle}>{`${historyItem.role}, ${historyItem.organisation}`}</h4>
                      <p className={styles.historyPeriod}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul className={styles.historyExperiences}>
                        {historyItem.experiences.map((experience, expId) => {
                          return (
                            <li key={expId} className={styles.experienceItem}>
                              {experience}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

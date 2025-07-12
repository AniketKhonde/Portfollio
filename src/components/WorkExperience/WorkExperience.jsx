import React, { useEffect, useState } from "react";
import styles from "./WorkExperience.module.css";
import { getImageUrl } from "../../utils";

export const WorkExperience = () => {
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

    const element = document.getElementById("work-experience");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const workExperience = [
    {
      role: "Software Developer",
      company: "Blocsys Technologies",
      period: "June 2024 - Present",
      experiences: [
        "Built and scaled a Telegram Mini App using React and Express.js, serving 5 lakh+ users with 2,000+ daily active users, delivering a seamless and intuitive UX within the Telegram ecosystem.",
        "Improved application speed by 40% through component-level optimization, lazy loading, debouncing, and throttling on the frontend.",
        "Enhanced database efficiency by implementing smart caching mechanisms, reducing redundant queries by 60% and minimizing database costs.",
        " Implemented a daily notification system using BullMQ to efficiently handle and deliver messages to over 2 lakh+ users. Ensured high performance, reliability, and scalability.",
        "Deployed scalable apps on AWS, handling 1L+ concurrent users with optimized server performance.",
        "Collaborated on CI/CD pipelines and automated version-controlled deployments using Git, GitHub Actions, and AWS services, ensuring rapid and reliable delivery of application updates.",
        "Delivered quality work under tight deadlines in a fast-paced startup environment."
      ]
    }
  ];

  return (
    <section className={styles.container} id="work-experience">
      <div className={styles.starBackground}>
        {[...Array(25)].map((_, i) => (
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
          <span className={styles.titleGlow}>Work Experience</span>
        </h2>
        <div className={styles.subtitle}>
          Professional journey and technical achievements
        </div>
        
        <div className={styles.workContainer}>
          <img
            src={getImageUrl("about/code.gif")}
            alt="Work experience illustration"
            className={styles.workImage}
          />
          <div className={styles.workItems}>
            {workExperience.map((job, id) => (
              <div 
                key={id} 
                className={styles.workItem}
                style={{ animationDelay: `${id * 0.3}s` }}
              >
                <div className={styles.workIcon}>
                  <div className={styles.iconContainer}>
                    <span className={styles.iconText}>💼</span>
                    <div className={styles.iconGlow}></div>
                  </div>
                </div>
                <div className={styles.workItemText}>
                  <h3 className={styles.jobTitle}>{`${job.role}, ${job.company}`}</h3>
                  <p className={styles.period}>{job.period}</p>
                  <ul className={styles.experiences}>
                    {job.experiences.map((experience, expId) => (
                      <li key={expId} className={styles.experienceItem}>
                        {experience}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 
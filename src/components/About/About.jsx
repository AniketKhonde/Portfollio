import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/edu.gif")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Graduated in 2023</h3>
              <p>
                B.E from Prof. Ram Meghe Institute of Technology and Research, Badnera in Information Technology, CGPA 8.6
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Web Development Certification 2024</h3>
              <p>
                Certified in MERN stack from Almabetter, May 2024. Gained strong skills in frontend and backend development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Diploma in Computer Engineering</h3>
              <p>
                Government Polytechnic, Arvi with 84%. Gained strong skills in programming (C, C++, Java).
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

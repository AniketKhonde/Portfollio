import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const resume = () => {
    window.open('https://drive.google.com/file/d/1nLtXfuXuVvXUFejc7LBInj83V-mqP9e-/view?usp=sharing', '_blank');
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Aniket Khonde</h1>
        <p className={styles.description}>
         Software Developer | Blocsys Technologies
        </p>
        <div>
        <button onClick={resume} className={styles.contactBtn}>
          Download Resume
        </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

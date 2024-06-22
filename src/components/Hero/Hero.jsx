import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const resume = () => {
    window.open('https://drive.google.com/file/d/1nLtXfuXuVvXUFejc7LBInj83V-mqP9e-/view?usp=sharing', '_blank');
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Aniket Khonde</h1>
        <p className={styles.description}>
         I'm Full Stack Web Developer | MERN Stack Developer
        </p>
        <div>
        <button onClick={toggleModal} className={styles.contactBtn}>
          About Me
        </button>
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
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={toggleModal}>X</button>
            <h2>About Me</h2>
            <p>I am Aniket Khonde, a passionate Full Stack Web Developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a keen eye for detail and a drive for excellence, I excel in crafting responsive and dynamic web applications. My strong foundation in both front-end and back-end technologies allows me to thrive in collaborative environments, where I leverage my skills to deliver robust and innovative solutions. Committed to continuous learning and growth, I am dedicated to staying updated with the latest trends and technologies in the ever-evolving field of web development..</p>
            <div className={styles.skillsSection}>
              <h3>Skills</h3>
              <p>MERN Stack Developer</p>
              <img src={getImageUrl("hero/mern.png")} alt="MERN Stack" className={styles.skillsImg} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

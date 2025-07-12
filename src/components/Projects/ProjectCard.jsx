import React, { useState } from "react";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    width: "345px",
    height: "630px",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d0d0d 100%)",
    borderRadius: "20px",
    boxShadow: isHovered 
      ? "0 25px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
      : "0 10px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
    overflow: "hidden",
    border: "1px solid rgba(0, 255, 255, 0.2)",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    cursor: "pointer",
    transform: isHovered ? "translateY(-15px) scale(1.02)" : "translateY(0) scale(1)",
    position: "relative"
  };

  const cardGlowStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(45deg, #00ffff, #ff00ff, #00ff00, #ffff00)",
    backgroundSize: "400% 400%",
    opacity: isHovered ? 0.15 : 0,
    transition: "opacity 0.4s ease",
    animation: "gradientShift 3s ease infinite",
    borderRadius: "20px",
    zIndex: 0
  };

  const imageContainerStyle = {
    width: "100%",
    height: "200px",
    overflow: "hidden",
    position: "relative",
    zIndex: 1,
    background: "#000000"
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    filter: isHovered ? "brightness(1.2) contrast(1.1)" : "brightness(1) contrast(1)"
  };

  const imageOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,255,255,0.1) 100%)",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  };

  const techBadgeStyle = {
    background: "rgba(0, 0, 0, 0.9)",
    color: "#00ffff",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "600",
    fontSize: "14px",
    transform: isHovered ? "translateY(0)" : "translateY(20px)",
    transition: "transform 0.3s ease",
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.3)",
    border: "1px solid rgba(0, 255, 255, 0.3)"
  };

  const contentStyle = {
    padding: "25px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    background: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(10px)",
    position: "relative",
    zIndex: 1,
    borderTop: "1px solid rgba(0, 255, 255, 0.1)"
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "15px",
    lineHeight: "1.3",
    transition: "all 0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    textShadow: isHovered ? "0 0 20px rgba(0, 255, 255, 0.5)" : "0 0 10px rgba(0, 255, 255, 0.3)"
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#cccccc",
    lineHeight: "1.6",
    marginBottom: "20px",
    flex: 1,
    opacity: 0.9
  };

  const skillsContainerStyle = {
    marginBottom: "25px"
  };

  const skillsStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    listStyle: "none",
    margin: 0,
    padding: 0
  };

  const skillStyle = {
    fontSize: "14px",
    fontWeight: "500",
    background: "rgba(0, 255, 255, 0.1)",
    color: "#00ffff",
    padding: "8px 14px",
    borderRadius: "20px",
    border: "1px solid rgba(0, 255, 255, 0.3)",
    transition: "all 0.3s ease",
    cursor: "pointer"
  };

  const linksStyle = {
    display: "flex",
    gap: "15px",
    marginTop: "auto"
  };

  const demoLinkStyle = {
    flex: 1,
    textDecoration: "none",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    padding: "14px 20px",
    borderRadius: "12px",
    background: "linear-gradient(45deg, #00ffff, #0080ff)",
    color: "#000000",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.3)",
    border: "1px solid rgba(0, 255, 255, 0.5)"
  };

  const sourceLinkStyle = {
    flex: 1,
    textDecoration: "none",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    padding: "14px 20px",
    borderRadius: "12px",
    background: "rgba(0, 0, 0, 0.8)",
    color: "#00ffff",
    border: "2px solid #00ffff",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0, 255, 255, 0.2)"
  };

  // Add CSS animation for gradient shift
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = `
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `;
  document.head.appendChild(styleSheet);

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={cardGlowStyle}></div>
      
      <div style={imageContainerStyle}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          style={imageStyle}
        />
        <div style={imageOverlayStyle}>
          <div style={techBadgeStyle}>Tech Stack</div>
        </div>
      </div>
      
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        
        <div style={skillsContainerStyle}>
          <ul style={skillsStyle}>
            {skills.map((skill, id) => {
              return (
                <li 
                  key={id} 
                  style={{
                    ...skillStyle,
                    transform: isHovered ? "translateY(-3px)" : "translateY(0)",
                    boxShadow: isHovered ? "0 6px 20px rgba(0, 255, 255, 0.4)" : "none",
                    background: isHovered ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 255, 255, 0.1)"
                  }}
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>
        
        <div style={linksStyle}>
          <a 
            href={demo} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              ...demoLinkStyle,
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
              boxShadow: isHovered ? "0 8px 25px rgba(0, 255, 255, 0.5)" : "0 4px 15px rgba(0, 255, 255, 0.3)"
            }}
          >
            Demo
          </a>
          <a 
            href={source} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              ...sourceLinkStyle,
              transform: isHovered ? "translateY(-3px)" : "translateY(0)",
              boxShadow: isHovered ? "0 8px 25px rgba(0, 255, 255, 0.4)" : "0 4px 15px rgba(0, 255, 255, 0.2)",
              background: isHovered ? "rgba(0, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.8)"
            }}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

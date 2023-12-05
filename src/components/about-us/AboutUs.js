import React, { useEffect, useRef } from "react";
import classes from "./AboutUs.module.css";

import transition from "../../utils/transition";
import anime from "animejs/lib/anime.es.js";
import AboutUsCard from "./AboutUsCard";

const info = [
  {
    name: "Abdulrahman Alghofaily",
    description: "Fresh Computer Science graduate | Web developer | Data Scientist",
    imageUrl: "/assets/images/abdulrahman_r.png",
    linkedin: "https://www.linkedin.com/in/abdulrahman-alghofaily/",
    github: "https://github.com/AbdulrahmanAlGhofaily",
  },
  {
    name: "Marawn Alghamdi",
    description: "An ambitious Computer Science graduate | Data scientist",
    imageUrl: "/assets/images/marwan.JPG",
    linkedin: "https://www.linkedin.com/in/marwan-ghamdi/",
    github: "https://github.com/marwanAlghamdi/",
  },
  {
    name: "Azzam Alharbi",
    description: "Enthusiastic Computer Science graduate, with a strong passion in Data Science",
    imageUrl: "/assets/images/azzam.jpg",
    linkedin: "https://www.linkedin.com/in/azzam-alharbi-b3b485261",
    github: "https://github.com/azzamalharbi",
  },
  {
    name: "Anfal Alruwaili",
    description: "Computer Science | Administrative | Data scientist",
    imageUrl: "/assets/images/anfal.jpg",
    linkedin: "https://www.linkedin.com/in/anfal-husaynia-319991224",
    github: "https://github.com/anfal7",
  },
  {
    name: "Nawaf Alshaikh",
    description: "Computer Science Graduate | Interest in Data Science and ML Engineering",
    imageUrl: "/assets/images/nawaf.jpg",
    linkedin: "https://www.linkedin.com/in/nawaf-alshaikh-7a35b11a2",
    github: "https://github.com/nawaf7800/projects",
  },
];

const AboutUs = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    anime({
      targets: titleRef.current,
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
      complete: () => {
        titleRef.current.style.filter = "none";
      },
    });

    anime({
      targets: titleRef.current,
      filter: ["blur(5px)", "blur(0px)"],
      duration: 2000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <>
      <div className={`${classes.thumbContainer}`}>
        <h1
          ref={titleRef}
          className="title-w-bg"
        >
          about us
        </h1>
      </div>

      <div className={`${classes.aboutUs} row`}>
        <div>
          <p>
            From the heart of Riyadh, our team of SDAIA T5 bootcamp's finest computer science graduates has crafted The
            Sky Eye AI. This pioneering tool leverages satellite imagery for detailed classification of urban
            development, marking a new milestone in Saudi Arabia's AI-driven future.
          </p>
        </div>
        <h2 style={{ alignSelf: "center" }}>Team Members</h2>
        <div className={`${classes.cards}`}>
          {info.map((person) => {
            return (
              <AboutUsCard
                personName={person.name}
                imageUrl={person.imageUrl}
                description={person.description}
                linkedin={person.linkedin}
                github={person.github}
                key={person.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default transition(AboutUs);

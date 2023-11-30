import React, { useEffect, useRef } from "react";
import classes from "./AboutUs.module.css";

import transition from "../../utils/transition";
import anime from "animejs/lib/anime.es.js";
import AboutUsCard from "./AboutUsCard";

const info = [
  {
    name: "Abdulrahman Alghofaily",
    description: "Computer Science Graduate | Web developer | Data Scientist.",
    imageUrl: "/assets/images/abdulrahman_r.png",
    linkedin: "https://www.linkedin.com/in/abdulrahman-alghofaily/",
    github: "https://github.com/AbdulrahmanAlGhofaily",
  },
  {
    name: "Marawn Alghamdi",
    description: "An ambitious computer science graduate | Data scientist",
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
    description: "Computer Science Graduate.",
    imageUrl: "/assets/images/anfal.jpg",
    linkedin: "https://www.linkedin.com/in/abdulrahman-alghofaily/",
    github: "https://github.com/AbdulrahmanAlGhofaily",
  },
  {
    name: "Nawaf Alshaikh",
    description: "Computer Science Graduate.",
    imageUrl: "/assets/images/abdulrahman_r.png",
    linkedin: "https://www.linkedin.com/in/abdulrahman-alghofaily/",
    github: "https://github.com/AbdulrahmanAlGhofaily",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas delectus laborum nemo dolorem sapiente
            voluptate, quos ullam unde quod dolore quia reiciendis adipisci veniam expedita neque. Sit possimus eaque
            nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam necessitatibus asperiores quidem iste!
            Ea ratione eveniet animi at et similique in, officia consequatur dolorum dolores optio necessitatibus ipsam
            explicabo neque?
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

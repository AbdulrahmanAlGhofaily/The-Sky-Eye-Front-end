import React from "react";
import classes from "./AboutUsCard.module.css";

import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoGithub } from "ionicons/icons";

const AboutUsCard = ({ personName, imageUrl, description, linkedin, github }) => {
  return (
    <div className={`${classes.card} glassy`}>
      <div className={`${classes.cardImg}`}>
        <img
          src={`${imageUrl}`}
          alt={`${personName}`}
        />
      </div>

      <div className={`${classes.info}`}>
        <span className={`${classes.nameHolder}`}>{personName}</span>
        <p className={`${classes.description}`}>{description}</p>
        <div className={`${classes.socialMedia}`}>
          <a
            className={`${classes.socialMediaItem}`}
            href={linkedin}
          >
            <IonIcon
              className={`${classes.lIcon}`}
              icon={logoLinkedin}
            ></IonIcon>
            <span href={linkedin}>LinkedIn</span>
          </a>
          <a
            className={`${classes.socialMediaItem}`}
            href={github}
          >
            <IonIcon
              className={`${classes.gIcon}`}
              icon={logoGithub}
            ></IonIcon>
            <span>Github</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsCard;

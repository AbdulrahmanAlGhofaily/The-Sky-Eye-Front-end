import React from "react";
import classes from "./Results.module.css";

const Results = ({ results }) => {
  return (
    <div className={`${classes.resultsCont} glassy row`}>
      <h1 className={classes.resultsTitle}>RESULTS</h1>
      <div className={classes.results}>
        <div className={`${classes.resultRow}`}>
          <div className={`${classes.resultItem}`}>
            <span className={`${classes.resultIcon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <span className={`${classes.resultNum}`}>{results.obsObj}</span>
            <span className={`${classes.resultTitle}`}>Observed Objects</span>
          </div>
        </div>
        {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
        <h3 className={`${classes.resultRow}`}>From Which</h3>
        <div className={`${classes.resultRow}`}>
          <div className={`${classes.resultItem}`}>
            <span className={`${classes.resultIcon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                />
              </svg>
            </span>
            <span className={`${classes.resultNum}`}>{results.compHouses}</span>
            <span className={`${classes.resultTitle}`}>Complete Buildings</span>
          </div>
          <div className={`${classes.resultItem}`}>
            <span className={`${classes.resultIcon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 528 528"
              >
                <path
                  fill="#ffffff"
                  d="M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z"
                />
              </svg>
            </span>
            <span className={`${classes.resultNum}`}>{results.underConst}</span>
            <span className={`${classes.resultTitle}`}>Under Construction</span>
          </div>
          <div className={`${classes.resultItem}`}>
            <span className={`${classes.resultIcon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 22"
              >
                <path
                  fill="currentColor"
                  d="M3 21h17l-4.73-6.25l-4.962-2.115L7.5 9H3v12Zm1-1v-2.12l2 .65l8.679-2.884L18 20H4Zm2-2.53l-2-.657v-2.74l2 .65l3.738-1.242l3.574 1.556L6 17.469Zm11.885-4.24l3.346-1.5V9.193l-3.25-.73l-1.75 1.403v2.039l1.654 1.327ZM6 13.663l-2-.656V10h3l2.067 2.652L6 13.662Zm12.03-1.602l-.8-.625v-1.1l1-.8l2 .45v1.1l-2.2.975Zm-5.915-4.406L16 6.096v-3.5l-3.788-.77L10 3.309V6.23l2.115 1.423Zm.11-1.135L11 5.694v-1.85l1.425-.95L15 3.42v2l-2.775 1.1Z"
                />
              </svg>
            </span>
            <span className={`${classes.resultNum}`}>{results.emptyLand}</span>
            <span className={`${classes.resultTitle}`}>Empty Land</span>
          </div>
          <div className={`${classes.resultItem}`}>
            <span className={`${classes.resultIcon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <g
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M9.36 1c-.782 0-1.5.313-2.054.839c-.31.295-.568.657-.753 1.066a.5.5 0 0 1-.636.261C4.28 3.043 2.78 4.339 2.595 6.197c-.125 1.27.407 2.44 1.281 3.128c.099.078.16.185.182.299a.498.498 0 0 1 .028.325a3.4 3.4 0 0 0-.09 1.132c.14 1.604 1.671 2.727 3.052 2.587c.533-.054.906-.142 1.187-.305c.251-.146.467-.374.642-.79a.5.5 0 0 1 .672-.336a.5.5 0 0 1 .299.337c.175.415.39.643.642.789c.28.163.654.251 1.186.305c1.381.14 2.912-.983 3.052-2.587a3.4 3.4 0 0 0-.09-1.132a.497.497 0 0 1 .029-.326a.498.498 0 0 1 .181-.298c.875-.688 1.407-1.858 1.281-3.128c-.184-1.86-1.689-3.157-3.327-3.03a.5.5 0 0 1-.635-.262a3.401 3.401 0 0 0-.753-1.066A2.969 2.969 0 0 0 9.36 1Zm3.55 1.16a4.373 4.373 0 0 0-.807-1.046A3.969 3.969 0 0 0 9.36 0a3.968 3.968 0 0 0-2.743 1.114c-.317.301-.59.654-.807 1.045C3.65 2.095 1.825 3.83 1.6 6.1c-.15 1.51.435 2.934 1.462 3.848a4.414 4.414 0 0 0-.061 1.22c.19 2.181 2.234 3.69 4.148 3.496c.572-.058 1.118-.163 1.587-.435c.24-.139.447-.314.626-.53c.18.216.387.391.626.53c.47.272 1.016.377 1.588.435c1.914.194 3.958-1.315 4.148-3.495a4.37 4.37 0 0 0-.062-1.22c1.027-.915 1.612-2.339 1.462-3.85c-.225-2.271-2.053-4.005-4.214-3.939Z" />
                  <path d="M12.389 7.243a.5.5 0 0 1-.172.686L9.96 9.283V18.5a.5.5 0 0 1-1 0v-6.717L6.703 10.43a.5.5 0 1 1 .514-.858l1.743 1.046V5.5a.5.5 0 0 1 1 0v2.617l1.743-1.046a.5.5 0 0 1 .686.172Z" />
                </g>
              </svg>
            </span>
            <span className={`${classes.resultNum}`}>222 %</span>
            <span className={`${classes.resultTitle}`}>Greenry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;

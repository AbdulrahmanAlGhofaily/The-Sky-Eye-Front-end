import React, { useEffect, useState, useCallback } from "react";
import classes from "./UploadImage.module.css";

const UploadImage = ({ setResults }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [identifier, setIdentifier] = useState(null);
  const [resultsReceived, setResultsReceived] = useState(false);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const imageURL = URL.createObjectURL(selectedImage);
      setImage(imageURL);
      setImageFile(selectedImage);
    }
  };

  const extractData = (inputText) => {
    const result = {
      obsObj: 0,
      compHouses: 0,
      underConst: 0,
      emptyLand: 0,
    };

    const completePattern = /Complete:\s*(\d+)/;
    const underConstructionPattern = /Under Construction:\s*(\d+)/;
    const emptyPattern = /Empty:\s*(\d+)/;

    const completeMatch = inputText.match(completePattern);
    const underConstructionMatch = inputText.match(underConstructionPattern);
    const emptyMatch = inputText.match(emptyPattern);

    if (completeMatch) {
      result.compHouses = parseInt(completeMatch[1], 10);
    }

    if (underConstructionMatch) {
      result.underConst = parseInt(underConstructionMatch[1], 10);
    }

    if (emptyMatch) {
      result.emptyLand = parseInt(emptyMatch[1], 10);
    }

    result.obsObj = result.compHouses + result.underConst + result.emptyLand;

    return result;
  };

  const fetchResults = useCallback(
    async (id) => {
      if (resultsReceived) return;
      try {
        const res = await fetch("http://127.0.0.1:8000/apiHandler/results/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier: id }),
        });

        if (res.status === 200) {
          const data = await res.json();
          const results = extractData(data.results);
          setResults(results);
          setResultsReceived(true);
        } else {
          console.log("Waiting for results...");
          setTimeout(() => fetchResults(id), 5000);
        }
      } catch (err) {
        console.error("Error fetching results:", err);
      }
    },
    [setResults, resultsReceived]
  );

  useEffect(() => {
    if (submitted) {
      async function postData() {
        try {
          setResultsReceived(false);
          const formData = new FormData();
          formData.append("image", imageFile);

          const res = await fetch("http://127.0.0.1:8000/apiHandler/image/", {
            method: "POST",
            body: formData,
          });

          const data = await res.json();
          setIdentifier(data.identifier);
          return data;
        } catch (err) {
          console.log(err.message);
        } finally {
          setSubmitted(false);
        }
      }

      postData();
    }
  }, [submitted, imageFile]);

  useEffect(() => {
    if (identifier) {
      fetchResults(identifier);
    }
  }, [identifier, fetchResults]);

  return (
    <div className={`${classes.uploadCont} glassy`}>
      <input
        type="file"
        className={`${classes.uploadBtn}`}
        accept="image/*"
        onChange={handleImageChange}
        id="upload"
      />
      <label
        htmlFor="upload"
        className={`${classes.uploadLabel}`}
      >
        {image ? (
          <>
            <h3 style={{ marginBottom: "2rem" }}>Image Preview</h3>
            <img
              src={image}
              alt="Selected"
              className="image-preview"
            />
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
            fill="#fff"
          >
            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
          </svg>
        )}
      </label>
      <button
        className={`${classes.submitBtn} glassy`}
        onClick={() => {
          setSubmitted(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
};

export default UploadImage;

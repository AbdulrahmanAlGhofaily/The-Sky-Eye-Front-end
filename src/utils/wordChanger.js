import React, { useState, useEffect } from "react";

const WordChanger = ({
  words = ["Insert", "Some", "Words"],
  speed = 70,
  skipDelay = 15,
  normalWord = "Insert some text",
}) => {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const len = words.length;

  useEffect(() => {
    const interval = setInterval(() => {
      let newOffset = offset;
      let newForwards = forwards;
      let newSkipCount = skipCount;

      if (forwards) {
        if (offset >= words[index].length) {
          newSkipCount++;
          if (newSkipCount === skipDelay) {
            newForwards = false;
            newSkipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          newForwards = true;
          setIndex((prevIndex) => (prevIndex + 1) % len);
        }
      }

      if (newSkipCount === 0) {
        newOffset = forwards ? offset + 1 : offset - 1;
      }

      setOffset(newOffset);
      setForwards(newForwards);
      setSkipCount(newSkipCount);
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, skipCount, words, index, len, speed, skipDelay]);

  const part = words[index].substring(0, offset);

  return (
    <h1 className="title-w-bg">
      {normalWord} {part}
    </h1>
  );
};

export default WordChanger;

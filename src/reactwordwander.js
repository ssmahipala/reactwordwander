import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./reactwordwander.css";

const ReactWordWander = ({
  text,
  fontFamily,
  fontSize,
  textColor,
  backgroundColor,
}) => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const onMouseOver = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const h1Element = document.querySelector(".react-word-wander"); // Use a class for more specificity
    if (h1Element) {
      h1Element.onmouseover = onMouseOver;
    }

    return () => {
      // Cleanup the event listener when the component unmounts
      if (h1Element) {
        h1Element.onmouseover = null;
      }
    };
  }, [text]); // Add text as a dependency to update the effect when the text prop changes

  const dynamicStyle = {
    fontFamily: fontFamily || "monospace",
    fontSize: fontSize || "clamp(3rem, 10vw, 5rem)",
    color: textColor || "#000000",
    backgroundColor: backgroundColor || "transparent",
    whiteSpace: "nowrap",
    padding: "1rem", // Adjust padding as needed
    borderRadius: "clamp(0.4rem, 0.75vw, 1rem)",
    left: "50%",
    top: "50%",
    zIndex: 3,
  };

  return (
    <h1 className="react-word-wander" data-value={text} style={dynamicStyle}>
      {text}
    </h1>
  );
};

ReactWordWander.propTypes = {
  text: PropTypes.string.isRequired,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default ReactWordWander;

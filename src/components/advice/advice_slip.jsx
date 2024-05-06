import "./advice_slip.css";
import Box from "@mui/system/Box";
import { useState, useEffect } from "react";

const AdviceComponent = () => {
  const [data, setData] = useState({
    id: "123",
    advice: "Generating words of advice...",
  });

  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setData({
          id: data.slip.id,
          advice: data.slip.advice,
        })
      )
      .catch((error) => console.error(error));
  }, [buttonClick]);

  const getAdvice = () => {
    setButtonClick(buttonClick + 1);
  };

  return (
    <Box
      component="section"
      sx={{
        borderRadius: "8px",
        bgcolor: "hsl(217, 19%, 24%)",
        padding: "3rem 2rem",
      }}
    >
      <p className="advice-label">ADVICE #{data.id}</p>
      <p className="advice-content">
        &quot;
        {data.advice}
        &quot;
      </p>
      <img
        className="content-divider"
        src="/src/assets/pattern-divider-mobile.svg"
      ></img>
      <button
        onClick={getAdvice}
        style={{
          background: "hsl(150, 100%, 66%)",
          border: "none",
          width: "44px",
          height: "44px",
          lineHeight: "44px",
          borderRadius: "50%",
          zIndex: "1",
          position: "relative",
          display: "block",
          margin: "0 auto",
          bottom: "-4.5rem",
          cursor: "pointer",
        }}
      >
        <img
          className="center"
          src="/src/assets/icon-dice.svg"
          alt="dice icon"
          style={{ maxWidth: "50%" }}
        />
      </button>
    </Box>
  );
};

export default AdviceComponent;

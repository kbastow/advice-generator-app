import "./advice_slip.css";
import Box from "@mui/system/Box";
import { useState, useEffect } from "react";

function AdviceGenerator() {
  const [data, setData] = useState({
    id: "123",
    advice: "Generating words of advice...",
  });

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      setData({
        id: result.slip.id,
        advice: result.slip.advice,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch advice on component mount
  useEffect(() => {
    fetchAdvice();
  }, []);

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
      <p className="advice-content">&quot;{data.advice}&quot;</p>
      <img
        className="content-divider"
        src="pattern-divider-mobile.svg"
        alt="divider"
      />
      <button className="advice-button" onClick={fetchAdvice}>
        <img
          className="center"
          src="icon-dice.svg"
          alt="dice icon"
          style={{ maxWidth: "50%" }}
        />
      </button>
    </Box>
  );
}

export default AdviceGenerator;

import "./App.css";
import Container from "@mui/material/Container";
import AdviceBox from "./components/advice/advice_slip";

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <AdviceBox></AdviceBox>
        <button
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
            top: "-1.4rem"
          }}
        >
          <img
            className="center"
            src="/src/assets/icon-dice.svg"
            alt="dice icon"
            style={{ maxWidth: "50%" }}
          />
        </button>
      </Container>
    </>
  );
}

export default App;

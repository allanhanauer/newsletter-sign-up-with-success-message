import { useState } from "react";
import "./App.css";
import Signup from "./components/Signup.jsx";
import EndPage from "./components/EndPage.jsx";
function App() {
  const stages = [
    {
      id: "1",
      stage: "signup",
    },
    {
      id: "2",
      stage: "endpage",
    },
  ];
  const [stage, setStage] = useState(stages[0].stage);
  const [emailMain, setEmailMain] = useState("");
  return (
    <>
      <header></header>
      {stage === stages[0].stage ? (
        <Signup
          setEmailMain={setEmailMain}
          setStage={setStage}
          stages={stages}
        />
      ) : (
        <EndPage emailMain={emailMain} setStage={setStage} stages={stages} />
      )}
      <footer>
        <p>
          Challenge by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">AllanHanauer</a>.
        </p>
      </footer>
    </>
  );
}

export default App;

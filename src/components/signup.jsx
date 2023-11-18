import { useState } from "react";
import example from "../assets/illustration-sign-up-desktop.svg";
import iconList from "../assets/icon-list.svg";
import "./Signup.css";
function signup({ setEmailMain, setStage, stages }) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState(false);
  const verifySubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError(true);
      return;
    }
    if (isValid === false) {
      setError(true);
      return;
    }
    setEmailMain(email);
    setStage(stages[1].stage);
  };
  const handleInputChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(inputEmail));
    console.log(isValid);
  };
  return (
    <main className="signup">
      <section className="desc">
        <h1 id="title">Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <section className="list-itens">
          <ul>
            <li className="row-list">
              <img src={iconList} alt="IconList" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="row-list">
              <img src={iconList} alt="IconList" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="row-list">
              <img src={iconList} alt="IconList" />
              <p>And much more!</p>
            </li>
          </ul>
        </section>
        <form id="form-email" onSubmit={verifySubmit}>
          <label htmlFor="email">
            <section className="text">
              <p>Email address</p>
              {error ? <p className={"error"}>Valid email required</p> : ""}
            </section>
            <input
              type="text"
              name="email"
              className={error ? "inpEmail inpEmailError" : "inpEmail"}
              onChange={handleInputChange}
              id="inpEmail"
              placeholder="email@company.com"
            />
          </label>
          <button className="submit" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
      <img id="exIllu" src={example} alt="Illustration-Sign-up" />
    </main>
  );
}
export default signup;

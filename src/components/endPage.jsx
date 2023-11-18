import sucess from "../assets/icon-success.svg";
import "./EndPage.css"
function EndPage({ emailMain, setStage, stages }) {
  console.log(stages)
  return (
    <>
      <main className="EndPage">
        <img id="iconSucess" src={sucess} alt="icon-sucess" />
        <section className="sucess">
          <h1 id="title-end">Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to <span id="emailEnd">{emailMain}</span>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </section>
        <button id="end-submit" className="submit" onClick={()=>setStage(stages[0].stage)}>Dismiss message</button>
      </main>
    </>
  );
}
export default EndPage;

import { render } from "@testing-library/react";
import { useState } from "react";
import "./Aside.scss";
import AsideButton from "./AsideButton";

const Aside = () => {
  
  const [numOfChecks, updateNumOfChecks] = useState(1);

  const addCheck = () => {
    updateNumOfChecks(numOfChecks + 1);
    console.log(numOfChecks);
  };

  return (
    <aside>
      <div className="content">
        <div className="check-container">
          <h2>Check before you travel</h2>
          <textarea
            placeholder="Start typing"
            maxLength="55"
            rows="2"
          ></textarea>

          <div onClick={addCheck}>
            <AsideButton buttonText="Add check" />
          </div>
        </div>

        <div className="line-container">
          <h2>Key to lines</h2>

          <div className="line-wrap">
            <div className="line"></div>
            <input type="text" placeholder="Start typing"></input>
          </div>

          <div>
            <AsideButton buttonText="Add Line" />
          </div>
        </div>
      </div>
      <footer>
        <div>
          <p>Finished?</p>
          <p>Export</p>
        </div>
        <i class="fas fa-arrow-right"></i>
      </footer>
    </aside>
  );
};

export default Aside;

import React from "react";
import Switch from "react-switch";
import presentcomplainStyles from "./Complaints.module.scss";

function FormComp4() {
  return (
    <form className={`${presentcomplainStyles.Form}`}>
      <div className={`${presentcomplainStyles.Toprow}`}>
        <div className={`${presentcomplainStyles.Paincard} col-md-6`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Headaches:</h4>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Sudden Confusion:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Forget recent conversation:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Misplacing Items:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Poor Judgement:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Swallowing problems:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Dizziness or vertigo:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-6`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Forgets recent events:</h4>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Language Problem:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Difficulty in reading:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Difficulty in writing:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Nausea:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>
        </div>
      </div>

      <div className={`${presentcomplainStyles.Button}`}>
        <button>Save</button>
      </div>
    </form>
  );
}

export default FormComp4;

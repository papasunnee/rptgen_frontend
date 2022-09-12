import React from "react";
import Switch from "react-switch";
import presentcomplainStyles from "./Complaints.module.scss";

function FormComp3() {
  return (
    <form className={`${presentcomplainStyles.Form}`}>
      <div className={`${presentcomplainStyles.Toprow}`}>
        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Abdominal Pain:</h4>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Diarrhea:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Upset Stomach:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Abdominal Bloating:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Abdominal Gas:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Chest Pain:</h4>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Shortness of Breath:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Hypertension:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Waking up frequently during the night:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Palpitations:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>
        </div>

        <div className={`${presentcomplainStyles.Paincard} col-md-4`}>
          <div className={`${presentcomplainStyles.Title}`}>
            <h4>Irregular Heartbeats:</h4>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Sexual Problems:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Trouble Falling Asleep:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Diabetes:</label>

            <Switch uncheckedIcon={false} checkedIcon={false} />
          </div>

          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <label>Excessive Pain:</label>

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

export default FormComp3;

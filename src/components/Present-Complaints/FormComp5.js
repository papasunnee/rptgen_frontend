import React from "react";
import Switch from "react-switch";
import presentcomplainStyles from "./Complaints.module.scss";

function FormComp5() {
  return (
    <form className={`${presentcomplainStyles.Form}`}>
      <div className={`${presentcomplainStyles.Toprow}`}>
        <div className={`${presentcomplainStyles.Paincard} col-md-12`}>
          <div className={`${presentcomplainStyles.Inputgroup}`}>
            <h4 style={{ fontSize: "18px" }}>General Comments</h4>
            <textarea cols="30" rows="8" placeholder="Eg. your text here" />
          </div>
        </div>
      </div>

      <div className={`${presentcomplainStyles.Button}`}>
        <button>Save</button>
      </div>
    </form>
  );
}

export default FormComp5;

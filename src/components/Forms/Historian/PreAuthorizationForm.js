import React from "react";

import demographicsStyles from "../../Patient-Demographics/Demographics.module.scss";

function PreAuthorizationForm() {
  return (
    <form className={`${demographicsStyles.Form}`}>
      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Interpreter</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Language</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                $
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Certification</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Pre-Authorization Questionaire</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Insurance Company</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Claim Adjuster</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Claim Number</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>WCAB</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>Employer</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Address</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>City, State, Zip</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Fax</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Telephone</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>EAMS/ADJUSTER</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Header_section}`}>
        <h3>First Contact Attempt</h3>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Date</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Time</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Contact Name</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>

        <div className={`${demographicsStyles.Inputflex}`}>
          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Title Position</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <div className={`${demographicsStyles.Input_cont}`}>
            <label>Result</label>

            <div
              className={`${demographicsStyles.Inputgroup} input-group mb-3`}
            >
              <span className={`input-group-text`} id="basic-addon1">
                &nbsp;
              </span>
              <input
                type="text"
                className={`form-control`}
                placeholder="Eg. your text here"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={`${demographicsStyles.Button}`}>
        <button>Save</button>
      </div>
    </form>
  );
}

export default PreAuthorizationForm;

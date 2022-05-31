import React, { useEffect, useState } from "react";
import deleteicon from "@/images/delete.png";
import Modal from "react-bootstrap/Modal";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

export default function AppointmentModal(props) {
  const { modaldata = {} } = props;
  const [mData, setMData] = useState(modaldata);
  useEffect(() => {
    setMData(modaldata);
  });
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setMData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Add Patient
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${functionalStyles.Modal_body}`}>
        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
              Basic Information
            </h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Last Name</label>
              <input type="text" placeholder="First Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Patient Middle Name</label>
              <input type="text" placeholder="Middle Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Provider Code</label>
              <input type="text" placeholder="Enter Provider Code" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Asst Provider Code</label>
              <input type="text" placeholder="Enter Asst Provider Code" />
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>&nbsp;</h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Street Address</label>
              <input type="text" placeholder="Last Name" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>
                City, State, and Zip (Place a comma “,” after the city)
              </label>
              <input type="text" placeholder="City, State, and Zip" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input type="text" placeholder="Enter Home Phone" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Home Phone</label>
              <input type="text" placeholder="Enter Home Phone" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Upload Patient Picture</label>
              <input type="file" placeholder="Browse File" />
            </div>
          </div>
        </div>

        <div className={`${functionalStyles.Adl_col}`}>
          <div className={`${functionalStyles.Adl_col_title}`}>
            <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>Status</h3>
          </div>
          <div className={`${functionalStyles.Inputlist}`}>
            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Date of Birth</label>
              <input type="text" placeholder="Select Birthdate" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Chart Number</label>
              <input type="text" placeholder="Enter Chart Number" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>SSN</label>
              <input type="text" placeholder="Enter SSN Number" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Select Gender</label>
              <input type="text" placeholder="Select Gender" />
            </div>

            <div className={`${functionalStyles.Inputlist_con}`}>
              <label>Marital Status</label>
              <input type="text" placeholder="Enter Marital Status" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
        {/* <Button onClick={props.onHide}>Close</Button> */}

        <button>Save</button>
      </Modal.Footer>
    </Modal>
  );
}

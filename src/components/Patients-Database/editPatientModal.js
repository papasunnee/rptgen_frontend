import { fetcher } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

export default function EditPatientModal(props) {
  const { mutate } = useSWR("/api/patient", fetcher);
  const { modaldata = {} } = props;
  const [mData, setMData] = useState({});
  useEffect(() => {
    setMData({ ...modaldata });
    return () => {
      setMData({});
    };
  }, [modaldata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/patient", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...mData }),
    });

    const data = await response.json();
    if (data.success) {
      mutate();
      setMData({});
      props.setModalShow(false);
    } else {
    }
  };
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
          Edit Patient
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  placeholder="Last Name"
                  value={mData.lastname}
                  name="lastname"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={mData.firstname}
                  name="firstname"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient Middle Name</label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  value={mData.middlename}
                  name="middlename"
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Provider Code"
                  value={mData.providers_code}
                  name="providers_code"
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Asst Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Asst Provider Code"
                  value={mData.assitant_providers_code}
                  name="assitant_providers_code"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                &nbsp;
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Street Address</label>
                <input
                  type="text"
                  placeholder="Street Address"
                  value={mData.street_address}
                  name="street_address"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  City, State, and Zip (Place a comma “,” after the city)
                </label>
                <input
                  type="text"
                  placeholder="City, State, and Zip"
                  value={mData.city_state_zip}
                  name="city_state_zip"
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Home Phone</label>
                <input
                  type="text"
                  placeholder="Enter Home Phone"
                  value={mData.home_phone}
                  name="home_phone"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Change Patient Picture</label>
                <input type="file" placeholder="Browse File" />
                <div className="m-5 text-center">
                  <img src={mData.image_url} style={{ maxWidth: "150px" }} />
                </div>
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                Status
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Birth</label>
                <input
                  type="date"
                  placeholder="Select Birthdate"
                  value={mData?.birth_date?.split("T")[0]}
                  name="birth_date"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Chart Number</label>
                <input
                  type="text"
                  placeholder="Enter Chart Number"
                  value={mData.chart_number}
                  name="chart_number"
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>SSN</label>
                <input
                  type="text"
                  placeholder="Enter SSN Number"
                  value={mData.ssn}
                  name="ssn"
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Select Gender</label>
                <select
                  name="gender"
                  onChange={handleChange}
                  value={mData.gender}
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Marital Status</label>
                <select
                  name="marital_status"
                  onChange={handleChange}
                  value={mData.marital_status}
                >
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button>Update</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

import { fetcher } from "@/context/AuthContext";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

const initialValues = {
  firstname: "",
  lastname: "",
  middlename: "",
  street_address: "",
  city_state_zip: "",
  home_phone: "",
  providers_code: "",
  assistant_providers_code: "",
  image_url: "",
  birth_date: "",
  chart_number: "",
  ssn: "",
  gender: "",
  marital_status: "",
};

export default function AddPatientModal(props) {
  const { mutate } = useSWR("/api/patient", fetcher);
  const [patientData, setPatientData] = useState(initialValues);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  const handleChange = (e) => {
    setSuccess(false);
    const name = e.target.name;
    const value = e.target.value;
    setPatientData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };
  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();

    const formElement = e.currentTarget;
    const fileInput = Array.from(formElement.elements).find(
      ({ name }) => name === "image_url"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    let cloud_image;

    formData.append("upload_preset", "rptgen");

    console.log(fileInput.files.length > 1);

    if (fileInput.files.length > 0) {
      cloud_image = await fetch(
        "https://api.cloudinary.com/v1_1/altitude-tech-com/image/upload",
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      setImageSrc(cloud_image?.secure_url);
      setUploadData(cloud_image);
    }

    console.log({ cloud_image });

    try {
      const response = await fetch("/api/patient", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...patientData,
          image_url:
            cloud_image?.secure_url ??
            "https://res.cloudinary.com/altitude-tech-com/image/upload/v1654090662/rptgen/default.png",
        }),
      });
      const data = await response.json();
      if (data.success) {
        mutate();
        setSuccess(true);
        setPatientData(initialValues);
      }
    } catch (error) {
      console.log({ error: error.message });
    }
    setProcessing(false);
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
                <label>Patient First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  name="firstname"
                  value={patientData.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  name="lastname"
                  value={patientData.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Patient Middle Name</label>
                <input
                  type="text"
                  placeholder="Middle Name"
                  name="middlename"
                  value={patientData.middlename}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Provider Code"
                  required
                  name="providers_code"
                  value={patientData.providers_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Asst Provider Code</label>
                <input
                  type="text"
                  placeholder="Enter Asst Provider Code"
                  name="assistant_providers_code"
                  value={patientData.assistant_providers_code}
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
                  required
                  name="street_address"
                  value={patientData.street_address}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  City, State, and Zip (Place a comma “,” after the city)
                </label>
                <input
                  type="text"
                  placeholder="City, State, and Zip"
                  required
                  name="city_state_zip"
                  value={patientData.city_state_zip}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Home Phone</label>
                <input
                  type="tel"
                  min="0"
                  placeholder="Enter Home Phone"
                  required
                  name="home_phone"
                  value={patientData.home_phone}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Upload Patient Picture</label>
                <input
                  type="file"
                  placeholder="Browse File"
                  multiple={false}
                  accept="image/*"
                  name="image_url"
                  onChange={handleOnChange}
                />
              </div>
              <div
                style={{
                  maxWidth: "300px",
                  border: "1px solid lightgray",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                <img src={imageSrc} className="img-fluid" />
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
                  required
                  name="birth_date"
                  value={patientData.birth_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Chart Number</label>
                <input
                  type="text"
                  placeholder="Enter Chart Number"
                  required
                  name="chart_number"
                  value={patientData.chart_number}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>SSN</label>
                <input
                  type="number"
                  placeholder="Enter SSN Number"
                  required
                  name="ssn"
                  value={patientData.ssn}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Select Gender</label>
                <select>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {/* <input
                    type="text"
                    placeholder="Select Gender"
                    required
                    name="gender"
                    value={patientData.gender}
                    onChange={handleChange}
                  /> */}
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Marital Status</label>
                <select>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="widowed">Widowed</option>
                  <option value="divorced">Divorced</option>
                </select>
                {/* <input
                    type="text"
                    placeholder="Enter Marital Status"
                    required
                    name="marital_status"
                    value={patientData.marital_status}
                    onChange={handleChange}
                  /> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <p>{success && <span>Patient Successfully Added</span>}</p>
          <button type="submit" disabled={processing}>
            {processing ? "Please Wait..." : "Save"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

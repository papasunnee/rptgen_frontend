import { fetcher } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import useSWR from "swr";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

export default function EditPatientModal(props) {
  const { mutate } = useSWR("/api/patient", fetcher);
  const { modaldata = {} } = props;
  const [mData, setMData] = useState({});
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    setMData({ ...modaldata });
    return () => {
      setMData({});
    };
  }, [modaldata]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
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
    setProcessing(false);
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
          <Container fluid className={`${functionalStyles.modalForm}`}>
            <Row>
              <Col md={12}>
                <h5>Basic Information</h5>
              </Col>
              <Col lg={4} className="my-3">
                <div className="form-group">
                  <label>Patient First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    value={mData.firstname}
                    name="firstname"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Patient Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    value={mData.lastname}
                    name="lastname"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Patient Middle Name</label>
                  <input
                    type="text"
                    placeholder="Middle Name"
                    className="form-control"
                    value={mData.middlename}
                    name="middlename"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Provider Code</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Provider Code"
                    value={mData.providers_code}
                    name="providers_code"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Asst Provider Code</label>
                  <input
                    type="text"
                    placeholder="Enter Asst Provider Code"
                    className="form-control"
                    value={mData.assitant_providers_code}
                    name="assitant_providers_code"
                    onChange={handleChange}
                  />
                </div>
              </Col>
              <Col lg={4} className="my-3">
                <div className="form-group">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    placeholder="Select Birthdate"
                    className="form-control"
                    value={mData?.birth_date?.split("T")[0]}
                    name="birth_date"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Chart Number</label>
                  <input
                    type="text"
                    placeholder="Enter Chart Number"
                    value={mData.chart_number}
                    className="form-control"
                    name="chart_number"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>SSN</label>
                  <input
                    type="text"
                    placeholder="Enter SSN Number"
                    className="form-control"
                    value={mData.ssn}
                    name="ssn"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Select Gender</label>
                  <select
                    name="gender"
                    className="form-control"
                    onChange={handleChange}
                    value={mData.gender}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Marital Status</label>
                  <select
                    className="form-control"
                    name="marital_status"
                    onChange={handleChange}
                    value={mData.marital_status}
                  >
                    <option>Single</option>
                    <option>Married</option>
                    <option>Widowed</option>
                    <option>Divorced</option>
                  </select>
                </div>
              </Col>
              <Col lg={4} className="my-3">
                <div className="form-group">
                  <label>
                    City, State, and Zip{" "}
                    <em style={{ fontSize: "9px" }}>
                      (Place a comma “,” after the city)
                    </em>
                  </label>
                  <input
                    type="text"
                    placeholder="City, State, and Zip"
                    className="form-control"
                    value={mData.city_state_zip}
                    name="city_state_zip"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Street Address</label>
                  <input
                    type="text"
                    placeholder="Street Address"
                    className="form-control"
                    value={mData.street_address}
                    name="street_address"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Home Phone</label>
                  <input
                    type="text"
                    placeholder="Enter Home Phone"
                    value={mData.home_phone}
                    className="form-control"
                    name="home_phone"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Change Patient Picture</label>
                  <input type="file" placeholder="Browse File" />
                  <div className="m-5 text-center">
                    <img src={mData.image_url} style={{ maxWidth: "150px" }} />
                  </div>
                </div>
                {/* <div
                  style={{
                    margin: "auto",
                    marginTop: "20px",
                    maxHeight: "200px",
                    maxWidth: "200px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={imageSrc}
                    style={{ objectFit: "contain" }}
                    className="img-fluid"
                  />
                </div> */}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button type="submit" disabled={processing}>
            {processing ? "Updating..." : "Update"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

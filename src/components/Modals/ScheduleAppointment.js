import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Select from "react-select";
import appointmenticon from "@/images/appointment-icon.png";

import frame44Styles from "../Frame44/Frame44.module.scss";
import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";

function ScheduleAppointment() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        className={`${frame44Styles.Tab} col-md-5`}
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => setModalShow(true)}
      >
        <div className={`${frame44Styles.Image}`}>
          <Image src={appointmenticon} alt="icon-img" />
        </div>

        <div className={`${frame44Styles.Content}`}>
          <h4>Schedule Appointment</h4>
        </div>
      </div>
      <AppointmentModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ScheduleAppointment;

const initialFormValues = {
  doctor: "",
  appointment_date: "01",
  appointment_minute: "00",
  appointment_mod: "AM",
};
function AppointmentModal(props) {
  const { data, mutate } = useSWR("/api/patient", fetcher);
  const { mutate: mutateAppointment } = useSWR("/api/appointment", fetcher);
  const [patientSelect, setPatientSelect] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [form, setForm] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const handlePatientSelect = (e) => {
    setPatientSelect(e.value);
  };

  const handleChange = (e) => {
    setSuccessMessage(null);
    const { name, value } = e.target;
    setForm((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setSuccessMessage(null);
    setLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, put_id: patientSelect }),
      });

      const data = await response.json();
      if (data.success) {
        mutate();
        mutateAppointment();
        setSuccessMessage("Appointment Successfully Added");
        setPatientSelect(null);
        setForm(initialFormValues);
      } else {
        console.log(data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`${functionalStyles.Modal}`}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${functionalStyles.Modal_title}`}
        >
          Schedule Appointment
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body
          className={`${functionalStyles.Modal_body}`}
          style={{ display: "block", padding: "20px 60px" }}
        >
          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Adl_col_title}`}>
              <h3 style={{ fontSize: "23px", paddingBottom: "15px" }}>
                Basic Information
              </h3>
            </div>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Select Patient</label>
                <Select
                  onChange={handlePatientSelect}
                  options={data?.data?.patients?.map((patient) => ({
                    value: patient._id,
                    label: patient.firstname + " " + patient.lastname,
                  }))}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Assign Doctor</label>
                <input
                  type="text"
                  placeholder="Assigned Doctors Name"
                  required
                  name="doctor"
                  value={form.doctor}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Appointment Date</label>
                <input
                  type="date"
                  required
                  name="appointment_date"
                  onChange={handleChange}
                  value={form.appointment_date}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Appointment Time</label>
                <div>
                  <select
                    required
                    name="appointment_hour"
                    onChange={handleChange}
                    defaultValue={form.doappointment_hour}
                  >
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <span>:</span>
                  <select
                    required
                    name="appointment_minute"
                    onChange={handleChange}
                    defaultValue={form.appointment_minute}
                  >
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                  <select
                    required
                    name="appointment_mod"
                    onChange={handleChange}
                    defaultValue={form.appointment_mod}
                  >
                    <option>AM</option>
                    <option>PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          {/* <Button onClick={props.onHide}>Close</Button> */}
          <p>{successMessage}</p>
          <button disabled={loading}>
            {loading ? "...Please Wait" : "Save"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

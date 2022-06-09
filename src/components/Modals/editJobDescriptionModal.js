import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import Modal from "react-bootstrap/Modal";

import descriptionStyles from "../Jobdescription/jobdescription.module.scss";

export default function EditJobDescriptionModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/jobdescription?patient_id=${data._id}`,
    fetcher
  );
  const { modaldata = {} } = props;
  const [mData, setMData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setMData({ ...modaldata });
    return () => {
      setMData({});
    };
  }, [modaldata]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch("/api/patient/jobdescription", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...mData }),
    });

    const data = await response.json();
    if (data.success) {
      mutate();
      setMData({});
      setLoading(false);
      props.setModalShow(false);
    } else {
    }
    setLoading(false);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
      className={`${descriptionStyles.Modal}`}
    >
      <Modal.Header className={`${descriptionStyles.Modal_header}`} closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={`${descriptionStyles.Modal_title}`}
        >
          Edit Job Description
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <div className={`${descriptionStyles.Formtab_titles}`}>
          <div
            className={`${descriptionStyles.Formtab_titles}`}
            style={{ padding: 0 }}
          >
            <div className={`${descriptionStyles.Tab}`}>
              <h4>Main</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4 style={{ color: "#336CFB" }}>Activity (Hours per day)</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Other History</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Pre-injury Lifting Capacity</h4>
            </div>

            <div className={`${descriptionStyles.Tab}`}>
              <h4>Other Details</h4>
            </div>
          </div>
        </div>

        <Modal.Body className={`${descriptionStyles.Modal_body}`}>
          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Dominant Hand</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="dominant_hand"
                  value={mData.dominant_hand}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Type of Job</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_type"
                  value={mData.job_type}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Employee Name</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="employee_name"
                  value={mData.employee_name}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Work Site Address</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="site_address"
                  value={mData.site_address}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Job Title</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="job_title"
                  value={mData.job_title}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Wages</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="wages"
                  value={mData.wages}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Hrs. Worked Per Days</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="hours_worked"
                  value={mData.hours_worked}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Days Worked for week</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="days_worked"
                  value={mData.days_worked}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Start Working Date</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="starting_date"
                  value={mData.starting_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Last Working Date</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="last_working_date"
                  value={mData.last_working_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Reason</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="reason"
                  value={mData.reason}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${descriptionStyles.Adl_col}`}>
            <div className={`${descriptionStyles.Inputlist}`}>
              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>Description</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="description"
                  value={mData.description}
                  onChange={handleChange}
                />
              </div>

              <div className={`${descriptionStyles.Inputlist_con}`}>
                <label>New/Current Employment</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="employment_status"
                  value={mData.employment_status}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${descriptionStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "Updating" : "Update"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

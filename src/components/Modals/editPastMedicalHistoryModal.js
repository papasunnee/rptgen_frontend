import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import Modal from "react-bootstrap/Modal";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

const initialValues = {
  type: "",
  body_part: "",
  injury_date: "",
  treatment_type: "",
  injury_mechanism: "",
  fully_recovered: false,
};

export default function EditPastMedicalHistoryModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/pastmedicalhistory?patient_id=${data._id}`,
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
    const response = await fetch("/api/patient/pastmedicalhistory", {
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
    if (name.includes("fully_recovered")) {
      const checked = e.target.checked;
      setMData((prevValues) => ({
        ...prevValues,
        [name]: checked,
      }));
    } else {
      const value = e.target.value;
      setMData((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
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
          Edit Medical History
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Adl_col}`}>
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Type</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="type"
                  value={mData.type}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Body Part</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="body_part"
                  value={mData.body_part}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Date of Injury</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="injury_date"
                  value={mData.injury_date}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Type of Treatment</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="treatment_type"
                  value={mData.treatment_type}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "370px" }}
          >
            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="fully_recovered"
                    checked={mData.fully_recovered}
                    onChange={(e) => handleChange(e)}
                    style={{ width: "20px" }}
                  />{" "}
                  Fully Recovered
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Mechanism of Injury</label>
                <textarea
                  cols="20"
                  rows="15"
                  placeholder="Eg. your text here"
                  name="injury_mechanism"
                  value={mData.injury_mechanism}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

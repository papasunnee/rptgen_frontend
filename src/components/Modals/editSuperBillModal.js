import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import Modal from "react-bootstrap/Modal";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

export default function EditSuperBillModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/superbill?patient_id=${data._id}`,
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
    const response = await fetch("/api/patient/superbill", {
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
          Add Superbill
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "400px" }}
          >
            <h5>Initial</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Initial Code for History</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="initial_history_code"
                  value={mData.initial_history_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Initial Code for Physical Examination</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="initial_physical_exam_code"
                  value={mData.initial_physical_exam_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Prolonged Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="prolonged_code"
                  value={mData.prolonged_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Review of records</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="review_records"
                  value={mData.review_records}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`${functionalStyles.Adl_col}`}
            style={{ width: "400px" }}
          >
            <h5>Re-Evaluation</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Re-Evaluation Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="re_evaluation_code"
                  value={mData.re_evaluation_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Prolonged Code</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="eveluation_prolonged_code"
                  value={mData.eveluation_prolonged_code}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Review of records</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="review_records"
                  value={mData.review_records}
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

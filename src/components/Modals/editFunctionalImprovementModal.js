import React, { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import Modal from "react-bootstrap/Modal";

import functionalStyles from "../Functionalimprovement/Functionalimprovement.module.scss";

export default function EditFunctionalImprovementModal(props) {
  const data = useContext(UserContext);
  const { mutate } = useSWR(
    `/api/patient/functional?patient_id=${data._id}`,
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
    const response = await fetch("/api/patient/functional", {
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
    if (name.includes("value_")) {
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
          Edit Functional improvement
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body className={`${functionalStyles.Modal_body}`}>
          <div className={`${functionalStyles.Functionalimprovment_col}`}>
            <div style={{ minHeight: "22px" }}>
              {/* {error && <p className="bg-danger text-white p-2">{error}</p>}
              {successMessage && (
                <p className="bg-success text-white p-2">{successMessage}</p>
              )} */}
            </div>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_a"
                    checked={mData.value_a}
                    onChange={(e) => handleChange(e)}
                  />
                  <span>
                    {" "}
                    Are you using assisted ambulations or activity aids?
                  </span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_b"
                    checked={mData.value_b}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Do you require assistance at home or at work?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_c"
                    checked={mData.value_c}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Is your ongoing care stopped?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_d"
                    checked={mData.value_d}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Is there a re-injury</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_e"
                    checked={mData.value_e}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Do you experience increase is symptoms?</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_f"
                    checked={mData.value_f}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Sports</span>
                </label>
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>
                  <input
                    type="checkbox"
                    name="value_g"
                    checked={mData.value_g}
                    onChange={(e) => handleChange(e)}
                  />
                  <span> Are you taking medication?</span>
                </label>
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <h5>Activities of Daily Living (ADL)</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Phyisical Activity</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="physical_activity"
                  value={mData.physical_activity}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sensory Function</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sensory_function"
                  value={mData.sensory_function}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Non-specialized hand activities</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="non_specialized_hand"
                  value={mData.non_specialized_hand}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Travel</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="travel"
                  value={mData.travel}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sexual Function</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sexual_function"
                  value={mData.sexual_function}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Sleep</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="sleep"
                  value={mData.sleep}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={`${functionalStyles.Adl_col}`}>
            <h5>Activities of Daily Living (ADL)</h5>

            <div className={`${functionalStyles.Inputlist}`}>
              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Self-care, personal hygiene</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="self_care"
                  value={mData.self_care}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
                <label>Communication</label>
                <input
                  type="text"
                  placeholder="Eg. your text here"
                  name="communication"
                  value={mData.communication}
                  onChange={handleChange}
                />
              </div>

              <div className={`${functionalStyles.Inputlist_con}`}>
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
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className={`${functionalStyles.Modal_footer}`}>
          <button type="submit" disabled={loading}>
            {loading ? "...Updating" : "Update"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

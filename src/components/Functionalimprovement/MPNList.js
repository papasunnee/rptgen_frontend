import React, { useContext, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";

import { UserContext } from "@/context/UserContext";
import { fetcher } from "@/context/AuthContext";

import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import EditFunctionalImprovementModal from "../Modals/editFunctionalImprovementModal";

const initialValues = {
  physical_activity: "",
  sensory_function: "",
  non_specialized_hand: "",
  travel: "",
  sexual_function: "",
  sleep: "",
  self_care: "",
  communication: "",
  description: "",
};

function MPNList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/mpn?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleEditModal = (mpn) => {
    setModalShow(true);
    setModalData(mpn);
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: <span style={{ fontSize: "20px" }}>Confirm to Delete Record</span>,
      message: `Are you sure to do delete this record ?`,
      buttons: [
        {
          label: loading ? "Processing" : "Yes",
          onClick: async () => {
            try {
              const response = await handleDelete(id);
              console.log(response);
              mutate();
            } catch (error) {
              console.log(error.message);
            }
          },
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/patient/mpn", {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delete_id: id }),
      });

      return await response.json();
    } catch (error) {
      return error;
    }
  };
  return (
    <div className={`${frame44Styles.Appointment_activity}`}>
      <div className={`${frame44Styles.Title}`}>
        <h3>MPN ({data?.data?.mpns?.length || 0})</h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.mpns?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Report Injury</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Description</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Non Specialized Hand</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Physical Activity</h4>
                  </td>

                  <td
                    className={`${frame44Styles.Name} col`}
                    style={{ textAlign: "center" }}
                  >
                    <h4>Self Care</h4>
                  </td>

                  <td
                    className={`${frame44Styles.Name} col`}
                    style={{ paddingLeft: "40px" }}
                  >
                    <h4>Sensory Function</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.mpns?.map((mpn, index) => (
                  <tr key={index} className={`${frame44Styles.Appointment}`}>
                    <td className={`${frame44Styles.Name} col`}>
                      <h4>
                        {mpn.injury_report_to_employer_boolean ? "Yes" : "No"}
                      </h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{mpn.description}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{mpn.non_specialized_hand}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{mpn.physical_activity}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{mpn.self_care}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{mpn.sensory_function}</h4>
                    </td>

                    <td className={`${frame44Styles.Action_buttons}`}>
                      {/* <Image
                        variant="primary"
                        title="Edit Functional Improvement record"
                        onClick={() => handleEditModal(mpn)}
                        src={editicon}
                        alt="edit-icon"
                      /> */}

                      <Image
                        src={deleteicon}
                        title="Delete MPN record"
                        alt="delete-icon"
                        onClick={() => {
                          confirmDelete(mpn._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <EditFunctionalImprovementModal
              show={modalShow}
              modaldata={modalData}
              setModalShow={setModalShow}
              onHide={() => {
                setModalShow(false);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default MPNList;

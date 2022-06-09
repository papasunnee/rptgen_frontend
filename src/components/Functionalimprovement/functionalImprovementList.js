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

function FunctionalImprovemntList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/functional?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleEditModal = (functionalImprovement) => {
    setModalShow(true);
    setModalData(functionalImprovement);
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
      const response = await fetch("/api/patient/functional", {
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
        <h3>
          Functional Improvement (
          {data?.data?.functionalImprovements?.length || 0})
        </h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.functionalImprovements?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Communication</h4>
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

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Self Care</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Sensory Function</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.functionalImprovements?.map(
                  (functionalImprovement, index) => (
                    <tr key={index} className={`${frame44Styles.Appointment}`}>
                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.communication}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.description}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.non_specialized_hand}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.physical_activity}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.self_care}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{functionalImprovement.sensory_function}</h4>
                      </td>

                      <td className={`${frame44Styles.Action_buttons}`}>
                        <Image
                          variant="primary"
                          title="Edit Functional Improvement record"
                          onClick={() => handleEditModal(functionalImprovement)}
                          src={editicon}
                          alt="edit-icon"
                        />

                        <Image
                          src={deleteicon}
                          alt="delete-icon"
                          onClick={() => {
                            confirmDelete(functionalImprovement._id);
                          }}
                        />
                      </td>
                    </tr>
                  )
                )}
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

export default FunctionalImprovemntList;

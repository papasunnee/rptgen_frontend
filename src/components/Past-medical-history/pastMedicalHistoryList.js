import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";

import deleteicon from "@/images/delete.png";
import editicon from "@/images/edit-icon.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import EditPastMedicalHistoryModal from "../Modals/editPastMedicalHistoryModal";

const initialValues = {
  type: "",
  body_part: "",
  injury_date: "",
  treatment_type: "",
  injury_mechanism: "",
  fully_recovered: false,
};

function PastMedicalHistoryList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/pastmedicalhistory?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleEditModal = (pastMedicalHistory) => {
    setModalShow(true);
    setModalData(pastMedicalHistory);
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
              await handleDelete(id);
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
      const response = await fetch("/api/patient/pastmedicalhistory", {
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
          Past Medooooooical History ({data?.data?.pastMedicalHistories?.length || 0})
        </h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.pastMedicalHistories?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Body Part</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Injury Date</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Injury Mechanism</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Treatment Type</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Type</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.pastMedicalHistories?.map(
                  (pastMedicalHistory, index) => (
                    <tr key={index} className={`${frame44Styles.Appointment}`}>
                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{pastMedicalHistory.body_part}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{pastMedicalHistory.injury_date}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{pastMedicalHistory.injury_mechanism}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{pastMedicalHistory.treatment_type}</h4>
                      </td>

                      <td className={`${frame44Styles.Name} col`}>
                        <h4>{pastMedicalHistory.type}</h4>
                      </td>

                      <td className={`${frame44Styles.Action_buttons}`}>
                        <Image
                          variant="primary"
                          title="Edit Past Medical History record"
                          onClick={() => handleEditModal(pastMedicalHistory)}
                          src={editicon}
                          alt="edit-icon"
                        />

                        <Image
                          src={deleteicon}
                          alt="delete-icon"
                          onClick={() => {
                            confirmDelete(pastMedicalHistory._id);
                          }}
                        />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <EditPastMedicalHistoryModal
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

export default PastMedicalHistoryList;

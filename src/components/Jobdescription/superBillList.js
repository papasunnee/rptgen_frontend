import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";

import deleteicon from "@/images/delete.png";
import editicon from "@/images/edit-icon.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
// import AppointmentModal from "./appointmentModal";
import { UserContext } from "@/context/UserContext";
import EditSuperBillModal from "../Modals/editSuperBillModal";

const initialValues = {
  initial_history_code: "",
  initial_physical_exam_code: "",
  prolonged_code: "",
  review_records: "",
  re_evaluation_code: "",
  eveluation_prolonged_code: "",
  review_records: "",
};

function SuperBillList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/superbill?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleEditModal = (superBill) => {
    setModalShow(true);
    setModalData(superBill);
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
      const response = await fetch("/api/patient/superbill", {
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
        <h3>Super Bills ({data?.data?.superBills?.length || 0})</h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.superBills?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Evaluation Prolonged Code</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Initail History Code</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Initial Physical Examination Code</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Prolonged Code</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Re Evaluation Code</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Review Records</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.superBills?.map((superBill, index) => (
                  <tr key={index} className={`${frame44Styles.Appointment}`}>
                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.eveluation_prolonged_code}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.initial_history_code}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.initial_physical_examination}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.prolonged_code}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.re_evaluation_code}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{superBill.review_records}</h4>
                    </td>

                    <td className={`${frame44Styles.Action_buttons}`}>
                      <Image
                        variant="primary"
                        title="Edit Super Bill record"
                        onClick={() => handleEditModal(superBill)}
                        src={editicon}
                        alt="edit-icon"
                      />

                      <Image
                        src={deleteicon}
                        alt="delete-icon"
                        title="Delete Super Bill record"
                        onClick={() => {
                          confirmDelete(superBill._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <EditSuperBillModal
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

export default SuperBillList;

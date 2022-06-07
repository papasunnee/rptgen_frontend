import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";

import profilepic from "@/images/profile-1.png";
import deleteicon from "@/images/delete.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
// import AppointmentModal from "./appointmentModal";
import { UserContext } from "@/context/UserContext";

function FunctionalImprovemntList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/functional?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log({ sss: data });

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
        {/* <h3>({data?.data?.appointments?.length || 0})</h3> */}
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
                        {/* <Image
                          variant="primary"
                          onClick={() => setModalShow(true)}
                          src={editicon}
                          alt="edit-icon"
                        /> */}

                        {/* <AppointmentModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}

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
          </>
        )}
      </div>
    </div>
  );
}

export default FunctionalImprovemntList;

import React, { useContext, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";

import deleteicon from "@/images/delete.png";
import editicon from "@/images/edit-icon.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import { UserContext } from "@/context/UserContext";
import EditJobDescriptionModal from "../Modals/editJobDescriptionModal";

const initialValues = {
  dominant_hand: "",
  job_type: "",
  employee_name: "",
  site_address: "",
  job_title: "",
  wages: "",
  hours_worked: "",
  days_worked: "",
  starting_date: "",
  last_working_date: "",
  reason: "",
  description: "",
  employment_status: "",
};
function JobDescriptionList() {
  const contextData = useContext(UserContext);
  const { data, mutate } = useSWR(
    `/api/patient/jobdescription?patient_id=${contextData._id}`,
    fetcher
  );
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleEditModal = (jobDescription) => {
    setModalShow(true);
    setModalData(jobDescription);
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
      const response = await fetch("/api/patient/jobdescription", {
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
        <h3>Job Description ({data?.data?.jobDescriptions?.length || 0})</h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.jobDescriptions?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Dominant Hand</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Employee Name</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Hours Worked</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Job Title</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Job Type</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Reason</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.jobDescriptions?.map((jobDescription, index) => (
                  <tr key={index} className={`${frame44Styles.Appointment}`}>
                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.dominant_hand}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.employee_name}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.hours_worked}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.job_title}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.job_type}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{jobDescription.job_title}</h4>
                    </td>

                    <td className={`${frame44Styles.Action_buttons}`}>
                      <Image
                        variant="primary"
                        title="Edit Job Description record"
                        onClick={() => handleEditModal(jobDescription)}
                        src={editicon}
                        alt="edit-icon"
                      />

                      <Image
                        src={deleteicon}
                        alt="delete-icon"
                        title="Delete Job Description record"
                        onClick={() => {
                          confirmDelete(jobDescription._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <EditJobDescriptionModal
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

export default JobDescriptionList;

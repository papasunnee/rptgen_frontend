import React, { useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";

import profilepic from "@/images/profile-1.png";
import deleteicon from "@/images/delete.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import AppointmentModal from "./appointmentModal";

function AppointmentList({
  title = "Upcoming Appointments",
  type = "previous",
}) {
  const { data, mutate } = useSWR(`/api/appointment?type=${type}`, fetcher);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);

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
      const response = await fetch("/api/appointment", {
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
          {title} ({data?.data?.appointments?.length || 0})
        </h3>
      </div>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.appointments?.length > 0 && (
          <>
            <table className="table">
              <thead>
                <tr className={`${frame44Styles.Appointmentlist_title}`}>
                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Name</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Email</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Date</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Visit Time</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Doctor</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>Conditions</h4>
                  </td>

                  <td className={`${frame44Styles.Name} col`}>
                    <h4>&nbsp;</h4>
                  </td>
                </tr>
              </thead>
              <tbody>
                {data?.data?.appointments?.map((appointment, index) => (
                  <tr key={index} className={`${frame44Styles.Appointment}`}>
                    <td className={`${frame44Styles.Name} col`}>
                      <div className={`${frame44Styles.Profilepic}`}>
                        <img
                          src={appointment.patient.image_url}
                          alt="profile-pic"
                          className="img-fluid"
                        />
                      </div>

                      <h4>{`${appointment.patient.firstname} ${appointment.patient.lastname}`}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{appointment.patient.email || "No Email"}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>
                        {moment(appointment.appointment_date).format(
                          "Do MMM YYYY"
                        )}
                      </h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{`${appointment.appointment_hour}:${appointment.appointment_minute} ${appointment.appointment_mod}`}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <h4>{appointment.doctor}</h4>
                    </td>

                    <td className={`${frame44Styles.Name} col`}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        {appointment.condition.map((con, index) => (
                          <p key={index}>{con}</p>
                        ))}
                      </div>
                    </td>

                    <td className={`${frame44Styles.Action_buttons}`}>
                      {/* <Image
              variant="primary"
              onClick={() => setModalShow(true)}
              src={editicon}
              alt="edit-icon"
            /> */}

                      <AppointmentModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />

                      <Image
                        src={deleteicon}
                        alt="delete-icon"
                        onClick={() => {
                          confirmDelete(appointment._id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default AppointmentList;

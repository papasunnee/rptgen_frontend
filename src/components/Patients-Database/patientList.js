import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";
import PatientModal from "./patientModal";

import profilepic from "@/images/profile-1.png";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";

const initialValues = {
  _id: null,
  firstname: "",
  lastname: "",
  middlename: "",
  street_address: "",
  city_state_zip: "",
  home_phone: "",
  providers_code: "",
  assistant_providers_code: "",
  image_url: "",
  birth_date: "",
  chart_number: "",
  ssn: "",
  gender: "",
  marital_status: "",
};

export default function PatientList() {
  const { data } = useSWR("/api/patient", fetcher);

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(initialValues);

  const handleModal = (patient) => {
    setModalShow(true);
    setModalData(patient);
  };
  return (
    <div className={`${frame44Styles.Appointment_activity}`}>
      <div className={`${frame44Styles.Title}`}>
        <h3>
          Patients (
          {data?.data?.patients?.length || (
            <small>You Have No Patient Record in Database</small>
          )}
          )
        </h3>
      </div>

      <table className={`${frame44Styles.Appointmentlist_section} table`}>
        {data?.data?.patients?.length > 0 && (
          <thead>
            <tr className={`${frame44Styles.Appointmentlist_title}`}>
              <th scope="col">Name</th>
              {/* <th className={`${frame44Styles.Name}`}>
                <h4>Name</h4>
              </th> */}
              <th scope="col">Email</th>
              <th scope="col">Date</th>
              <th scope="col">Visit Time</th>
              <th scope="col">Doctor</th>
              <th scope="col">Conditions</th>
              <th scope="col">&nbsp;</th>
            </tr>
            {/* <PaginatedPatient handleModal={handleModal} /> */}
          </thead>
        )}
        <PatientModal
          show={modalShow}
          modaldata={modalData}
          onHide={() => setModalShow(false)}
        />

      </table>

      <div className={`${frame44Styles.Appointmentlist_section}`}>
        {data?.data?.patients?.length > 0 && (
          <>
            <div className={`${frame44Styles.Appointmentlist_title}`}>
              <div className={`${frame44Styles.Name}`}>
                <h4>Name</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>Email</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>Date</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>Visit Time</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>Doctor</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>Conditions</h4>
              </div>

              <div className={`${frame44Styles.Name}`}>
                <h4>&nbsp;</h4>
              </div>
            </div>
            <PaginatedPatient handleModal={handleModal} />
          </>
        )}
        <PatientModal
          show={modalShow}
          modaldata={modalData}
          onHide={() => {
            setModalShow(false);
            
          }}
        />
      </div>
    </div>
  );
}

function Page({ currentItems = [], handleModal }) {
  const { mutate } = useSWR("/api/patient", fetcher);
  const [loading, setLoading] = useState(false);
  const handleDelete = async (id) => {
    try {
      const response = await fetch("/api/patient", {
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
  return currentItems.map((patient, i) => (
    <tbody key={i} className={`${frame44Styles.Appointment}`}>
      {/* <div className={`${frame44Styles.Name}`}>
        <div className={`${frame44Styles.Profilepic}`}>
          <img
            src={patient.image_url}
            alt="profile-pic"
            className="img-fluid"
            // width="150"
            // height="150"
          />
        </div>

        <h4>{patient.firstname + " " + patient.lastname}</h4>
      </div> */}

      <tr className={`${frame44Styles.Name}`}>
        <div className={`${frame44Styles.Profilepic}`}>
          <img
            src={patient.image_url}
            alt="profile-pic"
            className="img-fluid"
          // width="150"
          // height="150"
          />
        </div>

        <td>{patient.firstname + " " + patient.lastname}</td>
      </tr>

      <tr className={`${frame44Styles.Name}`}>
        <td>{patient.email}</td>
      </tr>

      <div className={`${frame44Styles.Name}`}>
        <h4>{moment(patient.created_at).format("MMM Do YYYY")}</h4>
      </div>

      <div className={`${frame44Styles.Name}`}>
        <h4>{patient.appointments.length > 0 ? "Not Assigned" : "Null"}</h4>
      </div>

      <div className={`${frame44Styles.Name}`}>
        <h4>{patient.appointments.length > 0 ? "Not Assigned" : "Null"}</h4>
      </div>

      <div className={`${frame44Styles.Name}`}>
        <h4>{patient.appointments.length > 0 ? "Not Assigned" : "Null"}</h4>
      </div>

      <div className={`${frame44Styles.Action_buttons}`}>
        <Image
          variant="primary"
          onClick={() => handleModal(patient)}
          src={editicon}
          alt="edit-icon"
        />

        <Image
          src={deleteicon}
          alt="delete-icon"
          onClick={() => confirmDelete(patient._id)}
        />
      </div>
    </tbody>
  ));
}

function PaginatedPatient({ handleModal }) {
  const { data, error } = useSWR(`/api/patient`, fetcher);
  // if ((!data && !error) || error) {
  //   return "loading";
  // }
  // ... handle loading and error states

  // return data?.data?.patients;
  const items = [...data?.data?.patients];
  const itemsPerPage = 8;

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        <Page currentItems={currentItems} handleModal={handleModal} />

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
      <style jsx>
        {`
          ul {
            display: flex;
            list-style: none;
          }
          li a {
            border-radius: 7px;
            padding: 0.1rem 1rem;
            border: gray 1px solid;
            cursor: pointer;
          }
          li.previous a,
          li.next a,
          li.break a {
            border-color: transparent;
          }
          li.active a {
            background-color: #0366d6;
            border-color: transparent;
            color: white;
            min-width: 32px;
          }
          li.disabled a {
            color: grey;
          }
          li.disable,
          li.disabled a {
            cursor: default;
          }
        `}
      </style>
    </>
  );
}

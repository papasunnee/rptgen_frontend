import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { fetcher } from "@/context/AuthContext";
import PatientModal from "./patientModal";

import profilepic from "@/images/profile-1.png";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

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
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
}

function Page({ currentItems = [], handleModal }) {
  return currentItems.map((patient, i) => (
    <div key={i} className={`${frame44Styles.Appointment}`}>
      <div className={`${frame44Styles.Name}`}>
        <div className={`${frame44Styles.Profilepic}`}>
          <Image src={profilepic} alt="profile-pic" />
        </div>

        <h4>{patient.firstname + " " + patient.lastname}</h4>
      </div>

      <div className={`${frame44Styles.Name}`}>
        <h4>{patient.email}</h4>
      </div>

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

        <Image src={deleteicon} alt="delete-icon" />
      </div>
    </div>
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
  }, [itemOffset, itemsPerPage]);

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

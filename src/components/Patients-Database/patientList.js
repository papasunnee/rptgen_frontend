import React, { useEffect, useState } from "react";
import Image from "next/image";
import useSWR from "swr";
import moment from "moment";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import { fetcher } from "@/context/AuthContext";
import EditPatientModal from "./editPatientModal";
import Loading from "@/components/Loading";
import profilepic from "@/images/profile-1.png";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";

import "react-confirm-alert/src/react-confirm-alert.css";
import frame44Styles from "../Frame44/Frame44.module.scss";
import PLStyles from "./patientList.module.scss";
import Link from "next/link";
import ProvidercodeModal from "../Optionselect/ProvidercodeModal";

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
        <h3>Patients ({data?.data?.patients?.length})</h3>
      </div>

      <div className={PLStyles.wrapper}>
        {data?.data?.patients?.length > 0 && (
          <>
            <table className="table table-bordered">
              <thead>
                <tr style={{ backgroundColor: "rgb(230, 230, 230)" }}>
                  <th>
                    <input type="checkbox" /> Patient
                  </th>
                  <th scope="col">Created By</th>
                  <th scope="col">Create Time</th>
                  <th scope="col">Updated By</th>
                  <th scope="col">Update Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <PaginatedPatient handleModal={handleModal} />
            </table>
          </>
        )}
        <EditPatientModal
          show={modalShow}
          modaldata={modalData}
          setModalShow={setModalShow}
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
  const [modalShow, setModalShow] = useState(false);
  const [modalId, setModalId] = useState(null);

  const hanndleRedirectModal = (event, patient_id) => {
    event.preventDefault();
    setModalId(patient_id);
    setModalShow(true);
  };
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
  return (
    <>
      <ProvidercodeModal
        modalid={modalId}
        show={modalShow}
        redirectpath={`/historian/${modalId}/demographics`}
        onHide={() => setModalShow(false)}
      />
      {currentItems.map((patient, i) => (
        <tr key={i}>
          <td>
            <div className={PLStyles.bioData}>
              <input type="checkbox" className="mt-1" />

              {/* <Link href={`/historian/${patient._id}/demographics`}> */}
              <Link href="">
                <a onClick={(e) => hanndleRedirectModal(e, patient._id)}>
                  {/* <div className={`${frame44Styles.Profilepic}`}>
              <img
                src={patient.image_url}
                alt="profile-pic"
                className="img-fluid" */}
                  {/* // width="150"
              // height="150"
            //   />
            // </div> */}

                  <div>
                    <h4 className={PLStyles.patientName}>
                      {patient.firstname + " " + patient.lastname}
                    </h4>
                  </div>

                  <p>
                    <span>Date of Birth:</span>
                    <span>
                      {moment(patient?.birth_date).format("DD/MM/YY") ||
                        "mm/dd/yy"}
                    </span>
                  </p>

                  <p>
                    <span>Insurance:</span>
                    <span>
                      {patient?.patient_demographic_id
                        ?.insurance_company_name || "-"}
                    </span>
                  </p>

                  <p>
                    <span>Provider:</span>
                    <span> {patient?.providers_code || "-"}</span>
                  </p>

                  <p>
                    <span>Chart No:</span>
                    <span> {patient?.chart_number || "-"}</span>
                  </p>

                  <p>
                    <span>Employer:</span>
                    <span>
                      {" "}
                      {patient?.job_descriptions[0]?.employee_name || "-"}
                    </span>
                  </p>
                </a>
              </Link>
            </div>
          </td>

          <td scope="col">
            <p className={PLStyles.badge}>
              <span className="badge badge-pill badge-secondary">
                {patient?.createdBy?.email || "admin@gmail.com"}
              </span>
            </p>
          </td>

          <td scope="col">
            <p className={PLStyles.badge}>
              <span className="badge badge-pill badge-secondary">
                {moment(patient.createdAt).format("MMM Do YYYY HH:mm:ss", true)}
              </span>
            </p>
          </td>

          <td scope="col">
            <p className={PLStyles.badge}>
              <span className="badge badge-pill badge-secondary">
                {patient?.updatedBy?.email || "admin@gmail.com"}
              </span>
            </p>
          </td>

          <td scope="col">
            <p className={PLStyles.badge}>
              <span className="badge badge-pill badge-secondary">
                {moment(patient.updatedAt).format("MMM Do YYYY HH:mm:ss", true)}
              </span>
            </p>
          </td>

          {/* <td className={`${frame44Styles.Name} col text-center`}>
        <h4>{patient.appointments.length > 0 ? "Not Assigned" : "Null"}</h4>
      </td> */}

          <td className={`${PLStyles.actionButton}`}>
            <div className={PLStyles.actionButtonWrapper}>
              <Image
                className={PLStyles.imageButton}
                variant="primary"
                title={`Edit ${patient.firstname}`}
                onClick={() => handleModal(patient)}
                src={editicon}
                alt="edit-icon"
              />
              <div className="mx-1"></div>
              <Image
                className={PLStyles.imageButton}
                src={deleteicon}
                title={`Delete ${patient.firstname}`}
                alt="delete-icon"
                onClick={() => confirmDelete(patient._id)}
              />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
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
      <tbody>
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
      </tbody>
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

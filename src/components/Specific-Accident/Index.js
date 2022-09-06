import React, { Fragment } from "react";
import Image from "next/image";
import Sidenav from "../Common/Sidenav";
import Topnav from "../Common/Topnav";
import editicon from "@/images/edit-icon.png";
import deleteicon from "@/images/delete.png";
import frame44Styles from "../Frame44/Frame44.module.scss";
import frame47Styles from "../Frame47/Frame47.module.scss";
import SearchPatient from "../Patients-Database/searchPatient";
import SpecificAccidentTrigger from "../Modals/SpecificAccidentTrigger";
import "react-tabs/style/react-tabs.css";

function Index() {
  return (
    <Fragment>
      <div
        className={`${frame44Styles.Frame34} container-fluid overflow-hidden`}
      >
        <div
          className={`${frame44Styles.Heightadjust} row vh-100 overflow-auto`}
        >
          <Sidenav className={`${frame44Styles.Sidebar} container-fluid`} />

          <div className={`col d-flex flex-column h-sm-100`}>
            <main className={`row overflow-auto`}>
              <div className={`${frame44Styles.Contentcon} col pt-4`}>
                <Topnav />

                <div className={`${frame44Styles.Body}`}>
                  <div className={`${frame47Styles.Patientsdetails} row`}>
                    <div className={`${frame47Styles.Top}`}>
                      <h3>Specific Accident</h3>

                      <SearchPatient />
                    </div>
                  </div>

                  <div className={`${frame44Styles.Toptabs} row col-md-7`}>
                    <div className={`${frame47Styles.Toptabs_title}`}>
                      <h3 style={{ marginTop: "7%", marginBottom: "5%" }}>
                        Quick Tasks
                      </h3>
                    </div>

                    <SpecificAccidentTrigger />
                  </div>

                  <div className={`${frame44Styles.Appointmentlist_sectionn}`}>
                    <div className={`${frame44Styles.Title_conn}`}>
                      <h3>Specific Accident</h3>
                    </div>

                    <table className="table">
                      <thead>
                        <tr
                          className={`${frame44Styles.Appointmentlist_title}`}
                        >
                          <td className={`${frame44Styles.Name} col`}>
                            <h4>Name</h4>
                          </td>

                          <td className={`${frame44Styles.Name} col`}>
                            <h4>Date</h4>
                          </td>

                          <td className={`${frame44Styles.Name} col-md-4`}>
                            <h4>Conditions</h4>
                          </td>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className={`${frame44Styles.Appointment}`}>
                          <td className={`${frame44Styles.Name} col`}>
                            <h4>Leslie Alexander</h4>
                          </td>

                          <td className={`${frame44Styles.Name} col`}>
                            <h4>10/10/2020</h4>
                          </td>

                          <td className={`${frame44Styles.Name} col`}>
                            <h4>Mumps Stage II</h4>
                          </td>

                          <td className={`${frame44Styles.Action_buttons}`}>
                            <Image
                              variant="primary"
                              title="Edit Past Medical History record"
                              onClick={() =>
                                handleEditModal(pastMedicalHistory)
                              }
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
                      </tbody>
                    </table>
                    {/* <EditPastMedicalHistoryModal
                                            show={modalShow}
                                            modaldata={modalData}
                                            setModalShow={setModalShow}
                                            onHide={() => {
                                                setModalShow(false);
                                            }}
                                        /> */}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;

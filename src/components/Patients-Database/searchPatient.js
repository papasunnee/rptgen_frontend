import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import useSWR from "swr";

import frame47Styles from "../Frame47/Frame47.module.scss";
import ProvidercodeModal from "../Optionselect/ProvidercodeModal";

function SearchPatient() {
  const { data } = useSWR("/api/patient", fetcher);
  const router = useRouter();
  const [patientSelect, setPatientSelect] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [modalId, setModalId] = useState(null);

  const handlePatientSelect = (e) => {
    setPatientSelect(e.value);
    setModalId(e.value);
    // setModalShow(true);
    let routePath = router.route;
    if (routePath.includes("[id]")) {
      let newPath = routePath.replace("[id]", e.value);
      return router.push(newPath);
    } else {
      return router.push(`/historian/${e.value}/demographics`);
    }
  };

  const [patient, setPatient] = useState({});
  //   useEffect(() => {
  //     setPatient({ ...data?.data?.patients });
  //   });
  return (
    <div
      className={`${frame47Styles.Inputgroup} input-group flex-nowrap`}
      style={{ zIndex: "5 !important" }}
    >
      <ProvidercodeModal
        modalid={modalId}
        show={modalShow}
        redirectpath={`/historian/${modalId}/demographics`}
        onHide={() => setModalShow(false)}
      />
      <span
        className={`${frame47Styles.Inputgroup_text} input-group-text`}
        id="addon-wrapping"
      >
        <BsSearch />
      </span>
      <Select
        className="form-control"
        onChange={handlePatientSelect}
        options={data?.data?.patients?.map((patient) => ({
          value: patient._id,
          label: patient.firstname + " " + patient.lastname,
        }))}
      />
    </div>
  );
}

export default SearchPatient;

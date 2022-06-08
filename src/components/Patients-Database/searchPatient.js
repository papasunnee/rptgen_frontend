import { fetcher } from "@/context/AuthContext";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";
import useSWR from "swr";

import frame47Styles from "../Frame47/Frame47.module.scss";

function SearchPatient() {
  // const [val, setVal] = useContext(UserContext);
  const { data } = useSWR("/api/patient", fetcher);
  const router = useRouter();
  const [patientSelect, setPatientSelect] = useState(null);
  const handlePatientSelect = (e) => {
    setPatientSelect(e.value);
    console.log(e.value);
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
    <div className={`${frame47Styles.Inputgroup} input-group flex-nowrap`}>
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

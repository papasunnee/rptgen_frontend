import React, { useContext, useEffect, useState } from "react";
import moment from "moment";

import frame47Styles from "../Frame47/Frame47.module.scss";
import { UserContext } from "@/context/UserContext";

const initialValues = {
  firstname: "",
  lastname: "",
  birth_date: "",
  image_url:
    "https://res.cloudinary.com/altitude-tech-com/image/upload/v1654090662/rptgen/default.png",
};

function PatientInfo() {
  const data = useContext(UserContext);
  const [patient, setPatient] = useState(initialValues);

  useEffect(() => {
    setPatient({ ...data });
  }, [patient]);

  return (
    <div className={`${frame47Styles.Details}`}>
      <div className={`${frame47Styles.Namecont}`}>
        <div className={`${frame47Styles.Profilepic}`}>
          <img src={patient?.image_url} alt="loading" className="img-fluid" />
        </div>

        <div className={`${frame47Styles.Name}`}>
          <h4 className={`${frame47Styles.Bigname}`}>{`${
            patient?.firstname || ""
          } ${patient?.lastname || ""}`}</h4>
          <h5>See Patient info</h5>
        </div>
      </div>

      <div className={`${frame47Styles.Namecont}`}>
        <h4>Address: {patient?.address}</h4>
      </div>

      <div className={`${frame47Styles.Namecont}`}>
        <h4>Contact {patient?.phone}</h4>
      </div>

      <div className={`${frame47Styles.Namecont}`}>
        <h4>Birthdate: {patient?.birth_date?.split("T")[0] || ""}</h4>
      </div>

      <div className={`${frame47Styles.Namecont}`}>
        <h4>Age: {moment().diff(patient?.birth_date, "years") || ""}</h4>
      </div>
    </div>
  );
}

export default PatientInfo;

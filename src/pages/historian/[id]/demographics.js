import React, { Fragment } from "react";
import Index from "@/components/Patient-Demographics/Index";

function PatientDemographics() {
  return (
    <Fragment>
      <Index />
    </Fragment>
  );
}

// export async function getServerSideProps({ params }) {
//   // Fetch data from API with absolute URL
//   const res = await fetch(
//     `${process.env.NEXTAUTH_URL}/api/patient?id=${params.id}`
//   );
//   const data = await res.json();

//   if (data.success) {
//     return { props: { data: data.data.patients } };
//   } else {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/patient/database",
//       },
//       props: {},
//     };
//   }
//   // Pass data to the page via props
// }

export default PatientDemographics;

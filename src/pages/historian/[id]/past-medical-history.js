import React from "react";
import { UserContext } from "@/context/UserContext";
import { SSRProvider } from "react-bootstrap";
import Pastmedicalhistory from "@/components/Past-medical-history/Pastmedicalhistory";

function PastMedicalHistoryPage({ data }) {
  return (
    <SSRProvider>
      <UserContext.Provider value={data}>
        <Pastmedicalhistory />
      </UserContext.Provider>
    </SSRProvider>
  );
}

export async function getServerSideProps({ params }) {
  // Fetch data from API with absolute URL
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/patient?id=${params.id}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();

  if (data.success) {
    return { props: { data: data.data.patients } };
  } else {
    return {
      redirect: {
        permanent: false,
        destination: "/patient/database",
      },
      props: {},
    };
  }
}

export default PastMedicalHistoryPage;

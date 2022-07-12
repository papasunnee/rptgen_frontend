import React from "react";
import FuncImprovement from "@/components/Functionalimprovement/Functionalimprovement";
import { UserContext } from "@/context/UserContext";
import { SSRProvider } from "react-bootstrap";

function FunctionalImprovement({ data }) {
  return (
    <SSRProvider>
      <UserContext.Provider value={data}>
        <FuncImprovement />
      </UserContext.Provider>
    </SSRProvider>
  );
}

export async function getServerSideProps({ params, req }) {
  // Fetch data from API with absolute URL
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/patient?id=${params.id}`,
    {
      method: "GET",
      credentials: "same-origin",
      headers: {
        Cookie: req.headers.cookie,
      },
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

export default FunctionalImprovement;

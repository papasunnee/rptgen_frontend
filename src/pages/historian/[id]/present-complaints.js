import React from "react";
import { UserContext } from "@/context/UserContext";
import { SSRProvider } from "react-bootstrap";
import Index from "@/components/Present-Complaints/Index";

function PresentComplaintsPage({ data }) {
  return (
    <SSRProvider>
      <UserContext.Provider value={data}>
        <Index />
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

export default PresentComplaintsPage;

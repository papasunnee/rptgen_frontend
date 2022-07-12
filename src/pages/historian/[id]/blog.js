import React from "react";

// posts will be populated at build time by getStaticProps()
function Blog({ data }) {
  console.log(data);
  return (
    <ul>
      <li>{data._id}</li>
    </ul>
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
  // Pass data to the page via props
}
export default Blog;

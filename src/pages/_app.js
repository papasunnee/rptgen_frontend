import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

import { useEffect, useCallback } from "react";
import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;

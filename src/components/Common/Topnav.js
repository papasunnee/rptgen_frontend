import { useAuth } from "@/hooks__/auth";
import Link from "next/link";
import frame34Styles from "./Topnav.module.scss";

function Topnav() {
  const { user } = useAuth({ middleware: "auth" });
  return (
    <>
      <span className={`${frame34Styles.Navbar} navbar-expand-lg`}>
        <div className={`${frame34Styles.Containerfluid} container-fluid`}>
          <Link href="/dashboard/home">
            <a className={`${frame34Styles.Navbarbrand} `}>Overview</a>
          </Link>
          <button
            className={`navbar-toggler`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon`}></span>
          </button>

          <div
            className={`${frame34Styles.Navcollapse} collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            {/* <form className={`${frame34Styles.Btnflex} d-flex`}>
              <button
                className={`${frame34Styles.Btn} btn-outline-success`}
                type="submit"
              >
                Hi {user?.name}
              </button>
            </form> */}
            <div className={`${frame34Styles.Btn}`}>Hi {user?.name}</div>
          </div>
        </div>
      </span>
    </>
  );
}

export default Topnav;

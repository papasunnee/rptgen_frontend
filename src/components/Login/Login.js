import React, { useEffect, Fragment, useState, useContext } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import loginimg from "@/images/login.png";
import logoimg from "@/images/logo.png";
import loginStyles from "./Login.module.scss";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import AuthValidationErrors from "../utils/AuthValidationErrors";

function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors([]);
    const { data } = await login({
      email,
      password,
      setErrors,
      setStatus,
    });

    if (data?.error) {
      setErrors([...errors, data.error]);
    }
    if (data.accessToken) {
      return router.replace("/option-select");
    }

    setPassword("***********************************");
    setLoading(false);
  };

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <Fragment>
      <div
        className={`${loginStyles.Login} container-fluid row justify-content-around`}
        style={{ padding: 0 }}
      >
        <div
          className={`${loginStyles.Image} col-lg-7 col-md-4 d-lg-block d-none`}
        >
          <Image src={loginimg} alt="login-img" />
        </div>

        <div className={`${loginStyles.Formsection} col-lg-5 col-md-12`}>
          <div className={`${loginStyles.Formcon} col-md-12`}>
            <div className={`${loginStyles.Logo}`}>
              <Image src={logoimg} alt="logo-img" />
            </div>
            <form onSubmit={submitForm} className={`col-md-8`}>
              <AuthValidationErrors errors={errors} />
              <h5>Login</h5>
              <input
                type="email"
                placeholder="Full Name"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className={`${loginStyles.Button}`}>
                <button type="submit" disabled={loading}>
                  {loading ? "Please Wait..." : "Login"}
                </button>
              </div>

              <div className={`${loginStyles.Signuplink}`}>
                <p>
                  {"Don't have an account?"} <a href="login">Sign Up</a>
                </p>
              </div>
            </form>
          </div>

          <div className={`${loginStyles.Copyright}`}>
            <p>RPTGen All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;

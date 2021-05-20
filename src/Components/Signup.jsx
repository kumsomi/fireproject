import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import fire from "../Firebase";
import UserStore from "../Store";

function Signup() {
  const { userData, setUserData } = useContext(UserStore);
  const [loading, setLoading] = useState(false);

  const signUpHandler = async () => {
    setLoading(true);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      setLoading(false);
      return;
    }

    try {
      const userCredentials = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await userCredentials.user.sendEmailVerification();

      swal(
        "Please verify your email.",
        "A verification link has been sent to your registered email.",
        "success"
      );
      setLoading(false);
      setUserData({
        ...userData,
        auth: true,
        data: userCredentials.user,
      });
    } catch (error) {
      setLoading(false);
      swal(error.message, "", "error");
      console.log(error.message);
    }
  };
  return (
    <div className="shadow-sm mb-5 bg-body rounded">
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password*
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-text mb-3">
            *Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={signUpHandler}
          >
            Sign Up{" "}
            {loading ? (
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              ""
            )}
          </button>
          <span className="form-text mx-4">
            Already have account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signup;

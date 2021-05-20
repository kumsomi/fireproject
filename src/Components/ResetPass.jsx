import React from "react";
import { Link } from "react-router-dom";

function ResetPass() {
  return (
    <div className="shadow-sm mb-5 bg-body rounded">
      <div className="card">
        <div className="card-header">Reset your password here</div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" className="btn btn-warning">
            Reset Password
          </button>
          <span className="form-text mx-4">
            Don't have account? <Link to="/">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;

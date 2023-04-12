import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-centre align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p>Sorry! This page does not exist</p>
      <Link to="/" className="btn btn-primary">
        Go Back
      </Link>
    </div>
  );
}

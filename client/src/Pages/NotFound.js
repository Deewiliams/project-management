import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const NotFound = () => {
  return (
    <div style={{ marginTop: 100, textAlign: "center" }}>
      <div>
        <h1>404</h1>
        <h1>Page not found</h1>
      </div>
      <Link to="/">
        <Button variant="contained" color="primary">
          <ArrowBackIcon />
          Go Back
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;

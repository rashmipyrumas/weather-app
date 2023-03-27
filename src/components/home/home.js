import React, { useState } from "react";
import "./home.css";
import Button from "@material-ui/core/Button";

export default function Home(props) {

  const fetchInfo = () => {

  };

  return (
    <div className="page-style">
      <input
        type="text"
        onChange={fetchInfo()}
        placeholder={"Enter Some text"}
        style={{height:"40px", width:"40%"}}
      />
      <div className="footer-style">
      <Button
        variant="contained"
        color="primary"
        //onClick={}
      >
        Submit
      </Button>
      </div>
    </div>
  );
}

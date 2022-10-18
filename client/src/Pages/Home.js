import React from "react";
import Project from "../Component/Project/Index";
import Add from "../Component/add/Index";
import AddProject from "../Component/AddProject/Index";
import Clients from "../Component/client/Index";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <div>
        <br />
        <div style={{ marginTop: 80 }}>
          <Project />
        </div>
        <br />
        <hr />
        <br />
        <Clients />
      </div>
    </Container>
  );
};

export default Home;

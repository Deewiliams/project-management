import React from "react";
import Project from "../Component/Project/Index";
import Clients from "../Component/client/Index";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <div>
        <div style={{ marginTop: 100 }}>
          <Project />
        </div>
        <br />
        <hr />
        <Clients />
      </div>
    </Container>
  );
};

export default Home;

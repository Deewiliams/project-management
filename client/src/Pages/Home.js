import React from "react";
import Project from "../Component/Project/Index";
import Add from "../Component/add/Index";
import Clients from "../Component/client/Index";

const Home = () => {
  return (
    <div>
      <Add />
      <hr />
      <Project />
      <hr />
      <br />
      <Clients />
    </div>
  );
};

export default Home;

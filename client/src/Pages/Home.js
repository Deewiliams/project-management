import React from "react";
import Project from "../Component/Project/Index";
import Add from "../Component/add/Index";
import AddProject from "../Component/AddProject/Index"
import Clients from "../Component/client/Index";

const Home = () => {
  return (
    <div>
      <Add />
      <AddProject />
      <hr />
      <Project />
      <hr />
      <br />
      <Clients />
    </div>
  );
};

export default Home;

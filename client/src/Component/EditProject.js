import React, { useState } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { GET_PROJECT } from "../queries/projectQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { useMutation } from "@apollo/client";

const EditProject = ({ project }) => {
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [status, setStatus] = useState("");

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: { id: project.id, name, description, status },
    refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      alert("please fill in all the feilds");
    }

    updateProject(name, description, status);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Typography variant="h5" style={{alignItems: "start"}}>
          Update info
        </Typography>
        <Grid item xs={12}>
          <TextField
            id="outlined-name-input"
            label="Project name"
            type="text"
            variant="outlined"
            placeholder="Project name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-name-input"
            label="Description"
            type="text"
            variant="outlined"
            placeholder="Project description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              status
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="new">Not Started</MenuItem>
              <MenuItem value="progress">In progress</MenuItem>
              <MenuItem value="completed">completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>Update</Button>
      </Grid>
    </div>
  );
};

export default EditProject;

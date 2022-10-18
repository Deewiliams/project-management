import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../../queries/projectQueries";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ADD_PROJECT } from "../../mutations/projectMutations";
import { makeStyles } from "@material-ui/core/styles";
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Index = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("new");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, clientId, status },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({
        query: GET_PROJECTS,
      });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: [...projects, addProject],
        },
      });
    },
  });

  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return null;
  if (error) return <p>Error </p>;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || description === "" || status === "") {
      alert("please fill in all the feilds");
    }
    console.log(name, description, status, clientId);
    addProject(name, description, status, clientId);
    setName("");
    setDescription("");
    setStatus("new");
  };

  return (
    <>
      <>
        <div>
          <Button style={{color: 'white'}} variant="contained" color="primary" onClick={handleClickOpen}>
            <ListIcon />
            Add projects
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
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
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
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
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Select Client
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="clientId"
                      value={clientId}
                      onChange={(e) => setClientId(e.target.value)}
                      label=" Select Client"
                    >
                      <MenuItem value={clientId}>Select Client</MenuItem>
                      {data.clients.map((client) => (
                          <MenuItem value={client.id} key={client.id} id={client.id}>
                            {client.name}
                          </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                data-bs-dismiss="DialogContent"
                onClick={handleSubmit}
                type="submit"
                color="primary"
              >
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </>
    </>
  );
};

export default Index;

import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useMutation } from "@apollo/client";
import { ADD_CLIENT } from "../../mutations/clientMutations";
import { GET_CLIENTS } from "../../queries/clientQueries";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const Index = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    // refetchQueries: [{query: GET_CLIENTS}],
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({
        query: GET_CLIENTS,
      });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...clients, addClient],
        },
      });
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("please fill in all the feilds");
    }
    addClient(name, email, phone);
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <Button
        style={{ color: "white" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        <AccountBoxIcon />
        Add client
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add client</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-name-input"
                label="Full name"
                type="text"
                variant="outlined"
                placeholder="Full name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-email-input"
                label="email"
                type="email"
                placeholder="Enter email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-phone-input"
                label="Phone number"
                type="number"
                placeholder="Mobile number"
                variant="outlined"
                fullWidth
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={
              handleSubmit
              // setTimeout(() => {
              //   handleClose();
              // }, 1000);
            }
            type="submit"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Index;

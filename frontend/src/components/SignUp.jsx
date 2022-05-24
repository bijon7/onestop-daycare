import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

// values that start
const defaultValues = {
  name: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  password: "",
  acctType: "",
  phoneNumber: ""
};

export default function SignUp(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState(defaultValues);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDialogSubmit = () => {
    handleSubmit()
    handleClose();
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    axios.post('http://localhost:8080/api/users/signup', { ...formValues })
      .then(
        response => {
          if (formValues.acctType === "guardian") {
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/guardian")
          } else {
            localStorage.setItem("user", JSON.stringify(response.data))
            navigate("/admin")
          }
        })
      .catch(err => console.log("error returning data"))
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        CREATE AN ACCOUNT
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent align="center">
          <DialogContentText>
            Please fill out the following:
          </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="full-name"
                name="name"
                label="Full Name"
                type="text"
                value={formValues.name}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                name="email"
                label="E-Mail"
                type="email"
                value={formValues.email}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="street-address"
                name="address"
                label="Street Address"
                type="text"
                value={formValues.address}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="home-city"
                name="city"
                label="City"
                type="text"
                value={formValues.city}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="postal-code"
                name="postalCode"
                label="Postal Code"
                type="text"
                value={formValues.postalCode}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone-number"
                name="phoneNumber"
                label="Phone Number"
                type="text"
                value={formValues.phoneNumber}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <TextField
                autoFocus
                margin="dense"
                id="create-password"
                name="password"
                label="Password"
                type="password"
                value={formValues.password}
                onChange={handleInputChange}
                fullWidth
                variant="standard"
              />
              <FormControl>
                <FormLabel>Choose an Account Type</FormLabel>
                <RadioGroup
                  name="acctType"
                  value={formValues.acctType}
                  onChange={handleInputChange}
                  row
                >
                  <FormControlLabel
                    key="guardian"
                    value="guardian"
                    control={<Radio size="small" />}
                    label="I am a Guardian"
                  />
                  <FormControlLabel
                    key="daycare"
                    value="daycare"
                    control={<Radio size="small" />}
                    label="I am a Daycare Administrator"
                  />
                </RadioGroup>
              </FormControl>
              <br />
            <Button onClick={handleSubmit} variant="contained" color="primary" type="submit">
              Submit
            </Button>
        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  );
}

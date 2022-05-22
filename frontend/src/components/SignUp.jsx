import * as React from "react";
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
  Box,
  Grid,
  Select,
  MenuItem,
  Slider
} from "@mui/material";

// values that start
const defaultValues = {
  name: "",
  email: "",
  streetAddress: "",
  city: "",
  postalCode: "",
  password: "",
  accountType: ""
};

export default function SignUp(props) {
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
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        CREATE AN ACCOUNT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the following to create a profile for your child:
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <Grid container alignItems="center" justify="center" direction="column">
              <Grid item>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  name="name"
                  label="Name"
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
                <Grid item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="street-address"
                    name="streetAddress"
                    label="Street Address"
                    type="address"
                    value={formValues.streetAddress}
                    onChange={handleInputChange}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="city"
                    name="city"
                    label="City"
                    type="city"
                    value={formValues.city}
                    onChange={handleInputChange}
                    fullWidth
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="postal-code"
                    name="postalCode"
                    label="Postal Code"
                    type="postalcode"
                    value={formValues.postalCode}
                    onChange={handleInputChange}
                    fullWidth
                    variant="standard"
                  />
                  </Grid>
                  <Grid item>
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
                </Grid>
                <FormControl>
                  <FormLabel>Choose an Account Type</FormLabel>
                  <RadioGroup
                    name="accountType"
                    value={formValues.accountType}
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
                      label="I am Daycare Administration"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

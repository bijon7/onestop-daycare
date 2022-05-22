import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

const defaultValues = {
  name: "",
  age: 0,
  special_req: "",
  guardian_id: 0
};

export default function AddChild(props) {
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
        Add Child Profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Child</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill out the following to create a profile for your child:
          </DialogContentText>
          <form onSubmit={handleSubmit}>
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
              id="age"
              name="age"
              label="Age"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
              InputProps={{ inputProps: { min: 0, max: 7 } }}
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="special_req"
              label="Enter Special Requirements"
              type="text"
              value={formValues.special_req}
              onChange={handleInputChange}
              fullWidth
              variant="standard"
            />
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

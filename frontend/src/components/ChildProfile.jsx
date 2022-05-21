import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ChildProfile.scss"

// hardcoded data mimicking axios call for to guardian database
const testData = {
  guardian: [
    {
      id: 1,
      name: "Allen Miller",
      phone: "555 555 5555",
      email: "allen.miller@email.com",
      child: [1, 2]
    }
  ]
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ChildProfile(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // currently looking through hardcoded testData to look for "user"
  const guardian = testData.guardian.find(({ id }) => id === props.user)

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {props.name}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.name}
        </BootstrapDialogTitle>
        <DialogContent dividers className="child_profile">
          <h3>Age: {props.age}</h3>
          <h3>Special Requirements:</h3>
          <p>{props.special_req}</p>
          <h3>Parent Contact: {guardian.name}</h3>
          <p>e-mail: {guardian.email}</p>
          <p>phone: {guardian.phone}</p>
        </DialogContent>

      </BootstrapDialog>
    </div>
  )

}

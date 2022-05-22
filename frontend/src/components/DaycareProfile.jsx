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

// hardcoded data mimicking axios call to daycare_profiles database
const testData = {
  daycare_profiles: [
    {
      id: 1,
      daycare_id: 1,
      max_capacity: 15,
      bio: "This is an amazing daycare!",
      picture: "images/favicon.ico",
      daycare_name: "Number One Daycare",
      age_group: "0-6"
    },
    {
      id: 2,
      daycare_id: 2,
      max_capacity: 25,
      bio: "A good enough spot for your kids!",
      picture: "images/favicon.ico",
      daycare_name: "The Second Greatest Daycare",
      age_group: "3-5"
    },
    {
      id: 3,
      daycare_id: 3,
      max_capacity: 10,
      bio: "Please choose use!",
      picture: "images/favicon.ico",
      daycare_name: "Third Perfect Daycare",
      age_group: "1-3"
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

export default function DaycareProfile(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // currently looking through hardcoded testData to look for "user"
  const daycare = testData.daycare_profiles.find((data) => data.daycare_id === props.daycare)

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {daycare.daycare_name}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {daycare.daycare_name}
        </BootstrapDialogTitle>
        <DialogContent dividers className="daycare_profile">
          <img src={daycare.picture} alt="Daycare Front" />
          <h3>Address</h3>
          {/* Need to connect via foreign key to daycares database for the address, hardcoded for now */}
          <p>1111 Main Street</p>
          <p>Toronto</p>
          <p>A1A 1A1</p>
          <h3>Who We Are:</h3>
          <p>{daycare.bio}</p>
          <h3>Age Group We Cater To: {daycare.age_group}</h3>
          <h3>How Many Kids We Take in: {daycare.max_capacity}</h3>
          <footer>
            <sub>Thank you for checking us out!</sub>
          </footer>
        </DialogContent>

      </BootstrapDialog>
    </div>
  )

}

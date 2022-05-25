import { Paper, Typography } from "@mui/material"
import "./GuardianDashboard.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ChildProfileList from "../components/ChildProfileList";
import ShortList from "../components/ShortList";
import DayCareSearch from "../components/DayCareSearch";


export default function GuardianDashboard() {
  const userName = JSON.parse(localStorage.getItem("user")).user.name;
  return (
    <div className="guardian-dashboard">
      <div className="guardian-dashboard_title">
        <Typography variant="button">
          Welcome, {userName}
        </Typography>
      </div>
      <div className="guardian-dashboard_main">
        <div className="guardian-dashboard_sections">
          <div className="guardian-dashboard_mid">
            <Paper elevation={24} className="guardian-dashboard_mid">
              <h1>Search Our Daycares</h1>
              <sub>Query through cities across Canada to find a daycare near you!</sub>
              <br />
              <br />
              <DayCareSearch />
            </Paper>
          </div>
          <div className="guardian-dashboard_mid">
            <Paper elevation={24} fullHeight className="guardian-dashboard_mid">
              <h1>My Children</h1>
              <ChildProfileList />
            </Paper>
          </div>
        </div>
        <Paper elevation={24} className="guardian-dashboard_col">
          <h1>Short List</h1>
          <ShortList />
        </Paper>
        <Paper elevation={24} className="guardian-dashboard_col">
          <h1>Applications</h1>
        </Paper>
      </div>
    </div>
  );
};

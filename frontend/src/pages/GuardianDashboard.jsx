import { Paper } from "@mui/material"
import "./GuardianDashboard.scss";

import ChildProfileList from "../components/ChildProfileList";
import ShortList from "../components/ShortList";
import DayCareSearch from "../components/DayCareSearch";

export default function GuardianDashboard() {
  return (
    <div className="guardian-dashboard">
      <div className="guardian-dashboard_sections">
        <Paper elevation={24} className="guardian-dashboard_mid">
          <h1>Search Our Daycares</h1>
          <sub>Query through cities across Canada to find a daycare near you!</sub>
          <br />
          <br />
          <DayCareSearch />
        </Paper>
        <Paper elevation={24} className="guardian-dashboard_mid">
          <h1>My Children</h1>
          <ChildProfileList />
        </Paper>
      </div>
      <Paper elevation={24} className="guardian-dashboard_col">
        <h1>Short List</h1>
        <ShortList />
      </Paper>
      <Paper elevation={24} className="guardian-dashboard_col">
        <h1>Applications</h1>
      </Paper>
    </div>
  );
};

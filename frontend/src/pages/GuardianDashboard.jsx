import { Paper } from "@mui/material"
import "./GuardianDashboard.scss";

export default function GuardianDashboard() {
  return (
    <div className="guardian-dashboard">
      <div className="guardian-dashboard_sections">
        <Paper className="guardian-dashboard_mid">
          <h1>Search Our Daycares</h1>
        </Paper>
        <Paper className="guardian-dashboard_mid">
          <h1>My Children</h1>
        </Paper>
      </div>
      <Paper className="guardian-dashboard_col">
        <h1>Short List</h1>
      </Paper>
      <Paper className="guardian-dashboard_col">
        <h1>Applications</h1>
      </Paper>
    </div>
  );
};

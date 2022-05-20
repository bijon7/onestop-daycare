import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="daycare-name">
        <h2>Daycare Name</h2>
      </div>
      <div className="dashboard">
        <div className="left">
          <div className="new-application">
            <h3>New Applications</h3>
            <div className="application1">
              <p>Application</p>
            </div>
            <div className="application2">
            <p>Application</p>
            </div>
          </div>
          <div className="requirements-amenities">
            <h3>Requirements and Amenities</h3>
          </div>
        </div>
        <div className="right">
          <div className="monthly-schedule">
            <h3>Monthly Schedule</h3>
            <div className="months">
              <div className="jan">
                <h4>JAN</h4>
              </div>
              <div className="feb">
                <h4>FEB</h4>
              </div>
              <div className="mar">
                <h4>MAR</h4>
              </div>
              <div className="apr">
                <h4>APR</h4>
              </div>
              <div className="may">
                <h4>MAY</h4>
              </div>
              <div className="jun">
                <h4>JUN</h4>
              </div>
              <div className="jul">
                <h4>JUL</h4>
              </div>
              <div className="aug">
                <h4>AUG</h4>
              </div>
              <div className="sep">
                <h4>SEP</h4>
              </div>
              <div className="oct">
                <h4>OCT</h4>
              </div>
              <div className="nov">
                <h4>NOV</h4>
              </div>
              <div className="dec">
                <h4>DEC</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

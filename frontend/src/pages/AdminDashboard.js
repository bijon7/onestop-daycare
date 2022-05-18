import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="left">
        <div className="review-section">
          <h2>Review Section</h2>
        </div>
        <div className="new-application">
          <h2>New Applications</h2>
        </div>
        <div className="requirements-amenities">
          <h2>Requirements and Amenities</h2>
        </div>
      </div>
      <div className="right">
        <div className="monthly-schedule">
          <h2>Monthly Schedule</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

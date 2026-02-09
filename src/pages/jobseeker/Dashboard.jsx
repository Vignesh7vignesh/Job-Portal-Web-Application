import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Job Seeker Dashboard</h2>
      <p>Welcome to your dashboard</p>

      <ul>
        <li><Link to="/jobseeker/profile">My Profile</Link></li>
        <li><Link to="/jobs">Search Jobs</Link></li>
        <li><Link to="/jobseeker/applications">My Applications</Link></li>
      </ul>
    </div>
  );
}

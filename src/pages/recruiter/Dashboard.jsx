import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Recruiter Dashboard</h2>
      <p>Manage job postings and applications</p>

      <ul>
        <li><Link to="/recruiter/post-job">Post New Job</Link></li>
        <li><Link to="/recruiter/manage-jobs">Manage Jobs</Link></li>
        <li><Link to="/recruiter/applications">View Applications</Link></li>
      </ul>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function SearchJobs() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Available Jobs</h2>

      <div>
        <h4>Frontend Developer</h4>
        <p>Skills: React, JS</p>
        <Link to="/jobseeker/apply">Apply</Link>
      </div>
    </div>
  );
}

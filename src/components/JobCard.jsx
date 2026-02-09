import { useState } from "react";

export default function JobCard({ job }) {
  const [message, setMessage] = useState("");

  const handleApply = () => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      setMessage("❌ Please login to apply");
      return;
    }

    let appliedJobs =
      JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (appliedJobs.includes(job.id)) {
      setMessage("⚠️ You already applied");
      return;
    }

    appliedJobs.push(job.id);
    localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));

    setMessage("✅ Applied successfully");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px" }}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>

      <button onClick={handleApply}>Apply</button>

      {message && <p>{message}</p>}
    </div>
  );
}

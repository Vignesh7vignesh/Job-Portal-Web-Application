import { useState } from "react";

export default function PostJob() {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // handle input change
  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  // handle post job
  const handlePostJob = () => {
    const { title, company, location, salary, description } = jobData;

    // validation
    if (!title || !company || !location || !salary || !description) {
      setError("❌ Please fill all required fields");
      setMessage("");
      return;
    }

    // save job (demo purpose)
    let postedJobs =
      JSON.parse(localStorage.getItem("postedJobs")) || [];

    postedJobs.push(jobData);
    localStorage.setItem("postedJobs", JSON.stringify(postedJobs));

    // success
    setMessage("✅ Job posted successfully");
    setError("");

    // clear form
    setJobData({
      title: "",
      company: "",
      location: "",
      salary: "",
      description: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Post a Job</h2>

      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={jobData.title}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        value={jobData.company}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={jobData.location}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="salary"
        placeholder="Salary"
        value={jobData.salary}
        onChange={handleChange}
        style={styles.input}
      />

      <textarea
        name="description"
        placeholder="Job Description"
        value={jobData.description}
        onChange={handleChange}
        style={styles.textarea}
      />

      <button onClick={handlePostJob} style={styles.button}>
        Post Job
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    height: "80px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  success: {
    color: "green",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
  },
};

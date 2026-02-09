import { useState } from "react";

export default function ApplyJob() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    resume: "",
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle apply submit
  const handleApply = () => {
    const { fullname, email, mobile, resume } = formData;

    // validation
    if (!fullname || !email || !mobile || !resume) {
      setMessage("❌ Please fill all fields");
      return;
    }

    // save application (demo purpose)
    let applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    applications.push(formData);
    localStorage.setItem("applications", JSON.stringify(applications));

    // success message
    setMessage("✅ Applied successfully");

    // clear form
    setFormData({
      fullname: "",
      email: "",
      mobile: "",
      resume: "",
    });
  };

  return (
    <div style={styles.container}>
      <h2>Apply for Job</h2>

      {message && <p style={styles.message}>{message}</p>}

      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="resume"
        placeholder="Resume Link"
        value={formData.resume}
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={handleApply} style={styles.button}>
        Apply
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
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
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  message: {
    textAlign: "center",
    marginBottom: "10px",
    fontWeight: "bold",
  },
};

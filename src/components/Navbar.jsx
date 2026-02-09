import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      
      {/* LEFT SIDE */}
      <div style={styles.left}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/jobs" style={styles.link}>Jobs</Link>
        <Link to="/jobseeker/dashboard" style={styles.link}>Dashboard</Link>
        <Link to="/recruiter/dashboard" style={styles.link}>Recruiter</Link>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.right}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/logout" style={styles.link}>Logout</Link>
      </div>

    </div>
  );
}

const styles = {
  nav: {
    backgroundColor: "#0f172a",
    padding: "14px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    display: "flex",
    gap: "18px",
  },
  right: {
    display: "flex",
    gap: "18px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
  },
};

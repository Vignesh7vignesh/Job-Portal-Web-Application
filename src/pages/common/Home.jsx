export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Job Portal Web Application</h1>
      <p style={styles.subtitle}>
        Find jobs. Hire talent. All in one place.
      </p>

      <div style={styles.cards}>
        <div style={styles.card}>
          <h3>Job Seeker</h3>
          <p>Search and apply for jobs easily.</p>
        </div>

        <div style={styles.card}>
          <h3>Recruiter</h3>
          <p>Post jobs and manage applications.</p>
        </div>

        <div style={styles.card}>
          <h3>Admin</h3>
          <p>Monitor users and job activities.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "200px",
    borderRadius: "8px",
  },
};

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser =
      JSON.parse(localStorage.getItem("loggedInUser"));
    setUser(loggedUser);
  }, []);

  if (!user) {
    return <p style={{ textAlign: "center" }}>No user data found</p>;
  }

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>

      <p><strong>Full Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Mobile:</strong> {user.mobile}</p>
      <p><strong>Role:</strong> {user.role}</p>
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
};

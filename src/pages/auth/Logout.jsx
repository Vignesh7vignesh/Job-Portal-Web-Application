import { useEffect, useState } from "react";

export default function Logout() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "true") {
      localStorage.removeItem("loggedIn");
      setMessage("✅ Logout successful");
    } else {
      setMessage("❌ You are not logged in");
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2>{message}</h2>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
};

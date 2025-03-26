// src/components/Dashboard.js
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
      <p>Role: {user.role}</p>
      <button onClick={() => { logout(); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;

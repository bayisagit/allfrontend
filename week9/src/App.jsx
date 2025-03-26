// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./components/login.jsx";
import Dashboard from "./components/dashboard.jsx";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
          <p>hello world</p>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

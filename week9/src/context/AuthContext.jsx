// src/context/AuthContext.js
import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });
      setUser({ email, token: response.data.token, role: email === "eve.holt@reqres.in" ? "admin" : "user" });
      localStorage.setItem("user", JSON.stringify({ email, token: response.data.token }));
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

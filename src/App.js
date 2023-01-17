import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// eslint-disable-next-line
import PrivateRoute from "./PrivateRoute";
import './index.css';
import './App.css';


import Home from "./pages/home/Home"
import './App.css';
import Error from "./pages/error/error";
import { decrypt, encrypt } from "./encryption";
import SignUp from "./pages/signup";
import SignUpOTP from "./pages/signupOTP";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login";



function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthProvider>
      <Router>
          <Routes>

            <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirm" element={<SignUpOTP />} />
            <Route path="*" element={<Error />}></Route>
          </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

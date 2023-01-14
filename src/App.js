import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { AuthProvider } from "./contexts/AuthContext";
// eslint-disable-next-line
import PrivateRoute from "./PrivateRoute";
import './index.css';
import './App.css';


import Home from "./pages/home/Home"
import './App.css';
import Error from "./pages/error/error";
import { decrypt, encrypt } from "./encryption";



function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Router>
        {/* <AuthProvider> */}
          <Routes>

            {/* <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    < CustomerJourney />
                  </PrivateRoute>
                }
              /> */}

            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />}></Route>
          </Routes>
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;

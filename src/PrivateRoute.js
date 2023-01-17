import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Hub } from 'aws-amplify';
import { useAuth } from "./contexts/AuthContext";


export default function PrivateRoute({ children }) {
  const {currentUser} = useAuth()

  return currentUser ? children : <Navigate to="/signup" />;
}
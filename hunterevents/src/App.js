import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/homepage";
import Form from "./pages/form";
import SignIn from "./pages/signin";

import ProtectedRoute from "./components/protectedroute";
import { AuthProvider } from "./components/authcontext";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Redirect root → home */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Routes that include the Layout (Navbar etc.) */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />

            {/* Protected route (only admin can access) */}
            <Route
            path="/form"
            element={
              <ProtectedRoute>
                <Form />
              </ProtectedRoute>
            }
          />

          </Route>

          {/* Routes WITHOUT layout */}
          <Route path="/signin" element={<SignIn />} />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

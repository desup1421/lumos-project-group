import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Expertices from "./pages/Expertices";
import Teams from "./pages/Teams";
import Testimonial from "./pages/Testimonial";
import Articles from "./pages/Articles";
import WhatWeDo from "./pages/WhatWeDo";
import Messages from "./pages/Messages";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormContainers from "./containers/FormContainers";
import FormArticle from "./components/FormArticle";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  /**
   * Function for handle Logout (temporary)
   */
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  /**
   * Function for Protected Route, make unauthenticated user redirect to login page
   * @param {children} element - component for protected route
   * @returns {React.Component} - react component (children) or redirect to login page
   */
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <Router>
        {isAuthenticated && <Sidebar handleLogout={handleLogout} />}
        {/* Margin to make space for the sidebar */}
        <main
          className={`p-4 pt-12 bg-secondary dark:bg-neutral-900 min-h-screen ${
            isAuthenticated && "lg:ml-64"
          }`}
        >
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/form" element={<FormContainers />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <AboutUs />
                </ProtectedRoute>
              }
            />

            <Route
              path="/expertice"
              element={
                <ProtectedRoute>
                  <Expertices />
                </ProtectedRoute>
              }
            />

            <Route
              path="/teams"
              element={
                <ProtectedRoute>
                  <Teams />
                </ProtectedRoute>
              }
            />

            <Route
              path="/testimonial"
              element={
                <ProtectedRoute>
                  <Testimonial />
                </ProtectedRoute>
              }
            />

            <Route path="/articles">
              <Route
                path="/articles"
                element={
                  <ProtectedRoute>
                    <Articles />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/articles/add"
                element={
                  <ProtectedRoute>
                    <FormArticle />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="/what-we-do"
              element={
                <ProtectedRoute>
                  <WhatWeDo />
                </ProtectedRoute>
              }
            />

            <Route
              path="/messages"
              element={
                <ProtectedRoute>
                  <Messages />
                </ProtectedRoute>
              }
            />

            <Route
              path="/portfolio"
              element={
                <ProtectedRoute>
                  <Portfolio />
                </ProtectedRoute>
              }
            />

            <Route
              path="*"
              element={
                <ProtectedRoute>
                  <NotFound />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </>
  );
};

export default App;

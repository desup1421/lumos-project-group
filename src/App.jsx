import React, { useState, useEffect } from "react";
import { ArticleContext } from "./utils/context/ArticleContext";
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
import FormTestimonial from "./components/FormTestimonial";

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [articleRefresh, setArticleRefresh] = useState(false);
  const updateArticleRefresh = () => {
    setArticleRefresh(!articleRefresh);
  };

  const handleSetToken = (newToken) => {
    setToken(newToken);
  };

  // Function for check if user authenticated or not
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  /**
   * Function for handle Logout (temporary)
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  /**
   * Function for Protected Route, make unauthenticated user redirect to login page
   * @param {children} element - component for protected route
   * @returns {React.Component} - react component (children) or redirect to login page
   */
  const ProtectedRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <>
      <Router>
        {token && <Sidebar handleLogout={handleLogout} />}
        {/* Margin to make space for the sidebar */}
        <main
          className={`p-4 pt-12 bg-secondary dark:bg-neutral-900 min-h-screen ${
            token && "lg:ml-64"
          }`}
        >
          <ArticleContext.Provider
            value={{ articleRefresh, updateArticleRefresh }}
          >
            <Routes>
              <Route
                path="/login"
                element={<Login setToken={handleSetToken} />}
              />
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

              {/* TESTIMONIALS START */}
              <Route>
                <Route
                  path="/testimonials"
                  element={
                    <ProtectedRoute>
                      <Testimonial />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/testimonials/add"
                  element={
                    <ProtectedRoute>
                      <FormTestimonial />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/testimonials/edit/:id"
                  element={
                    <ProtectedRoute>
                      <FormTestimonial />
                    </ProtectedRoute>
                  }
                />
              </Route>
              {/* TESTIMONIALS END */}

              <Route>
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
                <Route
                  path="/articles/edit/:slug"
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
          </ArticleContext.Provider>
        </main>
      </Router>
    </>
  );
};

export default App;

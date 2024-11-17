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
import Expertise from "./pages/Expertise";
import Teams from "./pages/Teams";
import Testimonial from "./pages/Testimonial";
import Articles from "./pages/Articles";
import WhatWeDo from "./pages/WhatWeDo";
import Messages from "./pages/Messages";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormArticle from "./components/FormArticle";
import FormAbout from "./components/FormAbout";
import FormExpertise from "./components/FormExpertise";
import FormTeams from "./components/FormTeams";
import FormWhatWeDo from "./components/FormWhatWeDo";

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
              <Route path="/form" element={<FormArticle />} />

              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              <Route>
                <Route
                  path="/about"
                  element={
                    <ProtectedRoute>
                      <AboutUs />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/about/add"
                  element={
                    <ProtectedRoute>
                      <FormAbout />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/about/edit"
                  element={
                    <ProtectedRoute>
                      <FormAbout />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route>
                <Route
                  path="/expertise"
                  element={
                    <ProtectedRoute>
                      <Expertise />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expertise/add"
                  element={
                    <ProtectedRoute>
                      <FormExpertise />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/expertise/edit/:id"
                  element={
                    <ProtectedRoute>
                      <FormExpertise />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route>
                <Route
                  path="/teams"
                  element={
                    <ProtectedRoute>
                      <Teams />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teams/add"
                  element={
                    <ProtectedRoute>
                      <FormTeams />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/teams/edit/:id"
                  element={
                    <ProtectedRoute>
                      <FormTeams />
                    </ProtectedRoute>
                  }
                />
              </Route>

              <Route
                path="/testimonial"
                element={
                  <ProtectedRoute>
                    <Testimonial />
                  </ProtectedRoute>
                }
              />

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

              <Route>
                <Route
                  path="/what-we-do"
                  element={
                    <ProtectedRoute>
                      <WhatWeDo />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/what-we-do/add"
                  element={
                    <ProtectedRoute>
                      <FormWhatWeDo />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/what-we-do/edit/:id"
                  element={
                    <ProtectedRoute>
                      <FormWhatWeDo />
                    </ProtectedRoute>
                  }
                />
              </Route>


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

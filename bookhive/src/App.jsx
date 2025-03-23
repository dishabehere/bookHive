import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import LandingPage from "../src/pages/LandingPage/LandingPage.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import BooksFormPage from "../src/pages/BooksFormPage/BooksFormPage.jsx";
import React, { useState } from "react";
import './App.scss';

function App() {
  // Retrieve auth state from localStorage on initial load
  const [auth, setAuth] = useState(() => {
    return localStorage.getItem("auth") === "true"; // Convert string to boolean
  });

  // Handle login: Update state and store in localStorage
  const handleLogin = () => {
    setAuth(true);
    localStorage.setItem("auth", "true");
    window.location.href = "/Home"; // Redirect after login
  };

  // Handle logout: Reset state and remove from localStorage
  const handleLogout = () => {
    setAuth(false);
    localStorage.setItem("auth", "false");
  };
  return(
    <Router>
      <Header auth={auth} handleLogin={handleLogin} handleLogout={handleLogout}/>
      <Routes>
      <Route path="/" element={<LandingPage  handleLogin={handleLogin} />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/books/add" element={<BooksFormPage />} />
      <Route path="/books/:id/edit" element={<BooksFormPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App

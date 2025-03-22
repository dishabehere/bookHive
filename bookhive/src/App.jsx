import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import LandingPage from "../src/pages/LandingPage/LandingPage.jsx";
import HomePage from "../src/pages/HomePage/HomePage.jsx";
import BooksFormPage from "../src/pages/BooksFormPage/BooksFormPage.jsx";
import './App.scss';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/books/add" element={<BooksFormPage />} />
      <Route path="/books/:id/edit" element={<BooksFormPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App

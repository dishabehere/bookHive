import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import LandingPage from "../src/pages/LandingPage/LandingPage.jsx";
import './App.scss';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<LandingPage />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App

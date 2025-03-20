import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header/Header.jsx";
import './App.scss';

function App() {
  return(
    <Router>
      <Header />
      <Routes>
      {/* <Route path="/" element={<LandingPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
    
  );
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';

function App() {
  return(
    // <Header />
    <Router>
      <Route path="/" element={<LandingPage />} />

    </Router>
    // <Footer />
  );
}

export default App

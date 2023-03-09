import "./App.css";
import Resume from "./Pages/resume";
import Profile from "./Pages/index";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router basename="/isaiah_s_23_portfolio">
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/isaiah_s_23_portfolio" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

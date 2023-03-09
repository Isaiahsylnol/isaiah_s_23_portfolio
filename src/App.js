import "./App.css";
import Resume from "./Pages/resume";
import Profile from "./Pages/index";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Switcher from "./components/toggleDarkMode";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

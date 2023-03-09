import "./App.css";
import Resume from "./Pages/resume";
import Profile from "./Pages/index";
import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Test from "./Pages/test";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path="/" element={<Profile />} />
        <Route exact path="/test" element={<Test />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

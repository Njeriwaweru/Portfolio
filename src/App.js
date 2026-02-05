// src/App.js
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Banner />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
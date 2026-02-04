import Navbar from "./components/Navbar";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className = "min-h-screen bg-primary">
      <Navbar />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;

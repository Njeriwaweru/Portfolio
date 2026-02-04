import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className = "min-h-screen bg-primary">
      <Navbar />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;

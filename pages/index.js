import Navbar from "./Components/Navbar.js";
import About from "./Components/About";
import Projects from "./Components/Projects.js";
import Hoome from "./Components/Hoome.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hoome />
      <About />
      <Projects />
    </div>
  );
}

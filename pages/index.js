import Navbar from "./Components/Navbar.js";
import About from "./Components/About";
import Projects from "./Components/Projects.js";
import Hoome from "./Components/Hoome.js";
import { BsArrowUpCircle } from "react-icons/bs";
import Link from "next/link.js";
import Footer from "./Components/Footer.js";

export default function Home() {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2">
      <div>
        <Footer />
      </div>

      <div>
        {/* <Navbar /> */}
        <Hoome />
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Footer /> */}
        <Link href="#navbar" className="relative text-end ">
          <BsArrowUpCircle className="text-3xl  m-16 fixed bottom-0 right-0 z-50 text-white" />
        </Link>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import WorkProcess from "./components/WorkProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyChooseUs />
      <Projects />
      <WorkProcess />
      <Testimonials />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <Gallery />
        <Reservation />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

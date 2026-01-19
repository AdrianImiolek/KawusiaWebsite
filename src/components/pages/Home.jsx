import About from "../about/About";
import Contact from "../contact/Contact";
import Cookies from "../cookies/Cookies";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";
import Menu from "../menu/Menu";
import Nav from "../nav/Nav.jsx";

export default function Home() {
  return (
      <div className="app">
        <Nav />
        <main>
          <Hero id="home" />
          <About id="about" />
          <Menu id="menu" />
          <Contact id="contact" />
        </main>
        <Footer />
        <Cookies />
      </div>
  );
}

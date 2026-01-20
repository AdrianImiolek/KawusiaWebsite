import Nav from "../nav/Nav";
import "./hero.css";
export default function Hero() {
  return (
    <header className="hero relative min-h-screen">
      <Nav />
      <div className="wrapper  pt-20 md:pt-30 lg:pt-50">
        <h1 className="text-h1 font-black">
          {" "}
          <span className="text-orange">Kawiarnia</span> Kawusia - <br />{" "}
          Najlepsza
          <span className="text-orange"> Kawa</span> w Jeleniej Górze
        </h1>
        <h2 className="text-h2 mt-4 font-bold">
          Najpierw <span className="text-orange">Kawusia</span>. Reszta później.
        </h2>
        <div className="hero-cta-buttons mt-10 flex">
          <a
            href="#menu"
            className="bg-orange text-body border-orange hover:bg-orange-hover hover:border-orange-hover mr-3 rounded-4xl border-2 p-4 duration-300 sm:mr-5 md:mr-10 shadow-md hover:shadow-orange"
          >
            Zobacz Menu
          </a>
          <a
            href="#contact"
            className="text-body hover:text-orange rounded-4xl border-2 p-4 duration-300 hover:border-white hover:bg-white shadow-md hover:shadow-white"
          >
            Odwiedź Nas
          </a>
        </div>
      </div>
    </header>
  );
}

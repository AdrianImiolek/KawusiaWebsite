import Coffees from "./coffees/Coffees.jsx";
import Cakes from "./cakes/Cakes.jsx";

export default function Menu() {
  return (
    <section className="menu overflow-hidden" id="menu">
      <section className="menu-coffee wrapper pt-10 pb-10" id="menu">
        <Coffees />
      </section>
      <section className="menu-cakes bg-white pt-10 pb-10" id="menu">
        <div className="wrapper">
          <Cakes />
        </div>
      </section>
    </section>
  );
}

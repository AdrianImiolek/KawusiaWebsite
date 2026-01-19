import AboutCards from "./AboutCards";

export default function About() {
  const cards = [
    { img: "/presenting-coffee.webp", title: "Wiemy co kupujemy" },
    { img: "/beans.webp", title: "Wybieramy dobre ziarna" },
    { img: "/grinder.webp", title: "Mielimy na świeżo" },
    { img: "/brewing.webp", title: "Tu dzieje się magia" },
    { img: "/preparing.webp", title: "Prawie gotowa" },
    { img: "/serving.webp", title: "No to pijemy" },
  ];

  return (
    <section className="about overflow-hidden bg-white md:pt-10 pb-10" id="about">
      <div className="wrapper">
        <h2 className="about-h2 text-h2 mt-3 mb-3 font-black">
          <span className="text-dark-brown">Kim</span>{" "}
          <span className="text-orange">jesteśmy?</span>
        </h2>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Kawusia powstała z bardzo prostego powodu - po prostu kochamy kawę.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Taką, którą pije się rano w ciszy, taką na szybkie „ogarnięcie dnia” i
          taką, przy której rozmowy same się przeciągają.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Jesteśmy ludźmi, którzy sami chodzili po kawiarniach i zawsze szukali
          tego jednego miejsca, gdzie kawa smakuje dobrze, a atmosfera nie
          zmusza do niczego.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 font-black text-gray-700">
          W końcu stwierdziliśmy: zróbmy to po swojemu.
        </p>

        <div className="about-cards grid md:mt-8 md:mb-8 md:grid-cols-3">
          {cards.slice(0, 3).map(({ img, title }, index) => (
            <AboutCards key={index} img={img} title={title} />
          ))}
        </div>

        <h2 className="about-h2 text-h2 mt-3 mb-3 font-black">
          <span className="text-orange">Skąd bierzemy</span>{" "}
          <span className="text-dark-brown">naszą kawę?</span>
        </h2>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Nie idziemy na skróty. Kawę wybieramy tak, jakbyśmy robili ją dla
          siebie - bo właśnie tak jest.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Współpracujemy z małymi palarniami, które znają swoje ziarna i wiedzą,
          jak wydobyć z nich to, co najlepsze.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          Każda kawa, którą u nas pijesz, to efekt dobrego wyboru, świeżego
          palenia i po prostu miłości do smaku.
        </p>
        <p className="about-text text-body-sm mt-3 mb-3 text-gray-700">
          To kawa, do której chce się wracać. Bez spiny, bez pośpiechu.
        </p>
        <div className="about-cards mt-3 mb-3 grid md:mt-8 md:mb-8 md:grid-cols-3">
          {cards.slice(3, 6).map(({ img, title }, index) => (
            <AboutCards key={index} img={img} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
}

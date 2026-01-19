import CakeCard from "./CakeCard";

export default function Menu() {
  const coffees = [
    {
      title: "Sernik",
      description:
        "Bo czasem trzeba czegoś kremowego. I tak, wszyscy wiemy, że to klasyk, ale kto by się przejmował?",
      img: "/menu-cakes/cheesecake-small.webp",
      price: "18zł",
    },
    {
      title: "Szarlotka",
      description:
        "Jabłka, cynamon i kruchy spód. Jak dom, tylko bez obowiązków.",
      img: "/menu-cakes/apple-pie-small.webp",
      price: "20zł",
    },
    {
      title: "Brownie czekoladowe",
      description:
        "Czekoladowa bomba, która mówi „weź mnie teraz” i nie pyta o zgodę.",
      img: "/menu-cakes/brownie-small.webp",
      price: "29zł",
    },
    {
      title: "Croissant maślany",
      description:
        "Chrupiący, maślany i absolutnie nie próbuj się dzielić. Naprawdę.",
      img: "/menu-cakes/croissant-small.webp",
      price: "25zł",
    },
    {
      title: "Tarta owocowa",
      description:
        "Owocowa, kolorowa i tak lekka, że prawie zapomnisz, że jesz deser. Prawie.",
      img: "/menu-cakes/fruit-tart-small.webp",
      price: "29zł",
    },
    {
      title: "Ciasto dnia",
      description: "Tajemnicze i słodkie - prawie jak Twoja kochanka",
      img: "/menu-cakes/cake-of-the-day-small.webp",
      price: "10zł",
    },
  ];

  return (
    <>
      <h2 className="menu-h2 text-h2 text-darker-brown text-center font-black">
        To co <span className="text-orange">lubimy najbardziej</span>
      </h2>
      <p className="menu-text text-body-sm text-center text-gray-700">
        Bo życie jest za krótkie, żeby mieć wyrzuty sumienia
      </p>
      <div className="coffees mt-5 grid auto-rows-auto grid-cols-1 gap-7 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map(({ title, description, img, price }, index) => (
          <CakeCard
            key={index}
            title={title}
            description={description}
            img={img}
            price={price}
          />
        ))}
      </div>
    </>
  );
}

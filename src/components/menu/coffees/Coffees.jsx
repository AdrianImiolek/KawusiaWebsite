import CoffeeCard from "./CoffeeCard";

export default function Menu() {
  const coffees = [
    {
      title: "Americano",
      description:
        "Lekka, spokojna i do popijania bez pośpiechu. Dobra na dłuższą chwilę przy stoliku.",
      img: "/menu-coffees/americano-small.webp",
      price: "18zł",
    },
    {
      title: "Cappucino",
      description:
        "Kawa z mlekiem w idealnej równowadze. Jak przyjaciel, który zawsze trafia z żartem.",
      img: "/menu-coffees/cappuccino-small.webp",
      price: "20zł",
    },
    {
      title: "Espresso",
      description:
        "Małe, ale wariat - mocne i bez ceregieli. Działa szybciej niż poranny budzik.",
      img: "/menu-coffees/espresso-small.webp",
      price: "29zł",
    },
    {
      title: "Flat White",
      description:
        "Dla tych, którzy lubią kawę z charakterem. Mocna, kremowa i nie do podrobienia.",
      img: "/menu-coffees/flatwhite-small.webp",
      price: "25zł",
    },
    {
      title: "Latte",
      description:
        "Mięciutka, mleczna i przyjazna. Jak uśmiech w filiżance.",
      img: "/menu-coffees/latte-small.webp",
      price: "29zł",
    },
    {
      title: "Lura",
      description: "Bo nie każdy lubi mocną kawę. U nas też możesz pójść na lekkie, wodniste doznania bez oceny.",
      img: "/menu-coffees/lura-small.webp",
      price: "10zł",
    },
  ];

  return (
    <>
      <h2 className="menu-coffe-h2 text-h2 text-center font-black">
        Nasze <span className="text-orange">Kawusie</span>
      </h2>
      <p className="menu-coffe-text text-body-sm text-center">
        Każda filiżanka opowiada historię
      </p>
      <div className="menu-coffees mt-5 grid auto-rows-auto grid-cols-1 gap-7 xl:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map(({ title, description, img, price }, index) => (
          <CoffeeCard
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

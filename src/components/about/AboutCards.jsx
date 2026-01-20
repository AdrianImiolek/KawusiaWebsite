export default function AboutCards({ img, title}) {
  return (
    <div
      className="about-card flex h-40 items-end justify-center rounded-3xl bg-cover bg-center overflow-hidden relative odd:rotate-2 even:-rotate-2 hover:even:-rotate-4 hover:odd:rotate-4 hover:scale-110 duration-300"
      style={{ backgroundImage: `url(${img})`}}
    >
      <div className="about-title-container bg-darker-brown/90 w-full">
        <p className="about-title text-center text-body-lg p-1">{title}</p>
      </div>
    </div>
  );
}

export default function CoffeeCard({ title, description, img, price }) {
  return (
    <div className="menu-coffee-card group relative grid grid-rows-[auto_1fr_auto] rounded-3xl bg-white duration-300 hover:scale-105">
      <div className="image-coffee-card-img-container">
        <img
          className="menu-coffee-card-img h-48 w-full rounded-t-3xl object-cover"
          src={img}
          alt=""
        />
      </div>

      <div className="menu-coffee-card-text p-2">
        <p className="menu-coffee-card-title text-body text-orange p-1 font-black">
          {title}
        </p>
        <p className="menu-coffee-card-description text-body-sm p-3 text-gray-700">
          {description}
        </p>
      </div>

      <div className="menu-coffee-card-price-container bg-darker-brown absolute -right-3 -bottom-5 rounded-xl duration-300 group-hover:rotate-10">
        <p className="menu-coffee-card-price text-orange text-body-lg p-3 text-right font-black">
          {price}
        </p>
      </div>
    </div>
  );
}

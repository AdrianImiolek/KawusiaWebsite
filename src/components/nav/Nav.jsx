import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const links = [
    { name: "O nas", link: "#about" },
    { name: "Menu", link: "#menu" },
    { name: "Kontakt", link: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsHamburgerActive(!isHamburgerActive);
  };

  return (
    <nav className="nav bg-darker-brown/90 md:bg-darker-brown/50 sticky top-0 z-80 md:bg-clip-padding md:backdrop-blur-md md:backdrop-filter">
      <header className="header wrapper grid grid-cols-2">
        <div className="nav-logo max-w-40 self-center">
          <Link to="/" onClick={ () => window.scrollTo({top:0})}>
            <img src="/kawusia-white.png" />
          </Link>
        </div>
        <button
          className="hamburger z-100 cursor-pointer justify-self-end md:hidden"
          onClick={toggleMenu}
        >
          <i
            className={`bx ${isHamburgerActive ? "bx-menu" : "bx-menu-alt-right"} text-4xl`}
          ></i>
        </button>
        <div
          className={`links-mobile-container bg-dark-brown/80 fixed top-0 flex h-full w-full items-center bg-clip-padding backdrop-blur-md backdrop-filter duration-300 ${isOpen ? "left-20" : "left-full"} md:hidden`}
        >
          <ul className="links-mobile">
            {links.map(({ name, link }, index) => (
              <a href={link} key={index}>
                <li
                  className="link-mobile text-body m-3 p-3"
                  onClick={toggleMenu}
                >
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div
          className={`links-desktop-container hidden justify-self-end md:flex`}
        >
          <ul className="links-desktop flex">
            {links.map(({ name, link }, index) => (
              <a href={link} key={index}>
                <li className="link-desktop text-body hover:text-orange-hover p-3 duration-300">
                  {name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </header>
    </nav>
  );
}

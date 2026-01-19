import { useState, useEffect } from "react";

export default function Cookies() {
  const [isConsented, setIsConsented] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "accepted") {
      setIsConsented(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsConsented(true);
  };

  return (
    <>
      {/* Cookie Banner - slides down when accepted */}
      <div
        className={` ${isConsented ? "-bottom-60" : "bottom-0"} cookies-banner bg-darker-brown wrapper fixed left-1/2 z-50 flex w-full -translate-x-1/2 flex-wrap items-center justify-evenly gap-10 rounded-t-3xl p-6 text-sm duration-300`}
      >
        <p className="cookies-banner-text text-white">
          Używamy tylko niezbędnych plików cookie - takich, które pomagają
          stronie działać poprawnie. Zero śledzenia, zero reklam. Tylko
          techniczne ciasteczka, bez kalorii 😉
        </p>
        <button
          className="cookies-banner-button bg-orange hover:bg-orange-hover cursor-pointer rounded-3xl px-6 py-3 whitespace-nowrap text-white transition-colors"
          onClick={acceptCookies}
        >
          Zapoznałem / łam się
        </button>
      </div>

      {/* Cookie icon - appears after accepting */}
      <div
        className={` ${isConsented ? "scale-100" : "scale-0"} cookie-icon bg-darker-brown fixed bottom-5 left-5 z-50 cursor-pointer rounded-full  duration-300 hover:scale-110`}
        onClick={() => setIsConsented(false)}
      >
        <i className="bx bx-cookie p-3 text-4xl text-white"></i>
      </div>
    </>
  );
}

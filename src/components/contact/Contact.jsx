export default function Contact() {
  return (
    <section className="contact wrapper pt-10 pb-10" id="contact">
      <h2 className="text-h2 font-black">
        Odwiedź <span className="text-orange">nas</span>{" "}
      </h2>
      <div className="contact-container grid md:grid-cols-2">
        <div className="contact-text-wrapper">
          <div className="contact-text text-body mt-3 relative hover:translate-x-5 duration-300">
            <p className="contact-phone">
              <i className="bx bx-phone-incoming"></i>
              Zamów i <span className="text-orange">odbierz:</span>
            </p>
            <p className="contact-call">
              Tel:{" "}
              <a href="tel:213987231">
                {" "}
                <span className="text-orange">213987231</span>
              </a>
            </p>
          </div>
          <div className="contact-text text-body mt-3 relative hover:translate-x-5 duration-300">
            <p className="contact-email">
              <i className="bx bx-envelope"></i>
              Napisz do<span className="text-orange"> nas:</span>
            </p>
            <p className="contact-email-send">
              E-mail:{" "}
              <a href="mailto:kontakt@kawusia.pl">
                {" "}
                <span className="text-orange">kontakt@kawusia.pl</span>
              </a>
            </p>
          </div>
          <div className="contact-text text-body mt-3 relative hover:translate-x-5 duration-300">
            <p className="contact-address">
              <i className="bx bx-map-pin"></i>
              Adres<span className="text-orange">:</span>
            </p>
            <p className="contact-location">
              58-500 Jelenia Góra
 
                {" "}
                <span className="text-orange"> Plac Ratuszowy 56</span>
            </p>
          </div>
          <div className="contact-text text-body mt-3 relative hover:translate-x-5 duration-300">
            <p className="contact-address">
              <i className="bx bx-time-five"></i>
              Godziny<span className="text-orange"> otwarcia:</span>
            </p>
            <p className="contact-opening-times">
              Od poniedziałku do{" "}
              <span className="text-orange">
                {" "}
                soboty w godzinach 8:00 - 18:00
              </span>
            </p>
          </div>
        </div>
        <div className="contact-map h-full pt-3">
          <iframe
            className="h-full w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1631.529150468872!2d15.734631348053416!3d50.902222911132554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ede2fe4060449%3A0x5a9067d73cd440d6!2sRynek%20Jeleniog%C3%B3rski!5e0!3m2!1spl!2spl!4v1768204704100!5m2!1spl!2spl"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

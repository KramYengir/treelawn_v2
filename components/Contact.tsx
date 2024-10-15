import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="grid py-24">
      <div className="rm-container text-mucky-50">
        <h2 className="h2 text-apple-700">
          <span className="text-mucky-800">Any Questions?</span>{" "}
          <br className="md:hidden" /> Get In Touch!
        </h2>
        <div className="grid gap-6 w-full text-lg text-center font-medium tracking-wide">
          <div className="flex flex-col gap-4 justify-center min-h-48 py-6 rounded-xl bg-[url('../public/images/trees-forest-sm.jpg')] sm:bg-[url('../public/images/trees-forest.jpg')] bg-cover bg-top">
            <MapPin width={32} height={32} className="mx-auto w-full" />
            <a
              href="https://www.google.com/maps?q=Mountrath+Street,+Kilcormac,+Co.+Offaly"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kilcormac,
              <br /> Co. Offaly,
              <br />
              Ireland
            </a>
          </div>
          <div className="flex flex-col gap-4 justify-center min-h-48 py-6 rounded-xl bg-[url('../public/images/trees-forest-sm.jpg')] sm:bg-[url('../public/images/trees-forest.jpg')] bg-cover bg-center">
            <Phone width={32} height={32} className="mx-auto w-full" />
            <a href="tel:+353892686213">089 2686213</a>
          </div>
          <div className="flex flex-col gap-4 justify-center min-h-48 py-6 rounded-xl bg-[url('../public/images/trees-forest-sm.jpg')] sm:bg-[url('../public/images/trees-forest.jpg')] bg-cover bg-bottom">
            <Mail width={32} height={32} className="mx-auto w-full" />
            <a href="mailto:info@treelawn.com">treelawn24@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

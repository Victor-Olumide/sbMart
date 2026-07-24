import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#f47c31] text-white p-6 flex  flex-col items-center justify-center md:px-24">
      <section className="flex md:flex-row flex-col items-start grid md:grid-cols-4 grid-cols-2 gap-12 justify-between container mx-auto mb-12">
        <div className="bg-white p-2">
          <img src="/trademark.png" alt="Trademark" className="w-25 h-25" />
        </div>

        <div className="flex flex-col">
        <p className="font-bold text-base">Site Map</p>

          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/login">Login</a>
        </div>

        <div className="flex flex-col">
        <p className="font-bold text-base">Company</p>

          <a href="/frequently_asked_questions">FAQ</a>
          <a href="/terms_and_conditions">Terms</a>
          <a href="/privacy_policy">Privacy</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="flex flex-col">
            <p className="font-bold text-base">Join Us</p>
            <div className="flex flex-row gap-4 text-2xl mb-4">
          <a href="/"><FaFacebook /></a>
          <a href="/products"><FaInstagram /></a>
          <a href="/about"><FaLinkedin /></a>
          <a href="/contact"><FaYoutube /></a>
          </div>

          <address>Skillboost Limited,<br/> First Artillery Junction,<br/> Port Harcourt, Rivers State</address>
        </div>
      </section>

      <div className="container mx-auto text-center border-t-2 border-white/50 p-4 ">
        <p>&copy; 2003 - {new Date().getFullYear()} Skillboost Limited. All rights reserved.</p>
      </div>
    </div>
  );
}

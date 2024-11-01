// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import AboutEvent from "./about-event";
import SponsoredBy from "./sponsored-by";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutEvent />
      <SponsoredBy />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </>
  );
}

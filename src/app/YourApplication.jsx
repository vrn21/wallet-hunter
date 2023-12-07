import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavbarR from "./components/NavbarR";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Success from "./components/Success";
import Team from "./components/Team";
import Transition from "./components/Transition";

export default function YourApplication() {
  return (
    <div className="flex flex-col justify-center overflow-x-hidden">
      <NavbarR />
      <HeroSection />
      <AboutUs />
      <Transition />
      <Services />
      <Success />
      <FAQ />
      <Team />
      <Pricing />
      <Brands />
      <Footer />

    </div>
    )
}

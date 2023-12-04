import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import NavbarR from "./components/NavbarR";
import Services from "./components/Services";
import Success from "./components/Success";
import Transition from "./components/Transition";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavbarR />
      <HeroSection />
      <AboutUs />
      <Transition />
      <Services />
      <Success />
      <FAQ />

    </div>
    )
}

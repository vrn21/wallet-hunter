import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import NavbarR from "./components/NavbarR";
import Transition from "./components/Transition";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavbarR />
      <HeroSection />
      <AboutUs />
      <Transition />

    </div>
    )
}

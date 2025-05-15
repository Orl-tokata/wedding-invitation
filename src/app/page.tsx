import { CountdownTimer } from "@/components/CountdownTimer";
import { CoupleSection } from "@/components/CoupleSection";
import { EventSection } from "@/components/EventSection";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LandingPage } from "@/components/LandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <HeroSection />
      <CoupleSection />
      <EventSection />
      <CountdownTimer />
      <GallerySection />
    </main>
  );
}

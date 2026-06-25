import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Parallax from "@/components/sections/Parallax";
import StoryShowcase from "@/components/sections/StoryShowcase";
import WorldCupCallout from "@/components/sections/WorldCupCallout";
import NeonCallout from "@/components/sections/NeonCallout";
import AppScreens from "@/components/sections/AppScreens";
import TrialCallout from "@/components/sections/TrialCallout";
import AgendaFeature from "@/components/sections/AgendaFeature";
import Offer from "@/components/sections/Offer";
import Faq from "@/components/sections/Faq";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteHeader />
      <Hero />
      <About />
      <Parallax />
      <StoryShowcase />
      <WorldCupCallout />
      <NeonCallout />
      <AppScreens />
      <TrialCallout />
      <AgendaFeature />
      <Offer />
      <Faq />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ScrollingTeam from "@/components/sections/ScrollingTeam";
import Inception from "@/components/sections/Inception";
import Mission from "@/components/sections/Mission";
import OurTargets from "@/components/sections/OurTargets";
import KnowledgeHub from "@/components/sections/KnowledgeHub";
import Dismantling from "@/components/sections/Dismantling";
import Ecosystem from "@/components/sections/Ecosystem";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollingTeam />
      <Inception />
      <Mission />
      <OurTargets />
      <KnowledgeHub />
      <Dismantling />
      <Ecosystem />
    </>
  );
}

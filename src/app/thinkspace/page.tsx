import Navbar from "@/components/layout/Navbar";
import ThinkSpaceHero from "@/components/sections/ThinkSpaceHero";
import ContributionSection from "@/components/sections/ContributionSection";
import ThinkSpaceFooter from "@/components/sections/ThinkSpaceFooter";

export default function ThinkSpace() {
    return (
        <>
            <Navbar />
            <ThinkSpaceHero />
            <ContributionSection />
            <ThinkSpaceFooter />
        </>
    );
}

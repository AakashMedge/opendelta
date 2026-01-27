import Navbar from "@/components/layout/Navbar";
import FundingAccessHero from "@/components/sections/FundingAccessHero";
import FundingImageSection from "@/components/sections/FundingImageSection";
import AboutFunding from "@/components/sections/AboutFunding";
import FundingCollaboration from "@/components/sections/FundingCollaboration";
import FAQSection from "@/components/sections/FAQSection";
import MatchLabFooter from "@/components/sections/MatchLabFooter";

export default function FundingAccess() {
    return (
        <>
            <Navbar />
            <main>
                <FundingAccessHero />
                <FundingImageSection />
                <AboutFunding />
                <FundingCollaboration />
                <FAQSection />
                <MatchLabFooter />
            </main>
        </>
    );
}

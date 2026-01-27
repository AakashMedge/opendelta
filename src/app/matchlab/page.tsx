import Navbar from "@/components/layout/Navbar";
import MatchLabHero from "@/components/sections/MatchLabHero";
import MatchLabCollaboration from "@/components/sections/MatchLabCollaboration";
import MatchLabFooter from "@/components/sections/MatchLabFooter";

export default function MatchLab() {
    return (
        <>
            <Navbar />
            <main>
                <MatchLabHero />
                <MatchLabCollaboration />
                <MatchLabFooter />
            </main>
        </>
    );
}

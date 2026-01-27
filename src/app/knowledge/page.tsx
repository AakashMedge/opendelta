import Navbar from "@/components/layout/Navbar";
import KnowledgeHeader from "@/components/sections/KnowledgeHeader";
import MatchLabFooter from "@/components/sections/MatchLabFooter";

export default function Knowledge() {
    return (
        <>
            <Navbar />
            <main>
                <KnowledgeHeader />
                <MatchLabFooter />
            </main>
        </>
    );
}

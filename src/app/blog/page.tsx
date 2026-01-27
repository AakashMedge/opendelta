import Navbar from "@/components/layout/Navbar";
import BlogHero from "@/components/sections/BlogHero";
import BlogList from "@/components/sections/BlogList";
import GetInTouchTicker from "@/components/sections/GetInTouchTicker";
import MatchLabFooter from "@/components/sections/MatchLabFooter";

export default function Blog() {
    return (
        <>
            <Navbar />
            <main>
                <BlogHero />
                <BlogList />
                <GetInTouchTicker />
            </main>
            <MatchLabFooter />
        </>
    );
}

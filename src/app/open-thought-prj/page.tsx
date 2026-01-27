import Navbar from "@/components/layout/Navbar";
import OpenThoughtHero from "@/components/sections/OpenThoughtHero";
import AboutOpenThought from "@/components/sections/AboutOpenThought";
import OpenThoughtProcess from "@/components/sections/OpenThoughtProcess";
import OpenThoughtFooter from "@/components/sections/OpenThoughtFooter";

export default function OpenThoughtPrj() {
    return (
        <>
            <Navbar />
            <main>
                <OpenThoughtHero />
                <AboutOpenThought />
                <OpenThoughtProcess />
                <OpenThoughtFooter />
            </main>
        </>
    );
}

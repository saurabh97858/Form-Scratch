import Hero from "./_components/Hero";
import dynamic from "next/dynamic";

const Features = dynamic(() => import("./_components/Features"), {
    loading: () => <p>Loading...</p>,
});
const Footer = dynamic(() => import("./_components/Footer"), {
    loading: () => <p>Loading...</p>,
});
const Description = dynamic(() => import("./_components/Description"), {
    loading: () => <p>Loading...</p>,
});

export default function Home() {
    return (
        <div>
            <Hero />
            <Description />
            <Features />
            <Footer />
        </div>
    );
}

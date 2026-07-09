import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Courses from "@/components/site/Courses";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Faculty from "@/components/site/Faculty";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";

export default function Home() {
    return (
        <main data-testid="home-page" className="relative">
            <Header />
            <Hero />
            <Courses />
            <WhyChooseUs />
            <Faculty />
            <Gallery />
            <Testimonials />
            <Contact />
            <Footer />
            <WhatsAppFloat />
        </main>
    );
}

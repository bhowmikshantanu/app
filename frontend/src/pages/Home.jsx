import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Courses from "@/components/site/Courses";
import DigitalSolutions from "@/components/site/DigitalSolutions";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Faculty from "@/components/site/Faculty";
import Gallery from "@/components/site/Gallery";
import FeaturedStudent from "@/components/site/FeaturedStudent";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import WhatsAppFloat from "@/components/site/WhatsAppFloat";
import AnnouncementBoard from "@/components/site/AnnouncementBoard";
export default function Home() {
return (
    <main data-testid="home-page" className="relative">
        <Header />
        <AnnouncementBoard />
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Faculty />
        <Gallery />
        <FeaturedStudent />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsAppFloat />
    </main>
);
}

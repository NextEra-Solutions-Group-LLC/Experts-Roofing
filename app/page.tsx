
import About from "./components/About";
import FloatingActions from "./components/Floating";
import GallerySection from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/Process";
import ServicesSection from "./components/Services";
import ServiceArea from "./components/ServicesArea";
import TestimonialsSection from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChoose";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>

      <Hero />
      <About />
      <ServicesSection />
      <ServiceArea />
      <GallerySection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <Contact />
      <FloatingActions />
    </div>
  );
}

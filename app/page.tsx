import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import About from "./components/ui/Sections/About";
import Contact from "./components/ui/Sections/Contact";
import FAQs from "./components/ui/Sections/FAQs";
import Projects from "./components/ui/Sections/Projects";
import Services from "./components/ui/Sections/Services";
import Team from "./components/ui/Sections/Team";
import WhyChooseUs from "./components/ui/Sections/Why";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <WhyChooseUs />
      <FAQs />
      <Contact />
      </main>
      </div>  
      );
}

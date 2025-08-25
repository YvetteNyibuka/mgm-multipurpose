import Hero from "./components/ui/Hero";
import About from "./components/ui/Sections/About";
import Contact from "./components/ui/Sections/Contact";
import Projects from "./components/ui/Sections/Projects";
import Services from "./components/ui/Sections/Services";
import Team from "./components/ui/Sections/Team";
import WhyChooseUs from "./components/ui/Sections/Why";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}

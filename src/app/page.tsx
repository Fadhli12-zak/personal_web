import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Section } from "@/components/Section";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { DotPattern } from "@/components/DotPattern";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <DotPattern />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 md:px-12 print:px-0 print:max-w-none relative z-10 pb-20">
        <ThemeSwitcher />
      {/* Hero Section doesn't use the standard wrapper because of its custom viewport height */}
      <div id="hero">
        <Hero />
      </div>

      <Section id="about">
        <About />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <div id="dark-zone">
        <Section id="projects">
          <Projects />
        </Section>

        <Section id="contact" className="pb-12 print:pb-0">
          <Contact />
        </Section>
      </div>
    </main>
    </>
  );
}

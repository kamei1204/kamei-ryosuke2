import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/20">
      <Head>
        <title>KameiRyosuke</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer ">
          <div className="flex items-center justify-center">
            <img src="/sunny.png" alt="" className="h-12 w-12 rounded-full object-cover filter grayscale hover:grayscale-0" />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
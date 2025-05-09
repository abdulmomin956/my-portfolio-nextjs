'use client'
// import Image from "next/image";
// import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

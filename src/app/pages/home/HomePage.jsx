import React from 'react'
import Hero from "../../component/Hero/Hero";
import About from "../../component/about/About";
import Projects from "../../component/projects/Project";
import Contact from "../../component/contact-me/Contact";
import Header from '../../component/Header/Header';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </>
  )
}

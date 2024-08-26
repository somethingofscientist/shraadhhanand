import React from 'react'
import Hero from "../../component/Hero/Hero";
import About from "../../component/about/About";
import Projects from "../../component/projects/Project";
import Contact from "../../component/contact-me/Contact";
import Header from '../../component/Header/Header';
import styles from './Homepage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

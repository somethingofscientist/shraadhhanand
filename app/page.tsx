import styles from "./page.module.css";
import About from "./src/component/about/About";
import Contact from "./src/component/contact-me/Contact";
import Hero from "./src/component/Hero/Hero";
import Projects from "./src/component/projects/Project";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}

import { useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { SESSION_KEY_INTRO_SEEN } from './common/constants';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

function getHasSeenIntro() {
  const hasSeenIntro = sessionStorage.getItem(SESSION_KEY_INTRO_SEEN) === 'true';

  return hasSeenIntro;
}

export default function App() {
  const [isIntroDone, setIsIntroDone] = useState(getHasSeenIntro);

  function handleIntroComplete() {
    sessionStorage.setItem(SESSION_KEY_INTRO_SEEN, 'true');
    setIsIntroDone(true);
  }

  return (
    <MotionConfig reducedMotion='user'>
      <AnimatePresence>
        {!isIntroDone && <Preloader key='preloader' onComplete={handleIntroComplete} />}
      </AnimatePresence>

      <AnimatedBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navbar isIntroDone={isIntroDone} />

      <main className='relative overflow-x-clip'>
        <Hero isIntroDone={isIntroDone} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </MotionConfig>
  );
}

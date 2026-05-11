import './styles/global.css';

import { personal, stats, skills, experience, projects, education } from './data/resume';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Experience from './components/Experience';
import Projects   from './components/Projects';
import Education  from './components/Education';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar name={personal.name} />
      <main>
        <Hero       personal={personal} stats={stats} />
        <Skills     skills={skills} />
        <Experience experience={experience} />
        <Projects   projects={projects} />
        <Education  education={education} />
        <Contact    personal={personal} />
      </main>
      <Footer personal={personal} />
    </>
  );
}
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'
import Certifications from '../sections/Certifications'
import Contact from '../sections/Contact'

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  )
}

export default Home
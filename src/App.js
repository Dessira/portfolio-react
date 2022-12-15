import Nav from './components/Nav'
import About from './components/About'
import Feedback from './components/Feedback'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
   <>
        <div className='text-gray-400 bg-gray-900'>
            <Nav />
            <About />
            <Skills />
            <Projects />
            <Feedback />

        </div>
   </>
  )
}

export default App
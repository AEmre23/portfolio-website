// Dependencies
import { useState } from 'react'
import { motion as m, AnimatePresence } from 'framer-motion'
// Pages
import Welcome from './pages/Welcome'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function App() {
  const [screen, setScreen] = useState("welcome") // router
  const [homeAnimate, setHomeAnimate] = useState(true)

  return (
    <AnimatePresence>
      <div className="fixed backg-image top-0 left-0 h-screen w-screen bg-cover bg-no-repeat overflow-clip pointer-events-none" />
      {screen === "welcome" &&
        <Welcome
          setScreen={setScreen}
          key={screen}
        />
      }
      {screen === "hero" &&
        <Hero
          key={screen}
          setScreen={setScreen}
          homeAnimate={homeAnimate}
          setHomeAnimate={setHomeAnimate}
        />
      }
      {screen === "about" &&
        <About
          setScreen={setScreen}
          key={screen}
        />
      }
      {screen === "contact" &&
        <Contact
          setScreen={setScreen}
          key={screen}
        />
      }
      {screen === "projects" &&
        <Projects
          setScreen={setScreen}
          key={screen}
        />
      }
    </AnimatePresence>
  )
}
export default App

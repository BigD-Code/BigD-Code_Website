import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Loader } from './components/ui/Loader'
import { Navigation } from './components/ui/Navigation'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ContactSection } from './components/sections/ContactSection'
import { ParticleBackground } from './components/three/ParticleBackground'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <ParticleBackground />
      
      <Navigation />
      
      <main className="relative z-10">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="relative z-10 py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2026 BigD-Code. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with React, Three.js & Love 💚</p>
      </footer>
    </div>
  )
}

export default App

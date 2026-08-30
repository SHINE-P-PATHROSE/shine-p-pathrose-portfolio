import { SpeedInsights } from '@vercel/speed-insights/react'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { ExperienceSection } from './sections/Experience'
import { Projects } from './sections/Projects'
import { MoreProjects } from './sections/MoreProjects'
import { Skills } from './sections/Skills'
import { Architecture } from './sections/Architecture'
import { EducationSection } from './sections/Education'
import { GitHubActivity } from './sections/GitHubActivity'
import { Contact } from './sections/Contact'
import { PortfolioAssistant } from './components/PortfolioAssistant'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="noise-bg grid-bg relative min-h-screen">
      <Navigation theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <Projects />
        <MoreProjects />
        <Skills />
        <Architecture />
        <EducationSection />
        <GitHubActivity />
        <PortfolioAssistant />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default App

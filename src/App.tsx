import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import SelectedWork from './components/sections/SelectedWork'
import WhatIDo from './components/sections/WhatIDo'
import MyProcess from './components/sections/MyProcess'
import Footer from './components/sections/Footer'

function App() {
  return (
    <main className="bg-cream text-ink font-sans">
      <Navbar />
      <Hero />
      <SelectedWork />
      <WhatIDo />
      <MyProcess />
      <Footer />
    </main>
  )
}

export default App
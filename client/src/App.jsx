import { useState } from 'react'

import './App.css'
import Nav from './navbar/Nav'
import About from './about/About'
import Skills from './skills/Skills'
import Projects from './projects/Projects'
import UnderlineText from './components/UnderlineText'
import StickyNote from './components/StickyNote'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Nav />
      <About />
      {/* <UnderlineText /> */}
      <StickyNote />
      <Projects />

    </div>
  )
}

export default App

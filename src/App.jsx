import React from 'react'
import Nav from './components/Nav'
import SideNav from './components/SideNav'
import NavFilter from './components/NavFilter'
import Content from './components/Content'
function App() {
  return (
    <>
      <Nav />
      <NavFilter />
      <SideNav />
      <Content />
    </>
  )
}

export default App
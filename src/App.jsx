import './App.css'
import Work from './Pages/Work.jsx'
import Header from './Components/Header.jsx'
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Work/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </>
  )
}

export default App

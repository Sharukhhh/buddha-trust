
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route , Routes} from 'react-router-dom'
import HomePage from './Screens/HomePage'
import AboutPage from './Screens/AboutPage'
import ContactPage from './Screens/ContactPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
        <Route element={<ContactPage/>} path='/contact'/>
      </Routes>
    </>
  )
}

export default App


import './App.css'
import Branches from './Components/Branches.jsx/Branches'
import Footer from './Components/Common/Footer/Footer'
import Header from './Components/Common/header/Header'
import Facilities from './Components/Facilities/Facilities'
import Hero from './Components/Hero/Hero'
import Service from './Components/Services/Service'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Facilities/>
      <Branches/>
      <Service/>
      <Footer/>
    </>
  )
}

export default App

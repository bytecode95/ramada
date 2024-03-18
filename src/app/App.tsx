import { About, Accommodation, Banquet, Deliver, Dining, Explore, Facilities, Footer, Hero, Offers, Testimonials } from '../components'
import Navbar from '../components/Navbar/Navbar'
import './App.css'

function App() {


  return (
    <>
      <div className='fixed top-0 w-full flex justify-center z-50'>
        <Navbar />
      </div>
      <Hero />
      <About />
      <Accommodation />
      <Facilities />
      <Offers />
      <Dining />
      <Banquet />
      <Explore />
      <Deliver />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App

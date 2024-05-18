import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FreeBook from '../Components/FreeBook'
import Footer from '../Components/Footer'

const Home = () => {
  // const [cart, setCart] = useState([])
  return (
    <div>
        <Navbar />
      <Banner  />
      <FreeBook/>
      <Footer />
    </div>
  )
}

export default Home
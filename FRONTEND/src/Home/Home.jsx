import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import FreeBook from '../Components/FreeBook'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  // const [cart, setCart] = useState([])
  return (
    <div>
        <Navbar />
      <Banner  />
     <Link to="/Course"><FreeBook/></Link> 
      <Footer />
    </div>
  )
}

export default Home
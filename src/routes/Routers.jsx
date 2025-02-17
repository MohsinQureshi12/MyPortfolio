import { Route,Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Service from'../pages/Service'
import PortfolioData from '../pages/PortfolioData'
import TechnologyPage from '../pages/TechnologyPage'
import AboutUs from '../pages/AboutUs'
import HireUs from '../pages/HireUs'
import TwentyFourHr from '../pages/TwentyFourHr'
import Contact from '../pages/Contact'

const Routers = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/portfolio-page' element={<PortfolioData/>}/>
        <Route path='/technology-page' element={<TechnologyPage/>}/>
        <Route path='/about-page' element={<AboutUs/>}/>
        <Route path='/hire-web-dev' element= {<HireUs/>}/>
        <Route path='/hire-mobile-dev' element= {<TwentyFourHr/>}/>
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default Routers
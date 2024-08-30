import { Route,Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Service from'../pages/Service'
import PortfolioData from '../pages/PortfolioData'
import TechnologyPage from '../pages/TechnologyPage'
import AboutUs from '../pages/AboutUs'

const Routers = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Service/>}/>
        <Route path='/portfolio-page' element={<PortfolioData/>}/>
        <Route path='/technology-page' element={<TechnologyPage/>}/>
        <Route path='/about-page' element={<AboutUs/>}/>
    </Routes>
    </>
  )
}

export default Routers
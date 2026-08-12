import { Route, Routes } from 'react-router-dom'
//  import Service from'../pages/Service'
import TechnologyPage from '../pages/TechnologyPage'
 import HireUs from '../pages/HireUs'
import TwentyFourHr from '../pages/TwentyFourHr'
import Contact from '../pages/Contact'
import Home from '../pages/home/index'
import AboutPage from '../pages/about'
import ServicesPage from '../pages/service/index'
import ProductPage from '../pages/product'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/services' element={<Service/>}/> */}
        <Route path='/product-page' element={<ProductPage/>} />
        <Route path='/technology-page' element={<TechnologyPage />} />
        <Route path='/service-page' element={<ServicesPage />} />
        <Route path='/about-page' element={<AboutPage />} />
        <Route path='/hire-web-dev' element={<HireUs />} />
        <Route path='/hire-mobile-dev' element={<TwentyFourHr />} />
        <Route path='/hire-ui-ux' element={<TwentyFourHr />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Routers
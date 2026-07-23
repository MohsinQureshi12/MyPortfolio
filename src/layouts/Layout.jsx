
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'
import Footer from '../components/Footer/index'
import ScrollToTop from '../hooks/ScrollTop'

const Layout = () => {
  return (
    <>
    <Header/>
    <ScrollToTop/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
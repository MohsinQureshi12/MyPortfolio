
import Header from '../components/header/index'
import Routers from '../routes/Routers'
import Footer from '../components/footer/index'
import ScrollToTop from '../hooks/ScrollTop'

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  )
}

export default Layout
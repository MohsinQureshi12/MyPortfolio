
import Header from '../components/Header/Header'
import Routers from '../routes/Routers'
import Footer from '../components/Footer/ContactDetailsPage'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout
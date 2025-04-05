import "./App.css";
import Layout from "./layouts/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  AOS.init();
  

  return (
    <>
      <Layout/>
    </>
  )
}

export default App

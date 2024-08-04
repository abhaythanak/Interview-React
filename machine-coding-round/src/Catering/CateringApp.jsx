import './Catering.css'
import Navbar from './Navbar';
import Hero from './Hero';
import ScrollingDishes from './ScrollingDishes';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function CateringApp() {
  return (
    <div className="">
      <Navbar/>
      <Hero />
      <ScrollingDishes />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default CateringApp;

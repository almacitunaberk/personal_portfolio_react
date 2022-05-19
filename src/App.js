import Header from './components/header/Header';
import About from './components/about/About';
import Testimonial from './components/testimonial/Testimonial';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

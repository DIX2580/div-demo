
import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <div className=" ">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

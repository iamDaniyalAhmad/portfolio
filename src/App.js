
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import About from './Component/About';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import Social from './Component/Social';
import Footer from './Component/Footer';

function App() {
  
  
  return (
    <>
    
    <Navbar />
    <div>
    <Hero/>
    </div>
    <div>
    <About/>
    </div>
    <div >
    <Services  />
    </div>
    <div>
    <Portfolio/>
    </div>
    <div>
    <Social/>
    </div>
    <Footer/>
    </>
  );
}

export default App;

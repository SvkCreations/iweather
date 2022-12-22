import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherByCity from './components/WeatherByCity';
import WorldForecast from './components/WorldForecast';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="container p-4 p-md-0">
          <Navbar />
          <Routes>
          <Route path='/' element={
              <>
              <Hero />
              </>
            }></Route>
            <Route path='/iweather' element={
              <>
              <Hero />
              </>
            }></Route>
            <Route exact path='/:q' element={
                <WeatherByCity/>
            }></Route>
            <Route path='*' element={
                <ErrorPage/>
            }></Route>
          </Routes>
          <WorldForecast/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;

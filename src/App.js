import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherByCity from './components/WeatherByCity';
import WorldForecast from './components/WorldForecast';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="container p-4 p-md-0">
          <Navbar />
          <Routes>
            <Route path='/iweather' element={
              <>
              <Hero />
              </>
            }></Route>
            <Route path='/iweather/:q' element={
                <WeatherByCity/>
            }></Route>
          </Routes>
          <WorldForecast/>
        </div>
      </div>
    </Router>
  );
}

export default App;

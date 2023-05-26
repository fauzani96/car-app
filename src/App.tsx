import './App.css'
import Navbar from './components/navbar/Navbar.component'
import Home from './pages/home/Home.component'
import HomeCar from './assets/images/home-car.jpg'

function App() {
  return (
    <>
      <img src={HomeCar} alt="home" className="bg-image" />
      <Navbar />
      <Home />
    </>
  )
}

export default App

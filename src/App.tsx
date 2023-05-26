import './App.css'
import Navbar from './components/navbar/Navbar.component'
import Home from './pages/home/Home.component'

function App() {
  return (
    <>
      <img
        src={
          'https://www.supercars.net/blog/wp-content/uploads/2020/09/wallpaperflare.com_wallpaper-1-1.jpg'
        }
        alt="home"
        className="bg-image"
      />
      <Navbar />
      <Home />
    </>
  )
}

export default App

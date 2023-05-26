import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer.component'
import Navbar from '../components/navbar/Navbar.component'

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

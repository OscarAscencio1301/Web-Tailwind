import { Buttons } from "./components/buttons/Buttons"
import { Cards } from "./components/cards/Cards"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Navbar } from "./components/nav/Navbar"



export const App = () => {
  return (
    <div className="w-[1920px] xsm:w-full">
      <Navbar />
      <Header />
      <Buttons />
      <Cards />
      <Footer />
    </div>
  )
}

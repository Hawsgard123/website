import { NavBar, Footer } from "@/Components/FrontPage"
import { Qutopia, KIIT, Founder } from "@/Components/About"
const about = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Qutopia />
      <KIIT />
      <Founder />
      <Footer />
    </div>
  )
}

export default about
